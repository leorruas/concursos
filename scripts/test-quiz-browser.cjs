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
   assert.equal(await page.locator('#qs-finish').count(),1,'botão de encerramento na barra superior');
   const stop=await page.locator('#qs-finish').boundingBox();
   const submit=await page.locator('#qs-submit').boundingBox();
   assert.ok(stop&&submit&&submit.y-stop.y>120,'encerrar separado da ação principal de responder');
   assert.equal(await page.locator('#qs-finish').isVisible(),true);

   for(let i=0;i<2;i++){
    const statement=(await page.locator('#qs-statement').innerText()).trim();
    const q=questions.find(x=>x.statement===statement);
    assert.ok(q,'enunciado deve existir no banco publicado');
    assert.equal(q.unitId,'constitucional-regimentos','filtro de unidade não pode trazer questões de regimento P2');
    await page.locator('input[name="qs-answer"][value="'+(q.correctAnswer==='C'?'E':'C')+'"]').check();
    if(i===0)await page.locator('#qs-insecure').check();
    await page.locator('#qs-submit').click();
    await page.locator('#qs-feedback').waitFor({state:'visible'});
    assert.equal(await page.locator('#qs-answer-form').isVisible(),false,'alternativas e ações deixam espaço para explicação');
    assert.equal(await page.locator('#qs-after').isVisible(),true,'correção no contexto da questão');
    const statementBox=await page.locator('#qs-statement').boundingBox();
    const correction=await page.locator('#qs-feedback').boundingBox();
    assert.ok(correction.y>=statementBox.y+statementBox.height,'gabarito imediatamente após enunciado');

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
   // História sintética de chat + site para validar o painel unificado, sem dados privados.
   const meta=questions.find(q=>q.concursoId==='camara-2026'&&q.articleId&&q.section&&q.estimatedDifficulty);
   assert.ok(meta,'necessário um artigo com trecho e dificuldade');
   const fake={
    version:2,concursoId:'camara-2026',cut:'2026-11-14',
    summary:{valid:3,correct:2,incorrect:1,blank:0,accuracy:66.7},
    sources:{chat:{total:1},site:{total:2},siteDuplicatesSkipped:0,unmatchedCatalog:0},
    difficulty:{byLevel:[{id:meta.estimatedDifficulty,total:3,correct:2,incorrect:1,blank:0,accuracy:66.7,uncertain:1}],
      bySubject:[{id:'direito-constitucional',uncertain:1}]},
    bySubject:[{id:'direito-constitucional',total:3,correct:2,incorrect:1}],
    articles:[{articleId:meta.articleId,priority:62,reason:'1 erro, 1 acerto inseguro',concepts:[{title:'Conceito do teste'}],
      dueOn:null,mistakes:[{id:'example',date:'2026-11-14',result:'incorrect',statement:meta.statement,
        explanation:meta.explanation,section:meta.section,userAnswer:'E',correctAnswer:meta.correctAnswer}],
      uncertainCorrect:[]}],
    concepts:[{title:'Conceito do teste',subjectId:'direito-constitucional',errors:1,uncertain:1,
      attempts:3,priority:62,articles:[meta.articleId],dueOn:null}]
   };
   await page.route('**/v1/study/unified?*',route=>route.fulfill({status:200,
     contentType:'application/json',body:JSON.stringify(fake)}));
   await page.goto('http://127.0.0.1:8765/resultados.html?concurso=camara-2026',{waitUntil:'networkidle'});
   await page.locator('#results-content').waitFor({state:'visible',timeout:15000});
   assert.ok((await page.locator('#results-quiz-stats').innerText()).includes('ChatGPT'),'origem de estudo precisa aparecer');
   assert.ok((await page.locator('#results-quiz-stats').innerText()).includes('site'),'origem do site precisa aparecer');
   assert.ok((await page.locator('#results-difficulty').innerText()).includes('Acerto observado')||
     (await page.locator('#results-difficulty').innerText()).includes('Amostra pequena'),'faixas de dificuldade');
   assert.ok(await page.locator('#results-quiz-priorities a').count()>0,'link direto para leitura prioritária');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,'painel sem overflow');
   assert.deepEqual(errors,[],'painel e quiz sem erros de JS');
   await page.screenshot({path:path.join(evidence,preset.name+'-unified-results.png'),fullPage:true});
   await context.close();
  }
  console.log('OK: configuração, filtro Constitucional P1, correção, recomendações e layout mobile/desktop.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
