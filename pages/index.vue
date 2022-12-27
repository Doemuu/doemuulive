<template>
  <Layout>
    <client-only placeholder="Loading...">
      <VueAgile
        class="motivation"
        :navButtons="false"
        :autoplay="true"
        :infinite="true"
        :fade="true"
        :autoplaySpeed="7000"
        :pauseOnHover="false"
      >
        <div v-for="quote in quotes" class="slide">
          <div class="text">
            <div v-html="quote.textHtml"></div>
            <div v-html="quote.authorHtml"></div>
          </div>
        </div>
      </VueAgile>
      <CustomParagraph class="paragraph" :paragraph="personalParagraph" />
    </client-only>
    <div v-for="experience in personalExperiences">
      <ExperienceCard :experience="experience" />
    </div>
  </Layout>
</template>

<script>
import quotes from '../data/quotes/quotes'
import personalParagraph from '../data/details/personalParagraph'
import personalExperiences from '../data/details/personalExperiences'

import Layout from '../components/layout.vue'
import CustomParagraph from '../components/structure/paragraph.vue'
import ExperienceCard from '../components/structure/experiencecard.vue'
import { VueAgile } from 'vue-agile'

export default {
  name: 'Home',
  head: {
    title: 'Home',
  },
  components: {
    Layout,
    CustomParagraph,
    ExperienceCard,
    VueAgile,
  },
  data() {
    return {
      quotes: quotes,
      personalParagraph: personalParagraph,
      personalExperiences: personalExperiences,
    }
  },
}
</script>
<style lang="scss">
@import '../style/main.scss';
.motivation {
  background: url('../static/images/rheinquellebw.jpg');
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  position: relative;
  box-shadow: 0 15px 1.5em black;
  .slide {
    position: relative;
    width: 100vw;
    height: 100vh;
    .text {
      position: absolute;
      top: 25%;
      left: 10%;
      max-width: 75%;
    }
    @media (max-width: $breakpoint-tablet) {
      .text {
        top: 15%;
        h1 {
          font-size: 1.5rem;
        }
      }
    }
  }
  .agile__dots {
    position: absolute;
    bottom: 5%;
    .agile__dot {
      button {
        background-color: var(--text-color);
        border: none;
        border-radius: 50%;
        display: block;
        cursor: pointer;
        width: 15px;
        height: 15px;
        font-size: 0;
        line-height: 0;
        margin: 0 10px;
        padding: 0;
        transition-duration: 0.5s;
      }
      &--current,
      &:hover {
        button {
          background-color: var(--primary-color);
        }
      }
    }
  }
}
.agile__slides--cloned {
  opacity: 0;
}

.paragraph {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>
