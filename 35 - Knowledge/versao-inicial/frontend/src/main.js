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
  'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Impuc2lsdmEiLCJlbWFpbCI6Impuc2lsdmEiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY4ODQxNDI1MiwiZXhwIjoxNjg4NjczNDUyfQ.morSyBKlgEpTwg9Er4y19tXWo1crG8R_Qx2VWpYjAw8'

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app')
