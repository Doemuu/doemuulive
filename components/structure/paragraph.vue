<template>
  <b-container>
    <h1 class="paragraphTitle">{{ paragraph.title }}</h1>
    <h2>{{ paragraph.subtitle }}</h2>
    <div v-for="text in paragraph.texts">
      <p v-html="text.contentHtml"></p>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    paragraph: Object,
  },
}
</script>

<style lang="scss">
.paragraphTitle {
  line-height: 0.5;
  color: var(--primary-color);
}
@media (max-width: 768px) {
  .paragraphTitle {
    line-height: normal;
  }
}
</style>
