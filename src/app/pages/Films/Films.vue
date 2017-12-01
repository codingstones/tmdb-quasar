<template>
  <q-infinite-scroll v-show="films.length > 0" :handler="loadMore" class="row justify-center">
    <FilmCard v-for="film in films" :key="film.id" :film ="film" :onClick="goTo"/>
    <div slot="message" class="row justify-center" style="margin-bottom: 50px;">
      <q-spinner-mat :size="40" />
    </div>
    <BackToTopButton/>
  </q-infinite-scroll>
</template>
<script>
  let pageNumber = 1
  export default {
    props: ['retrievePages', 'films'],
    methods: {
      async loadMore(index, done) {
        pageNumber++
        await this.retrievePages({ pageNumber })
        done()
      },
      goTo(film) {
        this.jotaRouter.navigateToFilm(film.id)
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
