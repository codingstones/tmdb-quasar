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
  import { Loading } from 'quasar-framework'
  export default {
    props: ['retrievePage', 'items', 'goTo', 'pageNumber'],
    async created() {
      if (this.pageNumber > 0) return
      Loading.show({message: 'Loading...'})
      await this.retrievePage({ pageNumber: 1 })
      Loading.hide()
    },
    methods: {
      async loadMore(index, done) {
        await this.retrievePage({ pageNumber: this.pageNumber + 1 })
        done()
      }
    }
  }
</script>

<style lang="stylus">
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
