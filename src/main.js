import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App),
}).$mount('#app')
