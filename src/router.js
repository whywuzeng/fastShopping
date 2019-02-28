
import Router from'vue-router'
import ViewHome from './asserts/views/home.vue'
import ViewClass from './asserts/views/class.vue'

Vue.use(Router)

export default new Router({
  routes :[
    {path: '/', redirect: '/home'},
    { path: '/home', component: ViewHome },
    { path: '/class', component: ViewClass }
  ]
})
