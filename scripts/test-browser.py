#!/usr/bin/env python3
"""Source UI regressions with authored rounds and a synthetic save contract."""
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from threading import Thread
import json,subprocess
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
class Quiet(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
BANK=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {BASES,INFERENCES,RELATIONS} from './public/data.js';console.log(JSON.stringify({BASES,INFERENCES,RELATIONS}))"],cwd=ROOT,text=True))
STORAGE="""window.savedRounds=[];let auto=false;
export const readLocal=()=>({placed:true,tier:3});export const readName=()=> 'Fictional Comet';
export const writeName=()=>{};export const syncProgress=()=>{};export const sync=()=>{};
export const writeLocal=(...args)=>window.savedRounds.push(structuredClone(args.at(-1)));
export const getAutoAdvance=()=>auto;export const setAutoAdvance=value=>auto=!!value;
export const initProgress=async()=>{};
"""
def main():
 server=ThreadingHTTPServer(('127.0.0.1',0),partial(Quiet,directory=str(ROOT/'public')));Thread(target=server.serve_forever,daemon=True).start();origin=f'http://127.0.0.1:{server.server_port}';failures=[]
 with sync_playwright() as pw:
  browser=pw.chromium.launch()
  def check(name,round,action):
   ctx=browser.new_context(viewport={'width':390,'height':844});outside=[];errors=[]
   ctx.route('**/*',lambda r:r.continue_() if r.request.url.startswith(origin+'/') else (outside.append(r.request.url),r.abort()))
   for path in ['storage.js','shared/progress.js']:ctx.route('**/'+path,lambda r:r.fulfill(status=200,content_type='text/javascript',body=STORAGE))
   engine=(ROOT/'public/engine.js').read_text().replace('export function pickRound(','function originalPickRound(')+"\nexport function pickRound(){window.roundCount=(window.roundCount||0)+1;return structuredClone(window.fixtureRound)}\n"
   ctx.route('**/engine.js',lambda r:r.fulfill(status=200,content_type='text/javascript',body=engine))
   html=(ROOT/'public/index.html').read_text().replace('<script src="./bundle.js" defer></script>','<script src="./app.js" type="module"></script>')
   ctx.route(origin+'/',lambda r:r.fulfill(status=200,content_type='text/html',body=html))
   ctx.add_init_script('window.fixtureRound='+json.dumps(round)+';Math.random=()=>0;')
   p=ctx.new_page();p.on('pageerror',lambda e:errors.append(str(e)));p.goto(origin+'/');p.locator('#answer-area button').first.wait_for()
   try:action(p);assert not outside,outside;assert not errors,errors;print('PASS',name,flush=True)
   except Exception as e:failures.append(name+': '+str(e));print('FAIL',name,str(e),flush=True)
   ctx.close()
  item=BANK['INFERENCES'][0];infer={'kind':'infer','item':item,'id':'infer:'+item['word']}
  def shuffled(p):
   assert p.locator('.choice').first.inner_text()!=item['options'][item['answer']]
   p.get_by_role('button',name=item['options'][item['answer']],exact=True).click();assert p.locator('#feedback').get_attribute('class').find('good')>=0
  check('shuffled inference choices preserve correctness',infer,shuffled)
  def manual(p):
   p.get_by_role('button',name=item['options'][item['answer']],exact=True).click();p.wait_for_timeout(2200);assert p.evaluate('window.roundCount')==1
   assert p.locator('#feedback').is_visible();assert p.locator('#next').is_visible();assert p.evaluate('document.activeElement.id')=='next'
   p.locator('#next').click();assert p.evaluate('document.activeElement.id')=='prompt';assert p.locator('#feedback').is_hidden()
  check('manual advance preserves teaching feedback and keyboard focus',infer,manual)
  def build_round(word):
   b=next(b for b in BANK['BASES'] if any(w['word']==word for w in b['words']));w=next(w for w in b['words'] if w['word']==word);return {'kind':'build','base':b,'word':w,'id':'build:'+word}
  def assemble(p,r):
   for part in r['word']['parts']:p.locator(f'.chip[data-part="{part}"]:not(.used)').first.click()
   p.locator('#check').click()
  audience=build_round('audience')
  def contextual(p):assemble(p,audience);assert 'not a general word-building rule' in p.locator('#feedback').inner_text()
  check('borrowed endings use the word-specific teaching gloss',audience,contextual)
  transcript=build_round('transcript')
  def spelling(p):assemble(p,transcript);assert 'with one s' in p.locator('#feedback').inner_text()
  check('transcript teaches its prefix spelling variant',transcript,spelling)
  knowledge=next(r for r in BANK['RELATIONS'] if r['a']=='knowledge')
  def family(p):assert 'family' in p.locator('#prompt').inner_text();p.get_by_role('button',name='Yes, they are in the same word family',exact=True).click();assert 'not a compound' in p.locator('#feedback').inner_text()
  check('historical family questions are distinct from literal word sums',{'kind':'relate','item':knowledge,'id':'relate:knowledge'},family)
  autobiography=next(i for i in BANK['INFERENCES'] if i['word']=='autobiography')
  def enlarged(p):
   # Measure text geometry without the intentionally clipped goal-net animation.
   p.emulate_media(reduced_motion='reduce')
   p.evaluate("for(const sheet of document.styleSheets)for(const rule of sheet.cssRules)if(rule.style?.fontSize?.endsWith('px'))rule.style.fontSize=(parseFloat(rule.style.fontSize)*2)+'px'")
   for width in [320,390]:
    p.set_viewport_size({'width':width,'height':844});p.get_by_role('button',name=autobiography['options'][autobiography['answer']],exact=True).click();p.locator('#next').click()
    rect=p.locator('#prompt').bounding_box();assert rect['y']+rect['height']>0 and rect['y']<844,(width,rect)
    assert p.evaluate('document.documentElement.scrollWidth<=innerWidth'),('page',width,p.evaluate("[...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,id:e.id,class:e.className,right:e.getBoundingClientRect().right,width:e.getBoundingClientRect().width})).filter(e=>e.right>innerWidth+1)"))
    p.get_by_role('button',name=autobiography['options'][autobiography['answer']],exact=True).click()
    assert p.locator('#feedback').evaluate('(e)=>e.scrollWidth<=e.clientWidth'),('feedback',width,p.locator('#feedback').evaluate('(e)=>({scroll:e.scrollWidth,client:e.clientWidth})'))
    p.locator('#next').click()
  check('next question is visible at narrow widths with doubled text',{'kind':'infer','item':autobiography,'id':'infer:autobiography'},enlarged)
  browser.close()
 server.shutdown();server.server_close()
 if failures:raise SystemExit('\n'.join(failures))
if __name__=='__main__':main()
