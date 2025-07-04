<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderNav/>

    <div class="content">
      <router-view/>
    </div>

    <ContactSection/>
  </div>
</template>

<script>
import HeaderNav     from '@/components/HeaderNav.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  components: { HeaderNav, ContactSection }
}
</script>
