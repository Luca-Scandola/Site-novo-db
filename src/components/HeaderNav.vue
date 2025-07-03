<template>
  <nav class="header-nav">
    <button @click="$router.push('/')">Início</button>
    <div class="dropdown">
      <button>Opções</button>
      <ul>
        <li><router-link to="/procurados">Livros Procurados</router-link></li>
        <li><router-link to="/meus-anuncios">Meus Anúncios</router-link></li>
        <li><router-link to="/negociacoes">Negociações</router-link></li>
        <li><router-link to="/recomendacoes">Recomendações</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default { name: 'HeaderNav' }
</script>

<style scoped>
/* seu CSS para posicionar o botão no centro, menu à direita, etc. */
</style>
