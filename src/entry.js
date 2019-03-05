import Vue from 'vue'
import weex from 'weex-vue-render'
import minxins1 from '@/mixins/index1.js'
// import Router from '@/router.js'
var Router = require('@/router.js')

import App from '@/index'
// register global mixins.
Vue.mixin(minxins1)

weex.init(Vue)

new Vue(Vue.util.extend({
  el:'#root',
  //将vue集成到vue中
  router:Router
},App))

Router.push('/');
