export class DataService {
  constructor() {
    this.cache = {};
  }

  async fetchJson(path) {
    if (this.cache[path]) return this.cache[path];
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Falha ao carregar ${path}: ${res.statusText}`);
    const data = await res.json();
    this.cache[path] = data;
    return data;
  }

  async fetchText(path) {
    if (this.cache[path]) return this.cache[path];
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Falha ao carregar texto ${path}: ${res.statusText}`);
    const text = await res.text();
    this.cache[path] = text;
    return text;
  }

  async getConcursos() {
    return this.fetchJson('data/concursos.json');
  }

  async getMaterias() {
    return this.fetchJson('data/materias.json');
  }

  async getEdital(editalArquivo) {
    return this.fetchJson(editalArquivo);
  }

  async getQuestoes() {
    return this.fetchJson('data/questoes.json');
  }

  async getErros() {
    return this.fetchJson('data/erros.json');
  }

  async getRevisoes() {
    return this.fetchJson('data/revisoes.json');
  }

  async getNotaMarkdown(caminhoRelativo) {
    return this.fetchText(caminhoRelativo);
  }
}

export const dataService = new DataService();
