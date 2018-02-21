import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import 'mdi/css/materialdesignicons.min.css'

const base = process.env.NODE_ENV === 'production' ? 'http://192.168.1.64:3000' : '/api'
Axios.defaults.baseURL = base

Vue.use(VueAxios, Axios)
Vue.use(Vuetify, {
  theme: {
    primary: '#000',
    secondary: '#333',
    accent: '#8c9eff',
    error: '#b71c1c',
  },
})

if (process.env.NODE_ENV === 'production') {
  document.addEventListener('deviceready', function () {
    Vue.prototype.$cordova = cordova
  }, false)

  var tag = document.createElement('script')
  tag.type = 'text/javascript'
  document.body.appendChild(tag)
  tag.src = 'cordova.js'
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  el: '#app',
  template: '<app/>',
  router,
  store,
})
