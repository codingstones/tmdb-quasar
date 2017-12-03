<template>
  <Items :retrievePages="retrieve_popular_films" :items="films" :goTo="tmdbRouter.navigateToFilm"/>
</template>

<script>
  import { Loading } from 'quasar-framework'
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['films'])
    },
    methods: {
      ...mapActions(['retrieve_popular_films']),
      goTo(film) {
        this.tmdbRouter.navigateToFilm(film.id)
      }
    },
    async created() {
      Loading.show({message: 'Loading films...'})
      await this.retrieve_popular_films({ pageNumber: 1 })
      Loading.hide()
    }
  }
</script>
