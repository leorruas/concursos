// Verificação de quatro páginas do lote 02 em Chromium, nas larguras desktop e mobile.
// Usa somente o site público construído; não acessa respostas ou dados pessoais.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const manifest = require('../_site/manifest.json');
const root = 'http://127.0.0.1:8765/';
const cases = [
  ['06 - poder legislativo.md', 'Foro por prerrogativa após o mandato', 'Comissões, apreciação conclusiva'],
  ['08 - poder judiciario e controle de constitucionalidade.md', 'Controle difuso', 'Súmula vinculante'],
  ['10 - processo legislativo e poder constituinte.md', 'Revisão final: quatro decisões', 'Poder constituinte'],
  ['11 - organizacao do estado.md', 'Formação de municípios', 'Como funciona uma intervenção']
];
(async () => {
  const browser = await chromium.launch({headless: true});
  const output = path.resolve('evidencias-camara-lote02');
  fs.mkdirSync(output, {recursive: true});
  const results = [];
  try {
    for (const width of [1440, 390]) {
      const context = await browser.newContext({viewport:{width,height:width===390?844:900},reducedMotion:'reduce'});
      for (const [filename, marker1, marker2] of cases) {
        const article = manifest.find(x=>x.sourcePath.endsWith('/'+filename));
        assert.ok(article?.articleId, 'Artigo sem identidade no manifesto: '+filename);
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', e=>errors.push(e.message));
        const route = root+'#/artigo/'+encodeURIComponent(article.articleId)+'?concurso=camara-2026';
        await page.goto(route,{waitUntil:'domcontentloaded',timeout:30000});
        await page.locator('#artigo-corpo h2').first().waitFor({timeout:30000});
        await page.waitForFunction(
          ([a,b]) => {
            const node=document.getElementById('artigo-corpo');
            return node && node.textContent.includes(a) && node.textContent.includes(b);
          },
          [marker1,marker2],{timeout:20000}
        );
        const result = await page.evaluate(()=>{
          const body=document.getElementById('artigo-corpo');
          return {
            visible:!!body && body.getBoundingClientRect().width>0,
            h2:body?.querySelectorAll('h2').length||0,
            tables:body?.querySelectorAll('table').length||0,
            overflow:document.documentElement.scrollWidth-window.innerWidth,
            broken:body?.textContent.includes('não foi possível carregar este artigo')||false
          };
        });
        assert.ok(result.visible && result.h2>=3,filename+': conteúdo não renderizado '+JSON.stringify(result));
        assert.ok(!result.broken,filename+': erro de carregamento');
        assert.ok(result.overflow<=4,filename+': transbordamento horizontal '+JSON.stringify(result));
        assert.deepEqual(errors,[],filename+': erro JS no navegador');
        const imagePath = path.join(output,filename.slice(0,2)+'-'+width+'.png');
        await page.screenshot({path:imagePath,fullPage:true,animations:'disabled'});
        results.push({articleId:article.articleId,width,route, ...result,screenshot:imagePath});
        await page.close();
      }
      await context.close();
    }
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(output,'resultado.json'),JSON.stringify(results,null,2));
  console.log('OK: oito verificações visuais automatizadas, 4 artigos x 2 larguras; capturas salvas.');
})().catch(error=>{console.error(error);process.exitCode=1;});
