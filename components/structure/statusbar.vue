<template>
  <div>
    <b-container>
      <h2>{{ display.title }}</h2>
      <b-row class="statusbar">
        <span
          class="bulletpoint mr-2"
          :class="{ active: display.status > 0 }"
        ></span>
        <span class="bulletpoint mx-2" :class="{ active: display.status > 1 }"></span>
        <span class="bulletpoint mx-2" :class="{ active: display.status > 2 }"></span>
        <span class="bulletpoint mx-2" :class="{ active: display.status > 3 }"></span>
        <span class="bulletpoint mx-2" :class="{ active: display.status > 4 }"></span>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    display: Object,
  },
}
</script>

<style lang="scss">
.statusbar {
  margin: 0;
  .bulletpoint {
    padding: 0;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: var(--text-color);
  }
  .active {
    background-color: var(--primary-color);
  }
}
</style>
