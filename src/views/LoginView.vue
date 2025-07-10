<template>
  <section class="container">
    <h2>Login</h2>
    <form @submit.prevent="doLogin">
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.senha" type="password" placeholder="Senha" required />
      <button class="btn" type="submit">Entrar</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </section>
</template>

<script>
import { login } from '@/services/authService'

export default {
  name: 'LoginView',
  data() {
    return { form: { email: '', senha: '' }, error: '' }
  },
  methods: {
    async doLogin() {
      try {
        const res = await login(this.form)
        localStorage.setItem('user', JSON.stringify(res.data))
        this.$router.push('/')
      } catch (e) {
        this.error = e.response?.data?.error || 'Falha no login'
      }
    }
  }
}
</script>