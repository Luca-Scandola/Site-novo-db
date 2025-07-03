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
        <button class="profile-btn" @click="toggleDropdown">
          Meu Perfil ▾
        </button>
        <img
          src="https://via.placeholder.com/32"
          alt="Usuário"
          class="profile-pic"
        />

        <div v-show="dropdownOpen" class="dropdown-content">
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
    const dropdownOpen = ref(false)
    function toggleDropdown() {
      dropdownOpen.value = !dropdownOpen.value
    }
    return { dropdownOpen, toggleDropdown }
  }
}
</script>

<style scoped>
.site-header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

.container.header-inner {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
}

.logo a {
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.nav-list a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.profile-menu {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}

.profile-pic {
  border-radius: 50%;
}

.dropdown-content {
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.dropdown-content a {
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
}

.dropdown-content a:hover {
  background: #f5f5f5;
}
</style>
