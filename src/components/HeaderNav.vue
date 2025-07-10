<template>
  <header class="site-header">
    <div class="container header-inner">

      <h1 class="logo">
        <router-link to="/">BookShare</router-link>
      </h1>

      <nav>
        <ul class="nav-list">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/recomendacoes">Recomendações</router-link></li>

          <li v-if="!isAuth"><router-link to="/login">Entrar</router-link></li>
          <li v-if="!isAuth"><router-link to="/register">Cadastrar</router-link></li>

          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <div v-if="isAuth" class="profile-menu">
        <button class="profile-btn" @click="toggle">
          {{ userName }} ▾
        </button>
        <div :class="['dropdown-content', { show: open }]">
          <router-link to="/recomendacoes">Recomendações</router-link>
          <router-link to="/meus-anuncios">Meus Anúncios</router-link>
          <button class="profile-btn" @click="doLogout">Sair</button>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderNav',
  setup() {
    const open   = ref(false)
    const router = useRouter()

    // usuário logado salvo em localStorage como { id, nome, email }
    const user     = computed(() => {
      try {
        return JSON.parse(localStorage.getItem('user')) || {}
      } catch {
        return {}
      }
    })
    const userName = computed(() => user.value.nome || '')

    const isAuth = computed(() => !!user.value.id)

    const toggle = () => {
      open.value = !open.value
    }

    const doLogout = () => {
      localStorage.removeItem('user')
      router.push('/login')
    }

    return {
      open,
      isAuth,
      userName,
      toggle,
      doLogout
    }
  }
}
</script>
