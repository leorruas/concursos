// Teste de interface em navegador real: consulta, expansão e adaptação do glossário.
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
(async () => {
  const output = path.resolve(process.cwd(), 'glossary-visual-evidence');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 900 },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce'
    });
    const page = await context.newPage();
    page.on('pageerror', err => errors.push(width + ': ' + err.message));
    await page.goto('http://127.0.0.1:8765/#/glossario?concurso=cgu-2026', { waitUntil: 'networkidle' });
    await page.locator('#glossario-resultados .glossario-item').first().waitFor({ timeout: 20000 });
    const count = await page.locator('#glossario-resultados .glossario-item').count();
    assert.equal(count, 228, 'Listagem inicial deve mostrar 228 verbetes em ' + width);
    await page.screenshot({ path: path.join(output, 'glossario-' + width + '-listagem.png') });
    await page.locator('#glossario-busca').fill('ciclo operacional normal');
    await page.locator('[data-glossario-term="glo-ciclo-operacional-normal"]').waitFor();
    const matches = await page.locator('#glossario-resultados .glossario-item').count();
    assert.equal(matches, 1, 'Busca deve encontrar exatamente o ciclo operacional');
    const toggle = page.locator('[data-glossario-term="glo-ciclo-operacional-normal"]');
    await toggle.click();
    await page.locator('#glossario-detalhe-glo-ciclo-operacional-normal').waitFor();
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true', 'A expansão deve informar estado acessível');
    assert.match(await page.locator('#glossario-detalhe-glo-ciclo-operacional-normal').innerText(), /doze meses|12 meses/i);
    const overflow = await page.evaluate(() => ({
      page: document.documentElement.scrollWidth - window.innerWidth,
      results: document.getElementById('glossario-resultados').getBoundingClientRect().right - window.innerWidth
    }));
    assert.ok(overflow.page <= 3 && overflow.results <= 3, 'Conteúdo horizontalmente cortado: ' + JSON.stringify(overflow));

    if (width <= 650) {
      const floating = await page.locator('#glossario-voltar-topo').evaluate(node => {
        const style = getComputedStyle(node);
        const results = document.getElementById('glossario-resultados').getBoundingClientRect();
        const button = node.getBoundingClientRect();
        return { position: style.position, resultsBottom: results.bottom, buttonTop: button.top };
      });
      assert.equal(floating.position, 'static', 'Botão móvel não deve cobrir definições');
      assert.ok(floating.buttonTop >= floating.resultsBottom,
        'Botão de retorno deve ficar após a lista no fluxo do documento');
    }

    await page.screenshot({ path: path.join(output, 'glossario-' + width + '-detalhe.png') });
    await page.locator('#glossario-busca').fill('');
    await page.locator('#glossario-materia').selectOption('contabilidade-publica');
    assert.equal(await page.locator('#glossario-resultados .glossario-item').count(), 45,
      'Filtro Contabilidade deve listar 45 verbetes');
    console.log('SUCESSO visual ' + width + 'px: 228 termos, busca, detalhe acessível, filtro e largura');
    await context.close();
  }
  assert.deepEqual(errors, [], 'Erros JavaScript no navegador');
  await browser.close();
})().catch(e => { console.error(e); process.exitCode = 1; });
