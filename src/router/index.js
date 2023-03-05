import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Mall',
    name: 'MallHome',
    component: () => import('../views/mallHome.vue')
    // redirect: { name: 'mallHome' },
    // children: [{
    //   path: '/test',
    //   name: 'mallHome',
    //   component: () => import('../components/mallHome.vue')
    // }]
  },
  {
    path: '/Mall/productDetail/:id',
    name: 'productDetail',
    component: () => import('../views/productDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
