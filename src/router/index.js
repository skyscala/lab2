import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FreeFormat from '../views/FreeFormat'
import PredefinedFormat from '../views/PredefinedFormat'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/freeform',
    name: 'FreeFormat',
    component: FreeFormat
  },
  {
    path: '/predef',
    name: 'PredefinedFormat',
    component: PredefinedFormat
  }
]

const router = new VueRouter({
  routes
})

export default router
