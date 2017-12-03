<template>
  <q-infinite-scroll v-show="items.length > 0" :handler="loadMore" class="row justify-center">
    <ItemCard v-for="item in items" :key="item.id" :item ="item" :onClick="goTo"/>
    <div slot="message" class="row justify-center" style="margin-bottom: 50px;">
      <q-spinner-mat :size="40" />
    </div>
    <BackToTopButton/>
  </q-infinite-scroll>
</template>
<script>
  let pageNumber = 1
  export default {
    props: ['retrievePages', 'items', 'goTo'],
    methods: {
      async loadMore(index, done) {
        pageNumber++
        await this.retrievePages({ pageNumber })
        done()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .q-card-title {
    color: black
    font-weight: bold
    font-size: 150%
  }

  .q-card
    display inline
    width 300px
</style>
