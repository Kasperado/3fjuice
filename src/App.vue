<template>
  <div id="app">
    <navbar
      :navElements="['Home','About','Testimonials','Plan','Contact']"
      :navWidth='1200'
      title="3F Juice"
    ></navbar>
    <intro></intro>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import intro from './components/intro.vue'

export default {
  name: 'app',
  components: {
    navbar,
    intro
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Vollkorn');

* {
  box-sizing: border-box;
}

html, body {
  font-family: 'Vollkorn', serif;
  margin: 0;
  padding: 0;
  background-color: #232425;
}

::selection {
  color: black;
  background: orange;
}

</style>
