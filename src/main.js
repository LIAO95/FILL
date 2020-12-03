// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'



import Axios from 'axios'
import qs from 'qs'
//跨域post实例；用到qs组件来避开ajax信使请求；并兼容安卓；
Vue.prototype.$qs = qs;
// 给对象一个原型挂载属性（很重要）
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api';


import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
