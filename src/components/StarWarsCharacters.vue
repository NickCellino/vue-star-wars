<template>
<div class="container mt-3" id="sw-characters">
  <h1>People of Star Wars</h1>
  <transition-group>
    <li v-for="p in people" v-bind:key="p.url">
      {{ p.name }}
    </li>
  </transition-group>
  <button type="button" class="btn btn-primary mt-2" @click="shuffle">Shuffle</button>
</div>
</template>

<script>
import _ from 'lodash'

import StarWarsClient from '@/services/StarWarsClient'

const starWarsClient = new StarWarsClient()

export default {
  name: 'sw-characters',
  data () {
    return {
      people: []
    }
  },
  methods: {
    shuffle: function () {
      this.people = _.shuffle(this.people)
    }
  },
  created: function () {
    starWarsClient.getPeople()
      .then((people) => {
        this.people = people
      })
  }
}
</script>

<style scoped>
#sw-characters {
  background: rgb(80, 73, 73);
  opacity: 0.75;
  border-radius: 8px;
  padding: 10px;
}
.v-move {
  transition: transform 1s;
}
</style>
