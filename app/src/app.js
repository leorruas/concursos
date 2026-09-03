import { store } from './store.js';
import { DashboardView } from './views/DashboardView.js';
import { EditalView } from './views/EditalView.js';
import { MateriasView } from './views/MateriasView.js';
import { MateriaDetailView } from './views/MateriaDetailView.js';
import { QuestoesView } from './views/QuestoesView.js';
import { ErrosView } from './views/ErrosView.js';
import { HojeView } from './views/HojeView.js';

class App {
  constructor() {
    this.appContainer = document.getElementById('app');
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  async init() {
    await store.init();
    this.renderLayout();
    this.handleRoute();

    store.subscribe(() => {
      this.updateHeaderState();
      this.handleRoute();
    });
  }

  renderLayout() {
    const concursoAtivo = store.getConcursoAtivo();

    this.appContainer.innerHTML = `
      <div class="app-container">
        <header class="site-header">
          <div class="header-inner">
            <div class="brand">
              <a href="#/" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 8px;">
                <span>Painel de Concursos</span>
                <span class="brand-badge">SST v1.0</span>
              </a>
            </div>

            <nav class="nav-links">
              <a href="#/" class="nav-link" data-route="">Dashboard</a>
              <a href="#/edital" class="nav-link" data-route="edital">Edital</a>
              <a href="#/materias" class="nav-link" data-route="materias">Matérias</a>
              <a href="#/questoes" class="nav-link" data-route="questoes">Questões</a>
              <a href="#/erros" class="nav-link" data-route="erros">Caderno de Erros</a>
              <a href="#/hoje" class="nav-link" data-route="hoje">O que estudar</a>
            </nav>

            <div class="header-actions">
              <select id="concurso-switcher" class="concurso-select">
                ${store.concursos.map(c => `
                  <option value="${c.id}" ${c.id === concursoAtivo.id ? 'selected' : ''}>${c.nome}</option>
                `).join('')}
              </select>
              <button id="theme-toggle" class="btn-theme" title="Alternar tema">Tema</button>
            </div>
          </div>
        </header>

        <main id="main-view" class="main-content">
          <!-- Carregamento Dinâmico da Rota -->
        </main>

        <footer class="site-footer">
          Painel de Estudos Multi-Concurso • Base Permanente de Conhecimento • Compatível com GitHub Pages
        </footer>
      </div>
    `;

    // Eventos do Header
    const switcher = document.getElementById('concurso-switcher');
    if (switcher) {
      switcher.addEventListener('change', (e) => {
        store.setConcursoAtivo(e.target.value);
      });
    }

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('painel_theme', nextTheme);
      });
    }

    const savedTheme = localStorage.getItem('painel_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  updateHeaderState() {
    const concursoAtivo = store.getConcursoAtivo();
    const switcher = document.getElementById('concurso-switcher');
    if (switcher && switcher.value !== concursoAtivo.id) {
      switcher.value = concursoAtivo.id;
    }
  }

  async handleRoute() {
    const hash = window.location.hash.slice(2) || '';
    const mainView = document.getElementById('main-view');
    if (!mainView) return;

    // Atualizar links ativos
    document.querySelectorAll('.nav-link').forEach(link => {
      const route = link.dataset.route;
      if ((!hash && !route) || (route && hash.startsWith(route))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Roteamento
    if (!hash) {
      mainView.innerHTML = DashboardView.render(store);
    } else if (hash === 'edital') {
      mainView.innerHTML = EditalView.render(store);
      EditalView.attachEvents();
    } else if (hash === 'materias') {
      mainView.innerHTML = MateriasView.render(store);
    } else if (hash.startsWith('materia/')) {
      const slug = hash.replace('materia/', '');
      mainView.innerHTML = await MateriaDetailView.render(store, slug);
    } else if (hash === 'questoes') {
      mainView.innerHTML = QuestoesView.render(store);
      QuestoesView.attachEvents();
    } else if (hash === 'erros') {
      mainView.innerHTML = ErrosView.render(store);
    } else if (hash === 'hoje') {
      mainView.innerHTML = HojeView.render(store);
    } else {
      mainView.innerHTML = `<div class="card" style="text-align: center; padding: 40px;"><h2>Página não encontrada</h2><a href="#/" class="btn-primary" style="margin-top: 16px;">Voltar ao Dashboard</a></div>`;
    }

    window.scrollTo(0, 0);
  }
}

const app = new App();
app.init();
