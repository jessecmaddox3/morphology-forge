import {createState,serialize} from '../engine.js';
export const CURRICULA=Object.freeze({morphology:'roots-17-v1'});
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
export function cleanProgress(game,value){
 if(!CURRICULA[game])throw new TypeError('Unknown game.');
 const raw=object(value)?value:{};
 return {formatVersion:1,...serialize(createState(raw)),autoAdvance:raw.autoAdvance!==false};
}
export function normalizeSnapshot(game,value){
 if(!object(value)||value.formatVersion!==1)throw new TypeError('This saved progress needs a different app version. Keep a recovery export.');
 return cleanProgress(game,value);
}
export function exportSnapshot(game,label,snapshot){return {app:'morphology-forge',game,curriculum:CURRICULA[game],version:1,label,snapshot:normalizeSnapshot(game,snapshot)};}
export function importSnapshot(game,value){
 if(!object(value)||value.app!=='morphology-forge'||value.game!==game||value.curriculum!==CURRICULA[game]||value.version!==1)throw new TypeError('That backup belongs to another game or app version.');
 if(typeof value.label!=='string'||!value.label.trim()||value.label.trim().length>60)throw new TypeError('A backup needs a nickname of 1 to 60 characters.');
 return {label:value.label.trim(),snapshot:normalizeSnapshot(game,value.snapshot)};
}
