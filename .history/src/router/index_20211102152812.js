import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },

  {
    path: '/About',
    name: 'About',
    component: () => import("../views/About"),
    meta: { title: "关于" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, form,next, ) => {
    document.title = to.meta.title
  next()
})
export default router
