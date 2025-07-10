<template>
  <section class="container">
    <h2>Livros Cadastrados</h2>
    <AddBookForm @book-added="loadBooks" />
    <ul v-if="books.length">
      <li v-for="b in books" :key="b._id">
        {{ b.title }} — R$ {{ b.price.toFixed(2) }}
      </li>
    </ul>
    <p v-else>Nenhum livro encontrado.</p>
  </section>
</template>

<script>
import AddBookForm from '@/components/AddBookForm.vue'
import { fetchBooks } from '@/services/bookService'

export default {
  components: { AddBookForm },
  data() { return { books: [] } },
  async created() {
    this.loadBooks()
  },
  methods: {
    async loadBooks() {
      const res = await fetchBooks()
      this.books = res.data
    }
  }
}
</script>