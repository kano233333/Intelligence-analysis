import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index/router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
    },
    ...index
  ],
})