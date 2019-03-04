import Vue from 'vue'
import Router from 'vue-router'
import ViewHome from '@/new.vue'
import ViewClass from './asserts/views/class.vue'
import ViewTopic from '@/asserts/views/Topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: ViewHome},
    {path: '/class', component: ViewClass},
    {path: '/topic', component: ViewTopic}
  ]
})
