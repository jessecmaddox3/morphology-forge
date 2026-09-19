#!/usr/bin/env python3
"""Real built game and browser storage. Only fictional learners; no outside network."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
import json,subprocess
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
BANK=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {BASES,INFERENCES,RELATIONS} from './public/data.js';console.log(JSON.stringify({BASES,INFERENCES,RELATIONS}))"],cwd=ROOT,text=True))
READ_RECORDS="""()=>new Promise((resolve,reject)=>{const r=indexedDB.open('morphology-forge-morphology-v1');r.onerror=()=>reject(r.error);r.onsuccess=()=>{const db=r.result;const tx=db.transaction('records');const get=tx.objectStore('records').getAll();get.onsuccess=()=>resolve(get.result);tx.oncomplete=()=>db.close()}})"""
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
 def translate_path(self,path):
  if path.startswith('/nested/forge/'):path=path.removeprefix('/nested/forge')
  return super().translate_path(path)
def settings(p):
 if not p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Learners and backups',exact=True).click()
def close_settings(p):
 if p.locator('dialog').evaluate('(e)=>e.open'):p.get_by_role('button',name='Close',exact=True).click()
def answer_ui(p):
 close_settings(p)
 if p.locator('#next').is_visible():p.locator('#next').click()
 kind=p.locator('.kind-plain').inner_text().casefold()
 if kind=='build the word':
  clue=p.locator('#prompt .clue').inner_text();word=next(w for b in BANK['BASES'] for w in b['words'] if w['clue']==clue)
  for part in word['parts']:p.locator(f'.chip[data-part="{part}"]:not(.used)').first.click()
  p.locator('#check').click()
 elif kind=='what does it mean?':
  word=p.locator('#prompt .clue b').inner_text();item=next(i for i in BANK['INFERENCES'] if i['word']==word)
  p.get_by_role('button',name=item['options'][item['answer']],exact=True).click()
 else:
  word=p.locator('#prompt .clue b').first.inner_text();item=next(i for i in BANK['RELATIONS'] if i['a']==word)
  p.locator('.choice[data-v="'+('1' if item['related'] else '0')+'"]').click()
 assert 'good' in p.locator('#feedback').get_attribute('class')
def backup(label='Comet'):
 return {'app':'morphology-forge','version':1,'game':'morphology','curriculum':'roots-17-v1','label':label,'snapshot':{'formatVersion':1,'tier':2,'placed':True,'probeIndex':0,'probeScore':[],'relief':False,'recent':[],'demonstrated':{'tract':['build','infer']},'usedItems':[],'answered':8,'correct':6,'autoAdvance':False}}
def upload(p,value):p.get_by_label('Import a backup for this game',exact=True).set_input_files({'name':'synthetic.json','mimeType':'application/json','buffer':json.dumps(value).encode()})
def exported(p,label='Export this learner’s progress'):
 settings(p)
 with p.expect_download() as result:p.get_by_role('button',name=label,exact=True).click()
 return json.loads(Path(result.value.path()).read_text())
def main():
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT/'public')));Thread(target=server.serve_forever,daemon=True).start();origin=f'http://127.0.0.1:{server.server_port}';failures=[]
 with sync_playwright() as pw:
  browser=pw.chromium.launch()
  def check(name,action,init=None,url=None):
   ctx=browser.new_context(viewport={'width':390,'height':844});outside=[];errors=[]
   ctx.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') or r.request.url.startswith((ROOT/'artifacts').as_uri()+'/') else (outside.append(r.request.url),r.abort()))
   if init:ctx.add_init_script(init)
   ctx.on('page',lambda page:page.on('pageerror',lambda error:errors.append(str(error))))
   p=ctx.new_page();p.goto(url or origin+'/');p.get_by_role('button',name='Learners and backups',exact=True).wait_for()
   try:action(p,ctx);assert not outside,outside;assert not errors,errors;print('PASS',name,flush=True)
   except Exception as e:failures.append(name+': '+str(e));print('FAIL',name,str(e),flush=True)
   ctx.close()
  def local(p,c):
   p.locator('#auto-advance').uncheck();answer_ui(p);p.get_by_text('Saved on this device.',exact=False).wait_for();p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for()
   data=exported(p);assert data['snapshot']['answered']==1;assert not data['snapshot']['autoAdvance'];assert 'binding' not in data['snapshot']
   upload(p,backup());p.get_by_text('Morphology Forge learner: Comet.',exact=False).wait_for();assert p.locator('#mastered').inner_text()=='1';assert p.locator('#accuracy').inner_text()=='75%'
   settings(p);p.get_by_role('button',name='Play as Player 1',exact=True).click();p.get_by_text('Morphology Forge learner: Player 1.',exact=False).wait_for();assert exported(p)['snapshot']['answered']==1
   upload(p,{**backup(), 'app':'wrong-app'});p.get_by_text('Import failed:',exact=False).wait_for();assert exported(p)['snapshot']['answered']==1
  check('real answer/save/reload, actual export/import and separate learners',local)
  def temporary(p,c):
   p.get_by_text('Temporary session:',exact=False).wait_for();settings(p);upload(p,backup());p.wait_for_function("document.querySelector('#mastered').textContent==='1'")
   settings(p);p.get_by_label('New learner nickname',exact=True).fill('Orion');p.get_by_role('button',name='Add learner',exact=True).click();p.wait_for_function("document.querySelector('#mastered').textContent==='0'")
   settings(p);p.get_by_role('button',name='Play as Comet',exact=True).click();p.wait_for_function("document.querySelector('#mastered').textContent==='1'");assert exported(p)['snapshot']['answered']==8
  check('temporary sessions support importing and switching without losing progress',temporary,"Object.defineProperty(window,'indexedDB',{get(){throw Error('Synthetic unavailable')}})")
  def no_session(p,c):
   settings(p);p.get_by_label('New learner nickname',exact=True).fill('Comet');p.get_by_role('button',name='Add learner',exact=True).click();p.get_by_text('Morphology Forge learner: Comet.',exact=False).wait_for()
  check('learner changes work with sessionStorage unavailable',no_session,"Object.defineProperty(window,'sessionStorage',{get(){throw Error('Synthetic unavailable')}})")
  def future(p,c):
   p.evaluate("""()=>new Promise((resolve,reject)=>{const r=indexedDB.open('morphology-forge-morphology-v1');r.onsuccess=()=>{const db=r.result;const tx=db.transaction('records','readwrite');const store=tx.objectStore('records');store.getAll().onsuccess=e=>{const row=e.target.result[0];row.snapshot={formatVersion:99,unknown:{answered:91}};store.put(row)};tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>reject(tx.error)}})""")
   p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();raw=exported(p,'Export unreadable saved data');assert raw['snapshot']=={'formatVersion':99,'unknown':{'answered':91}};assert p.locator('#gameplay').is_hidden()
   p.get_by_label('New learner nickname',exact=True).fill('Orion');p.get_by_role('button',name='Add learner',exact=True).click();p.get_by_text('Morphology Forge learner: Orion.',exact=False).wait_for();assert p.locator('#gameplay').is_visible()
  check('unreadable saved versions stay exportable while other learners remain usable',future)
  def two_tabs(p,c):
   p.locator('#auto-advance').uncheck();p.get_by_text('Saved on this device.',exact=False).wait_for()
   q=c.new_page();q.goto(origin+'/');q.get_by_role('button',name='Learners and backups',exact=True).wait_for()
   answer_ui(p);p.get_by_text('Saved on this device.',exact=False).wait_for();answer_ui(q);q.get_by_text('Another tab saved first.',exact=False).wait_for();assert q.locator('#gameplay').evaluate('(e)=>e.inert')
   assert q.evaluate(READ_RECORDS)[0]['snapshot']['answered']==1;assert exported(q)['snapshot']['answered']==1
   recover=exported(q,'Export recovery copies');assert recover['copies'] and recover['copies'][0]['backup']['snapshot']['answered']==1
  check('competing tabs preserve the losing attempt and offer recovery without overwriting',two_tabs)
  def quota(p,c):
   p.evaluate('window.syntheticFailWrites=true');answer_ui(p);p.get_by_text('This change could not be saved.',exact=False).wait_for();assert exported(p)['snapshot']['answered']==1;assert p.evaluate(READ_RECORDS)[0]['snapshot']['answered']==0
  check('failed durable writes expose an exportable unsaved copy',quota,"const nativePut=IDBObjectStore.prototype.put;IDBObjectStore.prototype.put=function(...args){if(window.syntheticFailWrites&&this.name==='records')throw new DOMException('Synthetic quota','QuotaExceededError');return nativePut.apply(this,args)}")
  def offline(p,c):
   settings(p);upload(p,backup());p.get_by_text('Morphology Forge learner: Comet.',exact=False).wait_for();p.reload();p.get_by_role('button',name='Learners and backups',exact=True).wait_for();assert p.locator('#mastered').inner_text()=='1';settings(p);assert not p.get_by_role('button',name='Explore cloud saves',exact=True).count();close_settings(p)
   for width in [320,390,768,1440]:
    p.set_viewport_size({'width':width,'height':844});assert p.evaluate('document.documentElement.scrollWidth<=innerWidth'),width
    out=ROOT/'artifacts/browser-checks';out.mkdir(parents=True,exist_ok=True);p.screenshot(path=str(out/f'forge-{width}.png'),full_page=True)
  check('exact offline HTML saves and reloads at four widths without external requests',offline,url=(ROOT/'artifacts/Morphology-Forge.html').as_uri())
  check('nested hosting loads the full game',lambda p,c:assert_game(p),url=origin+'/nested/forge/')
  browser.close()
 server.shutdown();server.server_close()
 if failures:raise SystemExit('\n'.join(failures))
def assert_game(p):assert p.locator('#answer-area button').count()>0
if __name__=='__main__':main()
