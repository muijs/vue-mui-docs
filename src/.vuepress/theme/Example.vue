<template>
  <div class="phone-wrap">
    <div class="phone">
      <iframe ref="frame" :src="exampleURL"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseURL: 'https://muijs.github.io/vue-mui/#/',
      exampleURL: null
    }
  },
  mounted() {
    this.exampleURL = this.baseURL + this.getRouteMetched()
  },
  methods: {
    getRouteMetched(path = this.$route.path) {
      const metched = /\/components\/(.*)\.html/g.exec(path)
      return metched ? metched[1] : ''
    }
  },
  watch: {
    $route(val) {
      this.exampleURL = this.baseURL + this.getRouteMetched(val.path)
    }
  }
}
</script>

<style lang="stylus">
  .phone-wrap
    position fixed
    top 3.6rem
    right 0
    bottom 0
    width 23rem
    box-sizing border-box
    padding 20px
    .phone
      position relative
      background-image url('./phone.png')
      background-repeat no-repeat
      background-size 100%
      padding 100px 16px
      iframe
        width 100%
        height 580px
        border 0
        background-color #fff
</style>