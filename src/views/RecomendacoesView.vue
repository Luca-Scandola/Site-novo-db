<template>
  <section class="recomendacoes container">
    <h2>Recomendações</h2>

    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

    <div class="book-grid">
      <div
        v-for="ann in recommendations"
        :key="ann._id"
        class="card"
      >
        <h3>{{ ann.livro.titulo }}</h3>
        <p>Autor: {{ ann.livro.autor }}</p>
        <p>Preço: R$ {{ ann.livro.preco.toFixed(2) }}</p>
        <p>Vendedor: {{ ann.vendedor?.nome || 'Desconhecido' }}</p>
      </div>

      <p v-if="!recommendations.length && !errorMessage">
        Nenhum anúncio disponível no momento.
      </p>
    </div>
  </section>
</template>

<script>
import { fetchAllAnnouncements } from '@/services/announcementService'

export default {
  name: 'RecomendacoesView',
  data() {
    return {
      recommendations: [],
      errorMessage: ''
    }
  },
  async created() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    try {
      const res = await fetchAllAnnouncements()
      this.recommendations = res.data
        .filter(ann => ann.id_usuario !== user.id)
        .map(ann => {
          return {
            ...ann,
            livro: ann.id_livro,
            vendedor: ann.id_usuario
          }
        })
    } catch (err) {
      console.error('Erro ao carregar recomendações:', err)
      this.errorMessage = 
        err.response?.data?.error ||
        'Não foi possível carregar as recomendações.'
    }
  }
}
</script>

<style scoped>
.recomendacoes {
  padding: 2rem 0;
}

.book-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  margin-top: 1rem;
}

.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.error {
  color: #f44336;
  margin-bottom: 1rem;
}
</style>
