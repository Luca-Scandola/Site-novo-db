<template>
  <div id="app">
    <HeaderNav/>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  components: { HeaderNav }
}
</script>