<template>
  <div id="app">
    <navbar
      :navElements="['Home','Plan','Contact']"
      :navWidth='1200'
      title="3F Juice"
    ></navbar>
    <intro></intro>
    <plan></plan>
    <contact></contact>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import intro from './components/intro.vue'
import plan from './components/plan.vue'
import contact from './components/contact.vue'

export default {
  name: 'app',
  components: {
    navbar,
    intro,
    plan,
    contact
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

body::-webkit-scrollbar {
    width: 4px;
}

body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px black;
}

body::-webkit-scrollbar-thumb {
  background-color: orange;
}

#app {
  overflow: hidden;
  color: white;
  text-align: center;
}

// Styles for all components
i {
  color: #FFA500;
}

h1 {
  font-size: 32px;
  margin: 10px;
}


</style>
