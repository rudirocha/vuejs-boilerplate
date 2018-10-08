import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './providers/i18n'
import './assets/scss/main.scss'
import vueBulmaComponents from 'vue-bulma-components'

Vue.use(vueBulmaComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
