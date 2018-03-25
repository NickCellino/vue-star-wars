<template>
  <div id="star-wars-app" class="container">
    <h1>Star Wars App</h1>
    <star-wars-film v-for="film in films" v-bind:film="film" v-bind:key="film.episode_id"></star-wars-film>
  </div>
</template>

<script>
import StarWarsClient from '@/services/StarWarsClient'
import StarWarsFilm from '@/components/StarWarsFilm'

const starWarsClient = new StarWarsClient()

export default {
  name: 'star-wars',
  components: {
    StarWarsFilm
  },
  data () {
    return {
      films: []
    }
  },
  created: function () {
    starWarsClient.getFilms()
      .then((films) => {
        this.films = films.sort(function (film1, film2) {
          return film1.episode_id - film2.episode_id
        })
      })
  }
}
</script>

<style>
#star-wars-app {
  color: #feda4a;
}
</style>
