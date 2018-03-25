<template>
  <div>
    <div class="form-group row">
      <label for="scrollSpeed" class="col-sm-2 col-form-label">Scroll speed</label>
      <div class="col-sm-4">
        <input id="scrollSpeed" class="form-control" type="number" v-model.number="scrollSpeed">
      </div>
    </div>
    <div class="crawlContainer" v-bind:style="{ height: height }">
      <p v-bind:style="crawlStyle">{{crawl}}</p>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

// This is a normal scrolling speed
const DEFAULT_SPEED = 0.25

export default {
  name: 'star-wars-crawl',
  data () {
    return {
      scrolling: false,
      crawlPosition: 0,
      crawlPositionUpdateInterval: 0,
      scrollSpeed: DEFAULT_SPEED
    }
  },
  props: {
    crawl: VueTypes.string,
    height: VueTypes.integer
  },
  computed: {
    crawlStyle: function () {
      var position = -this.crawlPosition
      return {
        transform: `translateY(${position}px)`,
        height: `${this.height}px`
      }
    }
  },
  methods: {
    init () {
      this.crawlPosition = -this.height
    },
    start () {
      if (!this.scrolling) {
        this.crawlPositionUpdateInterval = setInterval(this.incrementCrawlPosition, 10)
      }
      this.scrolling = true
    },
    stop () {
      if (this.crawlPositionUpdateInterval) {
        clearInterval(this.crawlPositionUpdateInterval)
      }
      this.scrolling = false
    },
    incrementCrawlPosition () {
      if (typeof this.scrollSpeed === 'number') {
        this.crawlPosition = this.crawlPosition + this.scrollSpeed
      }
    }
  },
  watch: {
    scrollSpeed: function (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
.crawlContainer {
  overflow: hidden;
  color: #feda4a;
  font-family: sans-serif;
  font-size: 3em;
  white-space: pre-wrap;
}
</style>
