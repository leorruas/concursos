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
      }
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
