<template>
  <div>
    <Burger :isActive="navigationTriggered" @navToggle="handleNavToggle" />
    <div v-if="navigationTriggered">
      <Navigation />
    </div>
    <div v-else>
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script>
import Burger from './navigation/burger.vue'
import Footer from './footer.vue'
import Navigation from './navigation/navigation.vue'

export default {
  name: 'Layout',
  components: {
    Burger,
    Footer,
    Navigation,
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
