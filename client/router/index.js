import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/:page(\\d+)?', component: HomeView },
    { path: '/item/:id', component: ItemView },
    { path: '/login', component: LoginView },
    { path: '*', component: NotFoundView }
  ]
})
