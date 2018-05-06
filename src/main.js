import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

import config_ from './config/config'
Vue.prototype.GLOBAL = config_.config

import axios from 'axios';
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

var vue=new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})

router.afterEach((to,from,next) => {
	  window.scrollTo(0,0);
});
vue.$on('error', (err)=>{
  var params={};
  if(!!err&&!!err.response&&!!err.response.data&&!!err.response.data.encSecKey){
    var key=rsa.decryptPrivate(err.response.data.encSecKey);
    console.log(key);

    params=aes.decryptAES(key,err.response.data.params);
    console.log(params);
  }

  if(!!err&&!!err.message){
    params.msg=err.message;
    vue.$message.error({
        title: '错误',
        message: params.msg
    });
    var t;
    clearTimeout(t)
    t = setTimeout(function (){
        vue.$message.closeAll();
        vue.$router.push('/')
    }, 1000);

  }


} )

Vue.prototype.$eventHub= Vue.prototype.$eventHub ||vue
