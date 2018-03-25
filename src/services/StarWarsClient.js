import axios from 'axios'
import url from '@/utils/url'

class StarWarsClient {
  constructor () {
    this.baseUrl = 'https://swapi.co/api'
  }

  get (path) {
    return axios.get(url.join(this.baseUrl, path))
  }

  getFilms () {
    return this.get('films').then(function (response) {
      return response.data.results
    })
  }
}

export default StarWarsClient
