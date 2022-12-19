<template>
  <div>
    <Burger :isActive="navigationTriggered" @navToggle="handleNavToggle" />
    <div v-if="navigationTriggered">
      <p>Hello Nav</p>
    </div>
    <div v-else>
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './footer.vue'
import Burger from './navigation/burger.vue'

export default {
  name: 'Layout',
  components: {
    Footer,
    Burger,
  },
  data() {
    return {
      navigationTriggered: false,
    }
  },
  methods: {
    handleNavToggle() {
      this.navigationTriggered = !this.navigationTriggered
    },
  },
}
</script>

<style>
</style>
