import Vue from 'vue'
import Router from 'vue-router'
import { loadLanguageAsync } from './providers/i18n'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const lang = typeof to.params.lang !== 'undefined' ? to.params.lang : 'en'

  loadLanguageAsync(lang).then(() => next())
})

export default router
