<template>
  <div class="position-absolute centered">
    <a
      v-for="route in routes"
      :href="route.href"
      :target="route.isExternal ? '_blank' : '_self'"
      class="clickable"
      :class="route.id == currentNavId ? 'active' : ''"
      ><h1>{{ route.title }}</h1></a
    >
  </div>
</template>

<script>
import routes from '../../data/navigation/routes'
export default {
  name: 'Navigation',
  data() {
    return {
      currentNavId: 0,
      routes: routes,
    }
  },
  mounted() {
    for (var routeId in this.routes) {
      if (this.routes[routeId].href === this.$route.path) {
        this.currentNavId = this.routes[routeId].id
        break
      }
    }
  },
}
</script>

<style lang="scss">
.centered {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.active {
  color: var(--primary-color);
}
</style>
