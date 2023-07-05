import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TODO: remover a variável abaixo antes de commitar
// eslint-disable-next-line no-undef
require('axios').defaults.headers.common['Authorization'] =
  ''

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
