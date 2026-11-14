/* Cenário visual sintético: sem respostas ou histórico real do estudante. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const questions=JSON.parse(fs.readFileSync(path.join(__dirname,'../_site/data/questoes-publicas.json'),'utf8')).questions;
const evidence=path.join(__dirname,'../quiz-visual-evidence');
fs.mkdirSync(evidence,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  for(const preset of [{name:'desktop',width:1280,height:780},{name:'mobile',width:390,height:844}]){
   const context=await browser.newContext({viewport:{width:preset.width,height:preset.height}});
   const page=await context.newPage();
   const errors=[];
   page.on('pageerror',err=>errors.push(err.message));
   await page.goto('http://127.0.0.1:8765/questoes.html',{waitUntil:'networkidle',timeout:45000});
   await page.locator('#qs-config').waitFor({state:'visible',timeout:10000});
   assert.equal(await page.locator('#qs-start').isEnabled(),true,'questões precisam carregar');
   await page.screenshot({path:path.join(evidence,preset.name+'-setup.png'),fullPage:true});
   await page.locator('input[name="qs-scope"][value="single"]').check();
   await page.selectOption('#qs-materia','direito-constitucional');
   await page.locator('#qs-unidade-wrap').waitFor({state:'visible'});
   await page.selectOption('#qs-unidade','constitucional-regimentos');
   await page.locator('#qs-count').fill('2');
   await page.locator('#qs-start').click();
   for(let i=0;i<2;i++){
    const statement=(await page.locator('#qs-statement').innerText()).trim();
    const q=questions.find(x=>x.statement===statement);
    assert.ok(q,'enunciado deve existir no banco publicado');
    assert.equal(q.unitId,'constitucional-regimentos','filtro de unidade não pode trazer questões de regimento P2');
    await page.locator('input[name="qs-answer"][value="'+(q.correctAnswer==='C'?'E':'C')+'"]').check();
    if(i===0)await page.locator('#qs-insecure').check();
    await page.locator('#qs-submit').click();
    await page.locator('#qs-feedback').waitFor({state:'visible'});
    await page.locator('#qs-next').click();
   }
   await page.locator('#qs-summary').waitFor({state:'visible',timeout:10000});
   assert.equal(await page.locator('#qs-result-percent').innerText(),'0%');
   assert.ok(await page.locator('#qs-priorities .qs-recommendation').count()>0,'artigos devem ser recomendados');
   const a=await page.locator('#qs-priorities a').first().getAttribute('href');
   assert.ok(a.includes('#/artigo/')&&a.includes('secao='),'link deve apontar a uma seção do artigo');
   const horizontal=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);
   assert.equal(horizontal,false,'sem overflow horizontal na largura '+preset.width);
   assert.deepEqual(errors,[],'sem erros JavaScript na interface');
   await page.screenshot({path:path.join(evidence,preset.name+'-result.png'),fullPage:true});
   await context.close();
  }
  console.log('OK: configuração, filtro Constitucional P1, correção, recomendações e layout mobile/desktop.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
