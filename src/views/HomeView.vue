<!-- src/views/HomeView.vue -->
<template>
  <section>
    <!-- Hero & Busca -->
    <section id="home" class="hero">
      <div class="container">
        <h2>Encontre livros usados a preços acessíveis</h2>
        <form class="search-form" aria-label="Buscar livros" @submit.prevent="onSearch">
          <input
            v-model="searchTerm"
            type="search"
            placeholder="Título, autor ou ISBN"
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </section>

    <!-- Vender livro -->
    <section id="vender" class="sell-book">
      <div class="container">
        <h2>Vender seu livro</h2>

        <form class="sell-form" @submit.prevent="onSubmit">
          <label>
            Título
            <input v-model="form.title" required />
          </label>

          <label>
            Autor
            <input v-model="form.author" />
          </label>

          <label>
            Preço (R$)
            <input
              v-model.number="form.price"
              type="number"
              step="0.01"
              required
            />
          </label>

          <button class="btn" type="submit">Publicar Anúncio</button>
        </form>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import { createBook }         from '@/services/bookService'
import { createAnnouncement } from '@/services/announcementService'

export default {
  name: 'HomeView',

  data() {
    return {
      searchTerm: '',
      form: {
        title:  '',
        author: '',
        price:  null
      },
      successMessage: '',
      errorMessage: ''
    }
  },

  methods: {
    onSearch() {
      // Placeholder para pesquisa; implemente conforme sua API
      console.log('Buscando por:', this.searchTerm)
    },

    async onSubmit() {
      this.errorMessage   = ''
      this.successMessage = ''

      try {
        const user = JSON.parse(localStorage.getItem('user'))

        const bookRes = await createBook({
          titulo:       this.form.title,
          autor:        this.form.author,
          preco:        this.form.price,
          id_vendedor:  user.id
        })
        const idLivro = bookRes.data._id

        // 2️⃣ cria o anúncio
        await createAnnouncement(idLivro, user.id)

        this.successMessage = 'Anúncio publicado com sucesso!'
        this.form = { title:'', author:'', price:null }
        setTimeout(() => (this.successMessage = ''), 3000)

      } catch (err) {
        console.error('Erro ao publicar anúncio', {
          status:  err.response?.status,
          data:    err.response?.data,
          message: err.message
        })
        this.errorMessage =
          err.response?.data?.error || 'Falha ao publicar o anúncio.'
      }
    }
  }
}
</script>

<style scoped>
.success {
  color: #4caf50;
  margin-top: 1rem;
}
.error {
  color: #f44336;
  margin-top: 1rem;
}
</style>
