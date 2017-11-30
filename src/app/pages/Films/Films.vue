<template>
  <q-infinite-scroll v-if="films.length > 0" :handler="loadMore" class="row justify-center">
    <q-card-title>Films</q-card-title>
    <FilmCard v-for="film in films" :key="film.id" :film ="film" :onClick="goTo"/>
    <div slot="message" class="row justify-center" style="margin-bottom: 50px;">
      <q-spinner-mat :size="40" />
    </div>
    <BackToTopButton/>
  </q-infinite-scroll>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  let pageNumber = 1
  export default {
    methods: {
      ...mapActions(['retrieve_popular_films']),
      async loadMore(index, done) {
        pageNumber++
        console.log('Cargando load Next page', pageNumber)
        await this.retrieve_popular_films({ pageNumber })
        done()
      },
      goTo(film) {
        this.jotaRouter.navigateToFilm(film.id)
      }
    },
    computed: {
      ...mapState(['isLoading', 'films'])
    }
  }
</script>

<style scoped lang="stylus">
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
