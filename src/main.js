// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFireBase from './firebase'
import App from './App'
import router from './config/router'
import bulma from 'bulma/css/bulma.css'

Vue.config.productionTip = false

/**
 * Plugins
 */
Vue.use(VueFireBase)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
