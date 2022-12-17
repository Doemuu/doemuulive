<template>
  <div class="bg-dark fixed-bottom">
    <b-row class="align-items-center p-1">
      <b-col cols="2" col class="pl-4">
        <a href="mailto:doemu@outlook.com">Contact</a>
      </b-col>
      <b-col cols="10" col class="text-right pr-4">
        <div>
          <p class="m-0">
            <b-icon icon="linkedin" class="linkedin"></b-icon>
            <a target="_blank" href="https://www.linkedin.com/in/dominik-berger-jenyus/">
              LinkedIn
            </a>
          </p>
          <p class="m-0">© copyright 2022 - Dominik Berger</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.linkedin{
  color: #0072b1;
}
</style>
