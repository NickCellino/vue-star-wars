import Vue from 'vue'
import Router from 'vue-router'
import StarWars from '@/components/StarWars'
import StarWarsCharacters from '@/components/StarWarsCharacters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'star-wars',
      component: StarWars
    },
    {
      path: '/characters',
      name: 'sw-characters',
      component: StarWarsCharacters
    }
  ]
})
