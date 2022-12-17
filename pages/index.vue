<template>
  <Layout>
    <p>Hello World</p>
  </Layout>
</template>

<script>
import Layout from '../components/layout.vue'

export default {
  name: 'Home',
  head: {
    title: 'Home',
  },
  components: {
    Layout,
  },
}
</script>
