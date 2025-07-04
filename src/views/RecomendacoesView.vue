<!-- src/views/RecomendacoesView.vue -->

<template>
  <section class="container">
    
    <section class="category-section">
      <h2>Mais de Autor 1</h2>
      <div class="book-grid">
        <article class="book-card" v-for="n in 5" :key="'A1-'+n">
          <img src="https://via.placeholder.com/150x220" alt="Livro A1"/>
          <div class="book-info">
            <h3>Livro A1 - Título {{ n }}</h3>
            <p class="author">Autor 1</p>
            <p class="price">R$ {{ 35 - (n*2) }},00</p>
            <router-link to="#" class="btn">Ver Detalhes</router-link>
          </div>
        </article>
      </div>
    </section>
    
    <section class="category-section">
      <h2>Mais do gênero X</h2>
      <div class="book-grid">
        <article class="book-card" v-for="n in 5" :key="'GX-'+n">
          <img src="https://via.placeholder.com/150x220" alt="Livro Gênero X"/>
          <div class="book-info">
            <h3>Gênero X - Título {{ n }}</h3>
            <p class="author">Autor Exemplo</p>
            <p class="price">R$ {{ 40 - (n*3) }},00</p>
            <router-link to="#" class="btn">Ver Detalhes</router-link>
          </div>
        </article>
      </div>
    </section>
    
    <section class="category-section">
      <h2>Recomendações gerais com base nas suas preferências</h2>
      <div class="book-grid">
        <article class="book-card" v-for="n in 5" :key="'G-'+n">
          <img src="https://via.placeholder.com/150x220" alt="Recomendação Geral"/>
          <div class="book-info">
            <h3>Geral - Título {{ n }}</h3>
            <p class="author">Autor {{ String.fromCharCode(64 + n) }}</p>
            <p class="price">R$ {{ 30 - (n*1) }},00</p>
            <router-link to="#" class="btn">Ver Detalhes</router-link>
          </div>
        </article>
      </div>
    </section>
    
  </section>
</template>

<script>
export default {
  name: 'RecomendacoesView'
}
</script>
