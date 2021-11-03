import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../../src/Layout/Layout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    children:[
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
      },
      {
        path: '/confer',
        name: 'confer',
        component: () => import("../views/confer/confer.vue"),
        meta: { title: "confer" }
      },
      {
        path: '/speak',
        name: 'speak',
        component: () => import("../views/speak/speak.vue"),
        meta: { title: "speaker" }
      },
      {
        path: '/historing',
        name: 'historing',
        component: () => import("../views/historing/historing.vue"),
        meta: { title: "history" }
      }
    ]
  },

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
