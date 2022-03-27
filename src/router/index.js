import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import daybookRouter from "../modules/daybook/router";
const routes = [
  {
    path: '/',
    name: 'Home',
    //component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    ...daybookRouter  //operador spread = ... // el cuál distribuye los elementos de un arreglo u objeto, para asignarlos as alguna variable/constante/funcións
    //component: () => import(/* webpackChunkName: "daybook" */ '../modules/daybook/layouts/DayBookLayout.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
