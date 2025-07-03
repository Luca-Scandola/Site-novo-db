import { createRouter, createWebHistory } from 'vue-router'
import HomeView             from '@/views/HomeView.vue'
import LivrosProcuradosView from '@/views/LivrosProcuradosView.vue'
import MeusAnunciosView     from '@/views/MeusAnunciosView.vue'
import NegociacoesView      from '@/views/NegociacoesView.vue'
import RecomendacoesView    from '@/views/RecomendacoesView.vue'

const routes = [
  { path: '/',              name: 'HomeView',              component: HomeView },
  { path: '/procurados',    name: 'LivrosProcuradosView',   component: LivrosProcuradosView },
  { path: '/meus-anuncios', name: 'MeusAnunciosView',       component: MeusAnunciosView },
  { path: '/negociacoes',   name: 'NegociacoesView',        component: NegociacoesView },
  { path: '/recomendacoes', name: 'RecomendacoesView',      component: RecomendacoesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
