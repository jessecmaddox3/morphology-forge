import test from 'node:test';
import assert from 'node:assert/strict';
import * as E from '../public/engine.js';
import {BASES,INFERENCES,RELATIONS} from '../public/data.js';
const content={bases:BASES,inferences:INFERENCES,relations:RELATIONS};
test('assisted placement records learning but cannot raise the measured ceiling',()=>{
 const state=E.createState();
 for(let i=0;i<3;i++)E.recordAnswer(state,{correct:true,baseId:'tract',kind:i?'infer':'build',hinted:true});
 assert.equal(state.placed,true);assert.equal(state.tier,1);assert.equal(state.correct,3);assert.equal(E.isMastered(state,'tract'),false);
});
test('mixed placement uses only unassisted evidence',()=>{
 const state=E.createState();
 E.recordAnswer(state,{correct:true,baseId:null,kind:'build'});
 E.recordAnswer(state,{correct:true,baseId:null,kind:'build',hinted:true});
 assert.equal(E.nextTier(state),2);
 E.recordAnswer(state,{correct:true,baseId:null,kind:'infer'});
 assert.equal(state.tier,2);
});
test('invalid saved shapes cannot break startup or create impossible tiers and mastery',()=>{
 for(const value of [null,[],5,{tier:0,placed:true},{demonstrated:{tract:7},usedItems:7},{tier:Infinity,answered:-1,correct:99,probeScore:[null],recent:'yes'},{demonstrated:{tract:['build','invented'],private:['build','infer']},usedItems:[null,5,'unknown']}]){
  const s=E.createState(value);assert.ok([1,2,3].includes(s.tier));assert.ok(s.correct<=s.answered);
  assert.equal(E.masteredCount(s),0);assert.ok(E.pickRound(s,content));assert.doesNotThrow(()=>E.createState(E.serialize(s)));
 }
});
test('the adaptive window survives closing and reopening the game',()=>{
 const state=E.createState({placed:true,tier:1});
 for(let i=0;i<5;i++)E.recordAnswer(state,{correct:true,baseId:null,kind:'build'});
 const loaded=E.createState(E.serialize(state));E.recordAnswer(loaded,{correct:true,baseId:null,kind:'build'});assert.equal(loaded.tier,2);
});
test('truly empty curriculum reports an explicit error instead of unbounded recursion',()=>{
 assert.throws(()=>E.pickRound(E.createState(),{bases:[],inferences:[],relations:[]}),/No playable rounds/);
});
test('choice shuffling keeps authored answer identities without mutating content',()=>{
 const item={options:['correct','second','third','fourth'],answer:0};const original=structuredClone(item);
 const positions=new Set();
 for(const random of [()=>0,()=>0.3,()=>0.7,()=>0.99]){
  const shuffled=E.shuffleChoices(item,random);assert.equal(shuffled.length,4);assert.equal(new Set(shuffled.map(o=>o.index)).size,4);
  const at=shuffled.findIndex(o=>o.index===item.answer);positions.add(at);assert.equal(shuffled[at].text,'correct');
 }
 assert.ok(positions.size>1);assert.deepEqual(item,original);
});
test('every root has both a build route and a matching inference route to mastery',async()=>{
 const {BASE_VARIANTS}=await import('../public/data.js');
 for(const base of BASES){
  const item=INFERENCES.find(i=>i.root===base.form||BASE_VARIANTS[i.root]===base.form);assert.ok(item,base.id+' needs inference practice');assert.ok(base.words.length,base.id+' needs build practice');
  const state=E.createState({placed:true,tier:3});E.recordAnswer(state,{correct:true,baseId:base.id,kind:'build'});E.recordAnswer(state,{correct:true,baseId:base.id,kind:'infer'});assert.ok(E.isMastered(state,base.id));
 }
});
test('all build chips produce the target spelling and distinct warm-up roots get their own credit',()=>{
 for(const base of BASES)for(const word of base.words)assert.equal(word.parts.join(''),word.word);
 for(const [id,target] of [['build','rebuild'],['happy','unhappy'],['teach','teacher']])assert.ok(BASES.find(b=>b.id===id).words.some(w=>w.word===target));
});
