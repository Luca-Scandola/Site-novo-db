<!-- src/components/HeaderNav.vue -->
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
          <li><router-link to="/meus-anuncios">Vender Livro</router-link></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div class="profile-menu">
        <button class="profile-btn" @click="toggle">Meu Perfil ▾</button>
        <img class="profile-pic" src="https://via.placeholder.com/32" alt="Usuário" />
        <div :class="['dropdown-content', { show: open }]">
          <router-link to="/meus-anuncios">Meus anúncios</router-link>
          <router-link to="/procurados">Livros procurados</router-link>
          <router-link to="/negociacoes">Negociações passadas</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HeaderNav',
  setup() {
    const open = ref(false)
    return { open, toggle: () => (open.value = !open.value) }
  }
}
</script>
