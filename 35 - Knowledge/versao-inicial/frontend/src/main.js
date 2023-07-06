import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

<<<<<<< HEAD
=======
//TODO: remover a variável abaixo antes de commitar
// eslint-disable-next-line no-undef
require('axios').defaults.headers.common['Authorization'] =
  ''

>>>>>>> aa85d212e2cb44f31203b58781da5b1dfcb8dfd3
new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
