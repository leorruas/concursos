import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const manifestLocalPath = path.join(rootDir, '_site', 'manifest.json');
const baseUrlArg = process.argv[2];

if (!baseUrlArg) {
  console.error('Uso: node scripts/verify-live-pages.js <page_url>');
  process.exit(1);
}

if (!fs.existsSync(manifestLocalPath)) {
  console.error('Manifesto local _site/manifest.json não encontrado.');
  process.exit(1);
}

const esperado = JSON.parse(fs.readFileSync(manifestLocalPath, 'utf8'));
const esperadoPaths = new Set(esperado.map(item => item.sourcePath));
const baseUrl = baseUrlArg.endsWith('/') ? baseUrlArg : `${baseUrlArg}/`;
const manifestUrlBase = new URL('manifest.json', baseUrl).toString();

function diferenca(a, b) {
  return [...a].filter(item => !b.has(item));
}

async function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let ultimoErro = null;

for (let tentativa = 1; tentativa <= 6; tentativa += 1) {
  try {
    const cacheBuster = `v=${Date.now()}-${tentativa}`;
    const url = `${manifestUrlBase}${manifestUrlBase.includes('?') ? '&' : '?'}${cacheBuster}`;
    const resposta = await fetch(url, {
      headers: {
        'cache-control': 'no-cache',
        pragma: 'no-cache'
      },
      // Evita que a publicação fique indefinidamente bloqueada por uma conexão HTTP.
      signal: AbortSignal.timeout(8000)
    });

    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status} ao consultar ${manifestUrlBase}`);
    }

    const publicado = await resposta.json();
    if (!Array.isArray(publicado)) {
      throw new Error('manifest.json publicado não contém um array.');
    }

    const publicadoPaths = new Set(publicado.map(item => item.sourcePath));
    const faltandoNoSite = diferenca(esperadoPaths, publicadoPaths);
    const extrasNoSite = diferenca(publicadoPaths, esperadoPaths);

    if (faltandoNoSite.length === 0 && extrasNoSite.length === 0) {
      if (JSON.stringify(publicado.map(x=>[x.sourcePath,x.articleId,x.articleAliases,x.articleSlug,x.articleSlugAliases])) !== JSON.stringify(esperado.map(x=>[x.sourcePath,x.articleId,x.articleAliases,x.articleSlug,x.articleSlugAliases]))) throw new Error('Identidades e aliases do manifesto ao vivo divergem do build');
      // O manifesto pode permanecer igual quando muda só o catálogo de disciplinas.
      const nomeCatalogo = 'data/catalogo-materias-por-concurso.json';
      const esperadoCatalogo = JSON.parse(fs.readFileSync(path.join(rootDir, '_site', nomeCatalogo), 'utf8'));
      const urlCatalogo = new URL(nomeCatalogo + '?' + cacheBuster, baseUrl).toString();
      const respostaCatalogo = await fetch(urlCatalogo, {
        headers: { 'cache-control': 'no-cache', pragma: 'no-cache' },
        signal: AbortSignal.timeout(8000)
      });
      if (!respostaCatalogo.ok) throw new Error('Catálogo publicado: HTTP ' + respostaCatalogo.status);
      const catalogoAoVivo = await respostaCatalogo.json();
      if (JSON.stringify(catalogoAoVivo) !== JSON.stringify(esperadoCatalogo)) {
        throw new Error('Catálogo de matérias ao vivo diverge do catálogo construído');
      }
      // O índice de busca também deve corresponder ao build, não só o manifesto.
      const caminhoBusca = 'search-index.json';
      const respostaBusca = await fetch(new URL(caminhoBusca + '?' + cacheBuster, baseUrl), {
        headers: { 'cache-control': 'no-cache', pragma: 'no-cache' },
        signal: AbortSignal.timeout(8000)
      });
      if (!respostaBusca.ok) throw new Error('Índice de busca publicado: HTTP ' + respostaBusca.status);
      const buscaPublicada = await respostaBusca.json();
      const buscaEsperada = JSON.parse(fs.readFileSync(path.join(rootDir, '_site', caminhoBusca), 'utf8'));
      if (JSON.stringify(buscaPublicada) !== JSON.stringify(buscaEsperada)) {
        throw new Error('Índice de busca publicado diverge do build');
      }
      for (const recurso of ['data/flashcards.json', 'data/glossario-flashcards.json', 'flashcards.html', 'web/09-flashcards-engine.js', 'web/10-flashcards-ui.js']) {
        const res = await fetch(new URL(recurso + '?' + cacheBuster, baseUrl), {
          headers: { 'cache-control': 'no-cache' }, signal: AbortSignal.timeout(8000)
        });
        if (!res.ok) throw new Error('Flashcards publicados: HTTP ' + res.status + ' em ' + recurso);
        const local = fs.readFileSync(path.join(rootDir, '_site', recurso), 'utf8');
        if (await res.text() !== local) throw new Error('Recurso dos flashcards diverge do build: ' + recurso);
      }
      // O glossário é uma página própria: verificar dados, interface e link publicado.
      for (const recurso of ['glossario-index.json', 'web/09-glossary.js', 'index.html']) {
        const response = await fetch(new URL(recurso + '?' + cacheBuster, baseUrl), {
          headers: { 'cache-control': 'no-cache' }, signal: AbortSignal.timeout(8000)
        });
        if (!response.ok) throw new Error('Glossário publicado: HTTP ' + response.status + ' em ' + recurso);
        const local = fs.readFileSync(path.join(rootDir, '_site', recurso), 'utf8');
        if (await response.text() !== local) throw new Error('Recurso do glossário diverge do build: ' + recurso);
      }
      // Os metadados do manifesto não mudam quando o corpo Markdown é corrigido.
      // Verifique o corpo dos artigos PL11–15, PL17–22 e os materiais já monitorados.
      const materiaisAuditoria = [
        '3 - Materias/Direito Constitucional/06 - poder legislativo.md',
        '3 - Materias/Direito Constitucional/08 - poder judiciario e controle de constitucionalidade.md',
        '3 - Materias/Direito Constitucional/10 - processo legislativo e poder constituinte.md',
        '3 - Materias/Direito Constitucional/11 - organizacao do estado.md',
        '3 - Materias/Direito Constitucional/11 - proposicoes legislativas conceito e classificacao.md',
        '3 - Materias/Direito Constitucional/12 - iniciativa legislativa sujeitos e limites.md',
        '3 - Materias/Direito Constitucional/13 - tramitacao e fases do processo legislativo.md',
        '3 - Materias/Direito Constitucional/14 - comissoes parlamentares natureza competencias e poderes.md',
        '3 - Materias/Direito Constitucional/15 - parecer legislativo relatorio voto e deliberacao.md',
        '3 - Materias/Direito Constitucional/17 - sancao veto promulgacao e publicacao.md',
        '3 - Materias/Direito Constitucional/18 - procedimentos abreviado e sumario.md',
        '3 - Materias/Direito Constitucional/19 - procedimentos sumarissimo especial e concentrado.md',
        '3 - Materias/Direito Constitucional/20 - lei delegada e delegacao legislativa.md',
        '3 - Materias/Direito Constitucional/21 - medida provisoria pressupostos prazos e efeitos.md',
        '3 - Materias/Direito Constitucional/22 - projetos de decreto legislativo e resolucao.md',
        '3 - Materias/Direito Constitucional/34 - codigo de etica e decoro parlamentar da camara.md',
        '3 - Materias/Direito Constitucional/direito-constitucional.md',
        '3 - Materias/Orcamento Publico/CGU 2026 - ppa ldo e loa.md',
        '3 - Materias/Orcamento Publico/CGU 2026 - ciclo orcamentario e evidencias de auditoria.md',
        '3 - Materias/Orcamento Publico/CGU 2026 - esferas da loa e estatais dependentes.md',
        '3 - Materias/Orcamento Publico/CGU 2026 - principios orcamentarios e vedacoes.md',
        '3 - Materias/Orcamento Publico/CGU 2026 - classificacoes de receitas e despesas.md',
        '3 - Materias/Orcamento Publico/01 - orcamento publico e ciclo orcamentario.md',
        '3 - Materias/Orcamento Publico/02 - ppa ldo e loa.md',
        '3 - Materias/Orcamento Publico/02a - esferas da loa e estatais dependentes.md',
        '3 - Materias/Orcamento Publico/03 - principios orcamentarios e vedacoes constitucionais.md',
        '3 - Materias/Orcamento Publico/12 - elaboracao da proposta orcamentaria orgaos e etapas.md',
        '3 - Materias/Orcamento Publico/13 - tramitacao legislativa das leis orcamentarias.md',
        '3 - Materias/Orcamento Publico/14 - comissao mista de orcamento composicao comites e competencias.md',
        '3 - Materias/Orcamento Publico/04 - classificacoes da receita e da despesa.md',
        '3 - Materias/Orcamento Publico/04a - classificacao da receita.md',
        '3 - Materias/Orcamento Publico/04b - classificacao da despesa.md',
        '3 - Materias/Orcamento Publico/06 - programacao orcamentaria e contingenciamento.md',
        '3 - Materias/Orcamento Publico/07 - receitas publicas e estagios.md',
        '3 - Materias/Orcamento Publico/08 - despesas publicas e estagios.md',
      ];
      for (const recurso of materiaisAuditoria) {
        const localPath = path.join(rootDir, '_site', recurso);
        if (!fs.existsSync(localPath)) throw new Error('Nota auditada ausente do build: ' + recurso);
        const urlPublica = new URL(recurso, baseUrl);
        urlPublica.search = cacheBuster;
        const response = await fetch(urlPublica, {
          headers: { 'cache-control': 'no-cache', pragma: 'no-cache' },
          signal: AbortSignal.timeout(8000)
        });
        if (!response.ok) throw new Error('Nota auditada publicada: HTTP ' + response.status + ' em ' + recurso);
        const publicado = await response.text();
        const local = fs.readFileSync(localPath, 'utf8');
        if (publicado !== local) throw new Error('Nota auditada diverge do build publicado: ' + recurso);
      }
      console.log(`✓ ${materiaisAuditoria.length} artigos auditados com corpo Markdown sincronizado no Pages, incluindo os cinco artigos exclusivos da CGU, além dos artigos históricos de Orçamento Público.`);
      console.log('✓ Glossário, interface e índice de busca sincronizados no Pages.');
      console.log('✓ Coleção e interface dos flashcards sincronizadas no Pages.');
      console.log('✓ Catálogo de matérias por concurso sincronizado no Pages.');
      console.log(`✓ GitHub Pages sincronizado: ${publicadoPaths.size} artigos no manifesto ao vivo.`);
      process.exit(0);
    }

    ultimoErro = new Error(
      `Manifesto ao vivo ainda divergente. Faltando: ${faltandoNoSite.join(', ') || 'nenhum'}; extras: ${extrasNoSite.join(', ') || 'nenhum'}`
    );
  } catch (erro) {
    ultimoErro = erro;
  }

  if (tentativa < 6) {
    console.warn(`Tentativa ${tentativa}/6 ainda não confirmou o catálogo ao vivo: ${ultimoErro.message}`);
    await esperar(5000);
  }
}

console.error(`Falha ao confirmar publicação no GitHub Pages: ${ultimoErro?.message || 'erro desconhecido'}`);
process.exit(1);
