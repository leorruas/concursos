/* Cenário visual sintético: sem respostas ou histórico real do estudante. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {chromium}=require('playwright');
const questions=JSON.parse(fs.readFileSync(path.join(__dirname,'../_site/data/questoes-publicas.json'),'utf8')).questions;
const evidence=path.join(__dirname,'../quiz-visual-evidence');
fs.mkdirSync(evidence,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_TEST_PATH});
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
   const proposed=questions.find(q=>q.subjectId==='direito-constitucional');
   const fake={
    version:2,concursoId:'camara-2026',cut:'2026-11-14',
    summary:{valid:3,correct:2,incorrect:1,blank:0,accuracy:66.7},
    sources:{chat:{total:1},site:{total:2},siteDuplicatesSkipped:0,unmatchedCatalog:0},
    competitiveSimulations:[{date:'2026-11-14',P1:18,P2:36,total:54,objectiveMinimumMet:true}],
    adaptive:{version:1,secureErrors:1,insecureCorrect:1,byMode:{
     aprendizagem:{correct:1,incorrect:1,blank:0},revisao:{correct:1,incorrect:0,blank:0},
     simulado:{correct:0,incorrect:0,blank:1}},
     recommendations:[...Array.from({length:4}, (_,index)=>({
      concursoId:'camara-2026',subjectId:proposed.subjectId,principleId:'faltam-itens-'+index,
      title:'Revisão prioritária '+index,rationale:['Reteste vencido.'],action:'test-retention',
      priority:'high',quantity:0,questionIds:[],articles:[],nextReview:'2026-11-15'
     })),{concursoId:'camara-2026',subjectId:proposed.subjectId,principleId:'teste',title:'Regra em revisão',
      rationale:['Reteste vencido.'],action:'test-retention',priority:'high',quantity:1,questionIds:[proposed.id],
      articles:[],nextReview:'2026-11-15'},
      {concursoId:'camara-2026',subjectId:meta.subjectId,principleId:'primeira-exposicao',title:'Conteúdo inicial',
       rationale:['Unidade declarada como ainda não estudada.'],action:'study',priority:'low',
       state:'confirmed-not-studied',quantity:0,questionIds:[],articles:['article:'+meta.articleId],
       nextReview:null,selection:'Ler o recorte e praticar.'}],
     principles:[{state:'review-pending',title:'Regra em revisão',subjectId:proposed.subjectId,principleId:'teste',
      attempts:1,cycleAttemptId:'test-event',recentEvents:[{id:'test-event',date:'2026-11-11',
       result:'incorrect',confidence:'secure',origin:'ledger',daysSincePrevious:null,
       answer:'C',correctAnswer:'E',responseMs:1800}],
      signals:[{kind:'consultation-unknown',elapsed:6,date:'2026-11-18'}]}],
     coverage:{units:[{title:'Constitucional',subjectId:proposed.subjectId,studyStatus:'studied-unassessed',exposition:'2026-11-13',
      items:[{editalRef:'Referência de teste',attempts:0}]}],unmapped:1}},
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
   // Fixture extensa para validar densidade, busca e carregamento incremental.
   for(let i=1;i<=12;i++)fake.concepts.push({
    title:'Conceito de teste '+i,subjectId:'direito-constitucional',
    errors:1,uncertain:0,attempts:2,priority:50,articles:[],dueOn:null
   });
   for(let i=0;i<3;i++)fake.adaptive.recommendations.push({
    concursoId:'camara-2026',subjectId:'direito-constitucional',
    principleId:'extra-'+i,title:'Revisão adicional '+i,rationale:['Revisar ponto pendente.'],
    action:'review',priority:'medium',quantity:0,questionIds:[],articles:[],nextReview:null
   });
   const requestedExams=[];
   await page.route('**/v1/study/unified?*',route=>{
    const exam=new URL(route.request().url()).searchParams.get('concurso');
    requestedExams.push(exam);
    if(exam!=='camara-2026')return route.fulfill({
     status:401,contentType:'application/json',body:'{}'
    });
    return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(fake)});
   });
   await page.clock.install({time:new Date('2026-11-19T02:59:30Z')});
   await page.goto('http://127.0.0.1:8765/resultados.html?concurso=camara-2026',{waitUntil:'networkidle'});
   await page.locator('#results-content').waitFor({state:'visible',timeout:15000});
   const summary=page.locator('#results-unified-method');
   assert.match(await summary.innerText(), /3 tentativas válidas/);
   fake.summary.valid=4;
   await page.evaluate(()=>dispatchEvent(new StorageEvent('storage',{key:'concursos-quiz-sincronizado'})));
   await page.waitForFunction(()=>document.getElementById('results-unified-method').textContent.includes('4 tentativas válidas'));
   fake.summary.valid=5;
   await page.evaluate(()=>dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true})));
   await page.waitForFunction(()=>document.getElementById('results-unified-method').textContent.includes('5 tentativas válidas'));

   fake.summary.valid=6;
   await page.clock.fastForward(60000);
   await page.waitForFunction(()=>document.getElementById('results-unified-method').textContent.includes('6 tentativas válidas'));
   // O painel passou a ter visoes navegaveis e a manter detalhes em paginas proprias.
   assert.equal(await page.locator('#results-adaptive-actions li').count(),2,'resumo limitado a duas acoes');
   assert.equal(await page.getByText('Histórico e diagnóstico detalhado',{exact:true}).count(),0,
    'painel sem accordion estrutural legado');
   assert.ok(await page.getByRole('navigation',{name:'Páginas dos resultados'}).isVisible(),
    'navegacao de paginas visivel');
   assert.ok(await page.locator('#results-adaptive-actions a').filter({hasText:'Ver todas as revisões'}).isVisible());
   assert.ok(await page.getByRole('heading',{name:'Visão geral',exact:true}).isVisible(),
    'cada visao apresenta titulo proprio');
   assert.ok(await page.locator('#results-adaptive-actions').getByText('Bateria disponível',{exact:true}).isVisible());
   assert.match(await page.locator('#results-retention').innerText(), /após 6 dias/);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,'painel sem overflow');
   await page.screenshot({path:path.join(evidence,preset.name+'-unified-results.png'),fullPage:true});

   await page.getByRole('link',{name:'Histórico',exact:true}).click();
   assert.equal(new URL(page.url()).searchParams.get('visao'),'historico');
   assert.ok((await page.locator('#results-quiz-stats').innerText()).includes('ChatGPT'),'origem de estudo precisa aparecer');
   assert.ok((await page.locator('#results-quiz-stats').innerText()).includes('site'),'origem do site precisa aparecer');
   assert.match(await page.locator('#results-principle-history').innerText(), /Início do ciclo atual/);
   assert.match(await page.locator('#results-principle-history').innerText(), /Resposta: C · Gabarito: E/);
   assert.ok(await page.getByLabel('Conceito',{exact:true}).isVisible());
   assert.equal(await page.locator('#results-adaptive').isVisible(),false,'historico nao repete resumo');

   await page.getByRole('link',{name:'Matérias',exact:true}).click();
   assert.equal(await page.locator('#results-stats .results-stat').count(),4,'resumo com quatro indicadores');
   assert.match(await page.locator('#results-study-modes').innerText(), /Aprendizagem · 2 tentativas/);
   assert.match(await page.locator('#results-study-modes').innerText(), /Revisão · 1 tentativa ·/);
   assert.match(await page.locator('#results-study-modes').innerText(), /Bateria com correção ao final/);
   assert.match(await page.locator('#results-competitive-simulations').innerText(), /54 pontos líquidos/);
   assert.ok((await page.locator('#results-difficulty').innerText()).includes('Acerto observado')||
     (await page.locator('#results-difficulty').innerText()).includes('Amostra pequena'),'faixas de dificuldade');
   const coverage=page.locator('#results-edital-coverage summary').first();
   await coverage.focus();
   await page.keyboard.press('Enter');
   assert.ok(await page.getByText('Estudo registrado em 13/11/2026. Ainda sem avaliação na unidade.').isVisible());
   assert.ok(await page.getByText('Referência de teste · Avaliação sem registro').isVisible());

   await page.getByRole('link',{name:'Revisões',exact:true}).click();
   assert.ok(await page.locator('#results-quiz-priorities a').count()>0,'link para leitura prioritaria');
   assert.match(await page.locator('#results-review-contest-name').innerText(),/Câmara dos Deputados/);
   assert.equal(await page.locator('#results-review-activity-count').innerText(),'9');
   assert.equal(await page.locator('#results-review-article-count').innerText(),'1');
   assert.equal(await page.locator('#results-review-concept-count').innerText(),'13');
   assert.equal(await page.locator('#results-adaptive-queue-items li').count(),9,'fila completa acessivel em Revisoes');
   assert.equal(await page.locator('#results-adaptive-queue-items li:visible').count(),6,'somente seis atividades iniciais');
   await page.locator('#results-adaptive-queue-items').getByRole('button',{name:'Mostrar mais 3 atividades'}).click();
   assert.equal(await page.locator('#results-adaptive-queue-items li:visible').count(),9);
   assert.match(await page.locator('#results-concepts .results-concept-count').innerText(),/13 conceitos em 1 matéria · mostrando 8 de 13/);
   assert.equal(await page.locator('#results-concepts .results-concept-compact:visible').count(),8);
   await page.getByRole('searchbox',{name:'Buscar conceitos para revisão'}).fill('teste 12');
   assert.equal(await page.locator('#results-concepts .results-concept-compact:visible').count(),1);
   await page.getByRole('searchbox',{name:'Buscar conceitos para revisão'}).fill('');
   await page.locator('#results-concepts').getByRole('button',{name:'Mostrar mais 5 conceitos'}).click();
   assert.equal(await page.locator('#results-concepts .results-concept-compact:visible').count(),13);
   const defaultLinkColor=await page.locator('#results-concepts .results-link').first().evaluate(link=>getComputedStyle(link).color);
   assert.notEqual(defaultLinkColor,'rgb(0, 0, 238)','links nao podem usar azul nativo');
   assert.notEqual(defaultLinkColor,'rgb(85, 26, 139)','links visitados nao podem usar roxo nativo');
   await page.locator('#results-theme').click();
   const alternateColor=await page.locator('#results-concepts .results-link').first().evaluate(link=>getComputedStyle(link).color);
   assert.notEqual(alternateColor,'rgb(0, 0, 238)','tema alternativo sem azul nativo');
   assert.notEqual(alternateColor,'rgb(85, 26, 139)','tema alternativo sem roxo nativo');
   await page.locator('#results-theme').click();
   assert.ok(await page.getByRole('heading',{name:'Estudar · Conteúdo inicial'}).isVisible());
   const discursive=page.getByText('Treinar discursiva',{exact:true});
   assert.ok(await discursive.isVisible(),'propostas discursivas acessiveis em Revisoes');
   await discursive.click();
   assert.ok(await page.locator('#results-discursive > details').first().evaluate(node=>node.open),
    'secao de discursivas abre sob demanda');

   await page.getByRole('link',{name:'Resumo',exact:true}).click();
   assert.equal(new URL(page.url()).searchParams.get('visao'),'resumo');
   // O seletor de concurso limpa o painel anterior e consulta somente o concurso escolhido.
   await page.selectOption('#results-contest','cgu-2026');
   await page.locator('#results-login').waitFor({state:'visible'});
   assert.equal(await page.locator('#results-content').isVisible(),false,
    'dados da Câmara nao aparecem sob CGU ao trocar o concurso');
   assert.equal(requestedExams.at(-1),'cgu-2026');
   await page.selectOption('#results-contest','camara-2026');
   await page.locator('#results-content').waitFor({state:'visible'});
   assert.equal(requestedExams.at(-1),'camara-2026');
   assert.deepEqual(errors,[],'painel e quiz sem erros JS');
   const launch=page.locator('#results-adaptive-actions').getByRole('link',{name:'Preparar bateria de 1 questão(ões)'});
   await launch.focus();
   await page.keyboard.press('Enter');
   const start=page.getByRole('button',{name:'Iniciar bateria recomendada (1)'});
   await start.focus();
   await page.keyboard.press('Enter');
   assert.equal((await page.locator('#qs-statement').innerText()).trim(),proposed.statement.trim());
   assert.ok(await page.getByLabel('Consultou material para responder?').isVisible());
   await page.getByLabel('Consultou material para responder?').selectOption('no');
   await page.getByLabel('Já tinha visto a correção deste item?').selectOption('no');
   await page.locator('input[name="qs-answer"][value="C"]').check();
   await page.locator('#qs-submit').click();
   const last=await page.evaluate(()=>{
    const active=localStorage.getItem('concursos-quiz-ativa-v1');
    return JSON.parse(localStorage.getItem('concursos-quiz-sessoes-v1')).find(s=>s.id===active).answers[0];
   });
   assert.ok(Number.isSafeInteger(last.responseMs) && last.responseMs >= 0);
   assert.equal(last.consulted,false);
   assert.equal(last.feedbackBefore,false);
   assert.deepEqual(errors,[],'fluxo adaptativo sem erros de JS');

   // Exercitar a navegacao da origem autenticada sem acessar qualquer dado real.
   // O servidor local substitui somente os arquivos publicos, e a API recebe fixture sintética.
   const workerPage=await context.newPage();
   const workerErrors=[];
   workerPage.on('pageerror',error=>workerErrors.push(error.message));
   await workerPage.route('https://concurso-estudo.leoruas.workers.dev/**',async route=>{
    const requested=new URL(route.request().url());
    if(requested.pathname==='/v1/study/unified')
     return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(fake)});
    if(requested.pathname.startsWith('/v1/'))
     return route.fulfill({status:401,contentType:'application/json',body:'{}'});
    const pathname=new RegExp('^/resultados-(?:resumo|revisoes|materias|historico)[.]html$').test(requested.pathname)
     ? '/resultados.html':requested.pathname;
    const upstream=await fetch('http://127.0.0.1:8765'+pathname);
    return route.fulfill({status:upstream.status,
     contentType:upstream.headers.get('content-type')||'text/plain',
     body:Buffer.from(await upstream.arrayBuffer())});
   });
   await workerPage.goto('https://concurso-estudo.leoruas.workers.dev/resultados-resumo.html?concurso=camara-2026',
    {waitUntil:'networkidle'});
   await workerPage.locator('#results-content').waitFor({state:'visible',timeout:15000});
   assert.ok(await workerPage.getByRole('heading',{name:'Visão geral',exact:true}).isVisible());
   assert.equal(new URL(workerPage.url()).pathname,'/resultados-resumo.html');
   await workerPage.selectOption('#results-subject-filter','direito-constitucional');
   const revisionUrl=workerPage.getByRole('navigation',{name:'Páginas dos resultados'})
    .getByRole('link',{name:'Revisões',exact:true});
   await revisionUrl.click();
   assert.equal(new URL(workerPage.url()).pathname,'/resultados-revisoes.html',
    'Worker deve abrir documento independente de Revisoes');
   assert.equal(new URL(workerPage.url()).searchParams.get('materia'),'direito-constitucional',
    'Materia deve sobreviver a navegacao');
   assert.equal(new URL(workerPage.url()).searchParams.get('concurso'),'camara-2026');
   await workerPage.locator('#results-content').waitFor({state:'visible',timeout:15000});
   assert.ok(await workerPage.getByRole('heading',{name:'Revisões',exact:true}).first().isVisible());
   await workerPage.goBack({waitUntil:'networkidle'});
   assert.equal(new URL(workerPage.url()).pathname,'/resultados-resumo.html','Voltar recupera o resumo');
   await workerPage.locator('#results-content').waitFor({state:'visible',timeout:15000});
   assert.deepEqual(workerErrors,[],'rotas autenticadas simuladas sem erros JavaScript');

   // Testar a escolha de destino de login ao faltar sessao.
   await workerPage.route('**/v1/study/unified?*',route=>
    route.fulfill({status:401,contentType:'application/json',body:'{}'}));
   await workerPage.goto('https://concurso-estudo.leoruas.workers.dev/resultados-historico.html?concurso=camara-2026&materia=direito-constitucional',
    {waitUntil:'networkidle'});
   await workerPage.locator('#results-login').waitFor({state:'visible',timeout:15000});
   const authLink=new URL(await workerPage.locator('#results-login').getAttribute('href'));
   assert.equal(authLink.searchParams.get('return'),
    '/resultados-historico.html?concurso=camara-2026&materia=direito-constitucional',
    'Login deve manter pagina, concurso e materia');
   await workerPage.close();
   await context.close();
  }
  console.log('OK: configuração, filtro Constitucional P1, correção, recomendações e layout mobile/desktop.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
