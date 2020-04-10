import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showHeader: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      showHeader: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
      showHeader: false,
      showActive: [
        {
          name: '忘记密码？',
          url: '/#/forget'
        },
        {
          name: '注册账号',
          url: '/#/register'
        }
      ]
    }
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
    meta: {
      showHeader: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
