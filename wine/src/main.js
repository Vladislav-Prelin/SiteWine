import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'
import './assets/styles/veriables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
