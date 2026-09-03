import { dataService } from './services/dataService.js';

class Store {
  constructor() {
    this.concursos = [];
    this.materias = [];
    this.editalAtual = [];
    this.questoes = [];
    this.erros = [];
    this.revisoes = [];
    
    // Concurso ativo salvo em localStorage ou padrão
    const salvo = localStorage.getItem('painel_concurso_ativo');
    this.concursoAtivoId = salvo || 'conc-dataprev-2026';
    
    this.subscribers = [];
  }

  async init() {
    this.concursos = await dataService.getConcursos();
    this.materias = await dataService.getMaterias();
    this.questoes = await dataService.getQuestoes();
    this.erros = await dataService.getErros();
    this.revisoes = await dataService.getRevisoes();
    
    await this.carregarEditalAtivo();
    this.notify();
  }

  getConcursoAtivo() {
    return this.concursos.find(c => c.id === this.concursoAtivoId) || this.concursos[0];
  }

  async setConcursoAtivo(concursoId) {
    this.concursoAtivoId = concursoId;
    localStorage.setItem('painel_concurso_ativo', concursoId);
    await this.carregarEditalAtivo();
    this.notify();
  }

  async carregarEditalAtivo() {
    const concurso = this.getConcursoAtivo();
    if (concurso && concurso.editalArquivo) {
      this.editalAtual = await dataService.getEdital(concurso.editalArquivo);
    } else {
      this.editalAtual = [];
    }
  }

  getMateria(materiaId) {
    return this.materias.find(m => m.id === materiaId);
  }

  getErrosDoConcurso() {
    return this.erros.filter(e => e.concursoId === this.concursoAtivoId);
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    for (const cb of this.subscribers) {
      cb(this);
    }
  }
}

export const store = new Store();
