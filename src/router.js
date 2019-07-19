import Vue from 'vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp.vue'
import Chuck from './components/Chuck.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: TriviaApp, name: 'default' },
    { path: '/chuck', component: Chuck, name: 'chuck' },
  ]
})