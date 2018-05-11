<template>
  <div class="main-container" :class="{ 'has-phone': shouldShowPhone }">
    <Layout></Layout>
    <Example v-if="shouldShowPhone"></Example>
  </div>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
import Example from './Example.vue'

export default {
  components: {
    Layout,
    Example
  },
  computed: {
    shouldShowPhone() {
      return this.$route.path.indexOf('/components/') !== -1
    }
  }
}
</script>

<style lang="stylus">
  .sidebar
    width: 15rem
  .page
    padding-left 15rem
    .content:not(.custom)
      max-width none
      padding 2rem
  .main-container.has-phone
    .page
      padding-right 23rem
      .content:not(.custom)
        padding 2rem 0 2rem 2rem
</style>
