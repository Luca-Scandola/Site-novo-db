import { createRouter, createWebHistory } from 'vue-router'
import HomeView             from '@/views/HomeView.vue'
import LivrosProcuradosView from '@/views/LivrosProcuradosView.vue'
import MeusAnunciosView     from '@/views/MeusAnunciosView.vue'
import NegociacoesView      from '@/views/NegociacoesView.vue'
import RecomendacoesView    from '@/views/RecomendacoesView.vue'
import LoginView            from '@/views/LoginView.vue'
import RegisterView         from '@/views/RegisterView.vue'

const routes = [
  { path: '/',              name: 'Home',           component: HomeView },
  { path: '/procurados',    name: 'Procurados',     component: LivrosProcuradosView },
  { path: '/meus-anuncios', name: 'MeusAnuncios',   component: MeusAnunciosView, meta: { requiresAuth: true } },
  { path: '/negociacoes',   name: 'Negociacoes',    component: NegociacoesView },
  { path: '/recomendacoes', name: 'Recomendacoes',  component: RecomendacoesView },
  { path: '/login',         name: 'Login',          component: LoginView },
  { path: '/register',      name: 'Register',       component: RegisterView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = !!JSON.parse(localStorage.getItem('user') || 'null')
  if (to.meta.requiresAuth && !isAuth) {
    return next('/login')
  }
  next()
})

export default router
