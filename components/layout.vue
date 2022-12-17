<template>
  <div>
    <slot />
    <Footer/>
  </div>
</template>

<script>
import Footer from './footer.vue'

export default {
  name: 'Layout',
  components: {
    Footer,
  },
}
</script>

<style>
</style>
