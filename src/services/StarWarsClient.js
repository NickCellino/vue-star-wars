import axios from 'axios'
import url from '@/utils/url'

class StarWarsClient {
  constructor () {
    this.baseUrl = 'https://swapi.co/api'
  }

  get (path) {
    return axios.get(url.join(this.baseUrl, path))
  }

  extractResults (response) {
    return response.data.results
  }

  getFilms () {
    return this.get('films').then(this.extractResults)
  }

  getPeople () {
    return this.get('people').then(this.extractResults)
  }
}

export default StarWarsClient
