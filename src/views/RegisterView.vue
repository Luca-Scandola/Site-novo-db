<template>
  <section class="container">
    <h2>Cadastro</h2>
    <form @submit.prevent="doRegister">
      <input v-model="form.nome"  placeholder="Nome"  required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.senha" type="password" placeholder="Senha" required />
      <button class="btn" type="submit">Cadastrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </section>
</template>

<script>
import { register } from '@/services/authService'

export default {
  name: 'RegisterView',
  data() {
    return { form: { nome: '', email: '', senha: '' }, error: '' }
  },
  methods: {
    async doRegister() {
      try {
        await register(this.form)
        this.$router.push('/login')
      } catch (e) {
        this.error = e.response?.data?.error || 'Falha no cadastro'
      }
    }
  }
}
</script>