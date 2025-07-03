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
    <section class="category-section">
      <h2>Mais de Autor 1</h2>
      <div class="book-grid">
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título 1</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ 30,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título 2</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ 28,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título 3</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ 25,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título 4</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ 22,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título 5</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ 20,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
      </div>
    </section>

    <section class="category-section">
      <h2>Mais do gênero X</h2>
      <div class="book-grid">
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título 1</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ 35,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título 2</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ 30,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título 3</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ 27,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título 4</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ 25,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título 5</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ 22,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
      </div>
    </section>

    <section class="category-section">
      <h2>Recomendações gerais com base nas suas preferências</h2>
      <div class="book-grid">
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título 1</h3>
            <p class="author">Autor X</p>
            <p class="price">R$ 32,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título 2</h3>
            <p class="author">Autor Y</p>
            <p class="price">R$ 29,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título 3</h3>
            <p class="author">Autor Z</p>
            <p class="price">R$ 26,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título 4</h3>
            <p class="author">Autor W</p>
            <p class="price">R$ 24,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
        <article class="book-card">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título 5</h3>
            <p class="author">Autor V</p>
            <p class="price">R$ 20,00</p>
            <a href="#" class="btn">Ver Detalhes</a>
          </div>
        </article>
      </div>
    </section>
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
  name: 'RecomendacoesView'
}
</script>

<style scoped>

</style>
