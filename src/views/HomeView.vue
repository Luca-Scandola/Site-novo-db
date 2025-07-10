<template>
  <section>
    <section id="home" class="hero">
      <div class="container">
        <h2>Encontre livros usados a preços acessíveis</h2>
        <form class="search-form">
          <input type="search" placeholder="Título, autor ou ISBN" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>

    <section id="recomendacoes" class="catalog">
      <div class="container">
        <h2>Recomendações</h2>
        <div class="book-grid">
          <!-- ...cards estáticos... -->
        </div>
      </div>
    </section>

    <section id="vender" class="sell-book">
      <div class="container">
        <h2>Vender seu livro</h2>
        <form class="sell-form" @submit.prevent="onSubmit">
          <label>Título<input v-model="form.title" required /></label>
          <label>Autor<input v-model="form.author" /></label>
          <label>Preço (R$)<input v-model.number="form.price" type="number" step="0.01" required /></label>
          <button class="btn" type="submit">Publicar Anúncio</button>
        </form>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import { createAnnouncement } from '@/services/announcementService'

export default {
  name: 'HomeView',
  data() {
    return {
      form: { title: '', author: '', price: null },
      successMessage: ''
    }
  },
  methods: {
    async onSubmit() {
      try {
        // cria o livro via bookService, depois anúncio
        // aqui assumimos livro já criado e ID disponível
        const user = JSON.parse(localStorage.getItem('user'))
        await createAnnouncement(/* id_livro */ '...', user.id)
        this.successMessage = 'Anúncio publicado!'
        this.form = { title: '', author: '', price: null }
        setTimeout(() => (this.successMessage = ''), 3000)
      } catch (err) {
        console.error(err)
        alert('Falha ao publicar.')
      }
    }
  }
}
</script>

<style scoped>
.success {
  margin-top: 1rem;
  color: var(--accent);
  font-weight: 500;
}
</style>