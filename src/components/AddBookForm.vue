<template>
  <form @submit.prevent="onSubmit">
    <input v-model="form.title"   placeholder="Título" required />
    <input v-model="form.author"  placeholder="Autor" />
    <input v-model.number="form.price" type="number" placeholder="Preço" />
    <select v-model="form.condition">
      <option value="novo">Novo</option>
      <option value="usado">Usado</option>
    </select>
    <button type="submit">Adicionar Livro</button>
  </form>
</template>

<script>
import { createBook } from '@/services/bookService'

export default {
  name: 'AddBookForm',
  data() {
    return {
      form: { title: '', author: '', price: 0, condition: 'usado' }
    }
  },
  methods: {
    async onSubmit() {
      try {
        await createBook(this.form)
        this.$emit('book-added')
        this.form = { title: '', author: '', price: 0, condition: 'usado' }
      } catch (e) {
        console.error('Erro ao adicionar:', e)
      }
    }
  }
}
</script>