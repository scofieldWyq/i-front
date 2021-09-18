import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from './elemntui'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  elementUI,
  store,
  render: h => h(App)
}).$mount('#app')
