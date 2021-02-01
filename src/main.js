// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// 样式表
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'

// api接口
import api from './api'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
