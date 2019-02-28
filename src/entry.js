import Vue from 'vue'
import weex from 'weex-vue-render'
import minxins from './mixins'
// register global mixins.
weex.mixin(minxins);

weex.init(Vue)
