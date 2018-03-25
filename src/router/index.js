import Vue from 'vue'
import Router from 'vue-router'
import StarWars from '@/components/StarWars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'star-wars',
      component: StarWars
    }
  ]
})
