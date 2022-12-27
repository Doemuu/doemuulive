<template>
  <b-container class="experience my-5">
    <b-row align-v="center">
      <b-col lg="3" cols="12" class="p-5">
        <img :src="srclink" alt="csharp" class="experienceimg" />
      </b-col>
      <b-col lg="9" cols="12" class="p-5">
        <CustomParagraph :paragraph="experience.paragraph" />
        <StatusBar :display="experience.statusDisplay" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CustomParagraph from './paragraph.vue'
import StatusBar from './statusbar.vue'

export default {
  props: {
    experience: Object,
  },
  data() {
    return {
      srclink: require('~/static/images/logoicons/' + this.experience.imgsrc),
    }
  },
  components: {
    CustomParagraph,
    StatusBar,
  },
}
</script>

<style lang="scss">
.experience {
  background-color: var(--secondary-color);
  .experienceimg {
    height: 144px;
    width: 144px;
  }
}
</style>
