(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.OpenPathContent=api;})(globalThis,function(){
 'use strict';
 const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
 function assert(ok,message){if(!ok)throw new Error(message)}
 function keys(x,expected){assert(object(x),'Expected an object');assert(Object.keys(x).sort().join('|')===expected.slice().sort().join('|'),'Unexpected or missing fields')}
 function text(s,max=4000){assert(typeof s==='string'&&s.trim().length>0&&s.length<=max,'Invalid text');assert(!/[<>\u0000-\u0008\u000b\u000c\u000e-\u001f\u202a-\u202e\u2066-\u2069]/u.test(s),'Markup or hidden control characters are not allowed');assert(!/(?:https?:\/\/|javascript:|data:|ignore\s+(?:all\s+)?previous\s+instructions|system\s+prompt)/i.test(s),'Links or instruction-like content needs maintainer review')}
 function validate(data){
  keys(data,['version','band','locale','provenance','subjects','projects']);assert(data.version===1,'Unsupported version');assert(['elementary','middle'].includes(data.band),'Unknown band');assert(data.locale==='en','Unsupported locale');
  keys(data.provenance,['license','origin','reviewStatus']);assert(data.provenance.license==='MIT','License must be MIT');text(data.provenance.origin,500);assert(data.provenance.reviewStatus==='needs-educator-review','Review status is maintained through PR reviews, not self-certification');
  assert(Array.isArray(data.subjects)&&data.subjects.length===3,'Expected three subjects');const ids=new Set();
  for(const s of data.subjects){keys(s,['id','name','symbol','topic','description','lessons']);assert(['math','reading','science'].includes(s.id)&&!ids.has(s.id),'Invalid or duplicate subject');ids.add(s.id);for(const k of ['name','symbol','topic','description'])text(s[k],500);assert(Array.isArray(s.lessons)&&s.lessons.length===3,'Expected three lessons');
   for(const l of s.lessons){keys(l,['title','text','q','options','answer','hint','why']);for(const k of ['title','text','q','hint','why'])text(l[k]);assert(Array.isArray(l.options)&&l.options.length===3,'Expected three options');l.options.forEach(x=>text(x,500));assert(new Set(l.options).size===3,'Duplicate answer choices');assert(Number.isInteger(l.answer)&&l.answer>=0&&l.answer<l.options.length,'Invalid answer index')}
  }
  assert(Array.isArray(data.projects)&&data.projects.length===2,'Expected two projects');const pids=new Set();
  for(const p of data.projects){keys(p,['id','title','skill','time','description','steps']);assert(/^[a-z][a-z0-9-]{0,40}$/.test(p.id)&&!pids.has(p.id),'Invalid or duplicate project');pids.add(p.id);for(const k of ['title','skill','time','description'])text(p[k],1000);assert(Array.isArray(p.steps)&&p.steps.length>=1&&p.steps.length<=10,'Invalid project steps');p.steps.forEach(s=>text(s,2000))}
  return data;
 }
 function validProgress(s){return object(s)&&s.version===1&&Array.isArray(s.mastered)&&s.mastered.length<=9&&s.mastered.every(x=>/^(math|reading|science):[0-2]$/.test(x))&&Array.isArray(s.attempts)&&s.attempts.length<=10000&&s.attempts.every(a=>object(a)&&['math','reading','science'].includes(a.subject)&&typeof a.title==='string'&&a.title.length<=500&&typeof a.correct==='boolean'&&typeof a.at==='string'&&Number.isFinite(Date.parse(a.at)))&&object(s.reflections)&&Object.entries(s.reflections).every(([k,v])=>['pitch','story','build','kindness'].includes(k)&&typeof v==='string'&&v.length<=3000)&&Number.isFinite(s.minutes)&&s.minutes>=0&&s.minutes<=1000000;}
 return Object.freeze({validate,validProgress});
});
