<template>

<body>
  <header class="site-header">
    <div class="container header-inner">
      <h1 class="logo"><a href="index.html">BookShare</a></h1>
      <nav>
        <ul class="nav-list">
          <li><a href="index.html">Início</a></li>
          <li><a href="recomendacoes.html">Recomendações</a></li>
          <li><a href="meusAnuncios.html">Vender Livro</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <div class="profile-menu">
        <button id="profileBtn" class="profile-btn">Meu Perfil ▾</button>
        <img src="https://via.placeholder.com/32" alt="Usuário" class="profile-pic"/>
        <div id="profileDropdown" class="dropdown-content">
          <a href="meus-anuncios.html">Meus anúncios</a>
          <a href="livros-procurados.html">Livros procurados</a>
          <a href="negociacoes.html">Negociações passadas</a>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <h2>Meus Anúncios</h2>
    <p>Aqui ficarão todos os livros que você colocou à venda.</p>
  </main>
  
  <footer id="contato" class="site-footer">
    <div class="container">
      <div class="contact">
        <h3>Contato</h3>
        <p>Email: suporte@bookshare.com.br</p>
      </div>
    </div>
  </footer>

</body>

</template>

<script>
export default {
  name: 'MeusAnunciosView'
}
</script>

<style scoped>

</style>
