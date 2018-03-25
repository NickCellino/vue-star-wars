<template>
  <div class="episode">
    <h3>Star Wars Episode {{ film.episode_id }}: {{film.title}}</h3>
    <button class="btn btn-primary crawlButton" @click="toggleCrawl">{{ toggleCrawlButtonText }}</button>
    <star-wars-crawl ref="crawl" v-show="showingCrawl" v-bind:crawl="crawlWithTitle" v-bind:height="300"></star-wars-crawl>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import StarWarsCrawl from '@/components/StarWarsCrawl'
import romanize from '@/utils/romanize'

export default {
  name: 'star-wars-film',
  components: {
    StarWarsCrawl
  },
  data () {
    return {
      showingCrawl: false
    }
  },
  computed: {
    crawlStyle: function () {
      var position = -this.crawlPosition
      return {
        transform: `translateY(${position}px)`
      }
    },
    crawlWithTitle: function () {
      return `Episode ${romanize.toRomanNumeral(this.film.episode_id)}\n${this.film.title}\n\n${this.film.opening_crawl}`
    },
    toggleCrawlButtonText: function () {
      return this.showingCrawl ? 'Close crawl' : 'Open crawl'
    }
  },
  props: {
    film: VueTypes.object
  },
  methods: {
    toggleCrawl () {
      this.showingCrawl = !this.showingCrawl
      if (this.showingCrawl) {
        this.$refs.crawl.init()
        this.$refs.crawl.start()
      } else {
        this.$refs.crawl.stop()
      }
    }
  }
}
</script>

<style scoped>
.crawlButton {
  margin-bottom: 10px;
}
.episode {
  border: grey 1px;
  border-style: solid;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 10px;
  margin-bottom: 10px;
}
</style>
