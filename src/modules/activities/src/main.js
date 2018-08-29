// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Allows us to import axios and use the same base config everywhere
// see https://github.com/stockHuman/Jars/blob/master/desktop/src/renderer/main.js
// eslint-disable-next-line
Vue.http = Vue.prototype.$http = axios;
// eslint-disable-next-line
axios.defaults.baseURL = window.abraActivities.bURL

/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  components: { App },
  template: '<App/>',
})
