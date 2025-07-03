<template>

<body>
  <main>
    <section id="home" class="hero">
      <div class="container">
        <h2>Encontre livros usados a preços acessíveis</h2>
        <form class="search-form" aria-label="Buscar livros">
          <input type="search" placeholder="Título, autor ou ISBN"/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>

    <section id="recomendacoes" class="catalog">
  <div class="container">
    <h2>Recomendações</h2>
    <div class="book-grid">
      <article class="book-card">
        <img src="https://via.placeholder.com/150x220" alt="Livro Recomendado"/>
        <div class="book-info">
          <h3>Livro Recomendado</h3>
          <p class="author">Autor Exemplo</p>
          <p class="price">R$ 0,00</p>
          <a href="#" class="btn">Ver Detalhes</a>
        </div>
      </article>

      <article class="book-card">
        <img src="https://via.placeholder.com/150x220" alt="Livro Recomendado"/>
        <div class="book-info">
          <h3>Livro Recomendado</h3>
          <p class="author">Autor Exemplo</p>
          <p class="price">R$ 0,00</p>
          <a href="#" class="btn">Ver Detalhes</a>
        </div>
      </article>

      <article class="book-card">
        <img src="https://via.placeholder.com/150x220" alt="Livro Recomendado"/>
        <div class="book-info">
          <h3>Livro Recomendado</h3>
          <p class="author">Autor Exemplo</p>
          <p class="price">R$ 0,00</p>
          <a href="#" class="btn">Ver Detalhes</a>
        </div>
      </article>

      <article class="book-card">
        <img src="https://via.placeholder.com/150x220" alt="Livro Recomendado"/>
        <div class="book-info">
          <h3>Livro Recomendado</h3>
          <p class="author">Autor Exemplo</p>
          <p class="price">R$ 0,00</p>
          <a href="#" class="btn">Ver Detalhes</a>
        </div>
      </article>

      <article class="book-card more-card">
        <button class="more-btn" onclick="location.href='recomendacoes.html'">→</button>
      </article>
    </div>
  </div>
</section>


    <section id="vender" class="sell-book">
      <div class="container">
        <h2>Vender seu livro</h2>
        <form class="sell-form">
          <label>Título<input type="text" required/></label>
          <label>Autor<input type="text" required/></label>
          <label>Preço (R$)<input type="number" step="0.01" required/></label>
          <label>Imagem da capa (URL)<input type="url"/></label>
          <button type="submit">Publicar Anúncio</button>
        </form>
      </div>
    </section>
  </main>

  <footer id="contato" class="site-footer">
    <div class="container">
      <div class="contact">
        <h3>Contato</h3>
        <p>Email: suporte@bookshare.com.br</p>
      </div>
      <p>© 2025 BookShare. Todos os direitos reservados.</p>
    </div>
  </footer>
</body>

</template>

<script>
export default {
	name: 'HomeView'
}
</script>



<style scoped>

</style>
