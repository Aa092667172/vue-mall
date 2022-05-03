import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MallHome',
    component: () => import('../views/MallHome.vue')
    // redirect: { name: 'mallHome' },
    // children: [{
    //   path: '/test',
    //   name: 'mallHome',
    //   component: () => import('../components/mallHome.vue')
    // }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
