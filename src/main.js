import JQuery from 'jquery'
window.$ = JQuery

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mobile from './mobile'
import store from './store'

Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(app)
