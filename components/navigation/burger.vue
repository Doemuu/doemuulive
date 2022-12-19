<template>
  <div class="burger position-fixed">
    <div class="position-absolute">
      <div
        class="burger d-flex flex-column justify-content-around clickable"
        v-on:click="toggle()"
      >
        <span
          id="topbar"
          class="burgerbar w-100 d-block"
          :class="{ active: isActive }"
        ></span>
        <span
          id="centerbar"
          class="burgerbar w-75 d-block"
          :class="{ active: isActive }"
        ></span>
        <span
          id="bottombar"
          class="burgerbar w-100 d-block"
          :class="{ active: isActive }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    isActive: Boolean
  },
  methods: {
    toggle() {
      this.$emit('navToggle');
    },
  },
}
</script>

<style lang="scss">
.burger {
  width: 5vw;
  height: 5vw;
  max-width: 40px;
  min-width: 25px;
  max-height: 40px;
  min-height: 25px;
  right: 2%;
  top: 2%;
  .burgerbar {
    position: absolute;
    right: 0;
    height: 5px;
    background-color: var(--primary-color);
  }
  &:hover {
    #centerbar {
      transition: width 0.2s;
      width: 100% !important;
    }
  }
  #topbar {
    top: 0;
    &.active {
      transform: rotate(-135deg);
      transition: all ease-in 0.3s;
      top: auto;
    }
  }

  #centerbar {
    transition: width 0.2s;
    &.active {
      display: none !important;
    }
  }

  #bottombar {
    bottom: 0;
    &.active {
      transform: rotate(135deg);
      transition: all ease-in 0.3s;
      bottom: auto;
    }
  }
}
</style>
