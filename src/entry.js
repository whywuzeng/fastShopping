import Vue from 'vue'
import weex from 'weex-vue-render'
import minxins1 from '@/mixins/index1.js'
// register global mixins.

Vue.mixin(minxins1)

weex.init(Vue)
