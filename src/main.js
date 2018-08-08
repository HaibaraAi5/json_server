// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import babelPolyfill from "babel-polyfill"

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(elementUi)
Vue.use(babelPolyfill)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
