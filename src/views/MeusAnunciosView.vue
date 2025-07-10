<template>
  <section class="container">
    <h2>Meus Anúncios</h2>
    <ul v-if="anuncios.length">
      <li v-for="a in anuncios" :key="a._id">
        Livro: {{ a.id_livro.titulo }} — Status: {{ a.status }}
      </li>
    </ul>
    <p v-else>Você ainda não publicou anúncios.</p>
  </section>
</template>

<script>
import { fetchMyAnnouncements } from '@/services/announcementService'

export default {
  name: 'MeusAnunciosView',
  data() { return { anuncios: [] } },
  async created() {
    const user = JSON.parse(localStorage.getItem('user'))
    const res  = await fetchMyAnnouncements(user.id)
    this.anuncios = res.data
  }
}
</script>