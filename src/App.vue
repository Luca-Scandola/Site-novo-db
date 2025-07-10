<template>
  <div id="app">
    <HeaderNav />
    <router-view />
    <ContactSection />
  </div>
</template>

<script>
import HeaderNav      from '@/components/HeaderNav.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    ContactSection
  }
}
</script>