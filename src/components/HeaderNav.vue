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

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const open = ref(false)
const user = ref(JSON.parse(localStorage.getItem('user') || 'null'))
const router = useRouter()

const isAuth   = computed(() => !!user.value?.id)
const userName = computed(() => user.value?.nome || '')

function toggle() {
  open.value = !open.value
}

function doLogout() {
  localStorage.removeItem('user')
  window.dispatchEvent(new Event('logout'))
  router.push('/login')
}

function onLogin() {
  user.value = JSON.parse(localStorage.getItem('user') || 'null')
}

function onLogout() {
  user.value = null
}

onMounted(() => {
  window.addEventListener('login', onLogin)
  window.addEventListener('logout', onLogout)
})

onBeforeUnmount(() => {
  window.removeEventListener('login', onLogin)
  window.removeEventListener('logout', onLogout)
})
</script>
