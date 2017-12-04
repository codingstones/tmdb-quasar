<template>
  <div>
  <Items :retrievePage="retrieve_popular_films"
         :items="films"
         :goTo="tmdbRouter.navigateToFilm"
         :pageNumber="filmPageNumber" />
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['films', 'filmPageNumber'])
    },
    methods: {
      ...mapActions(['retrieve_popular_films']),
      goTo(film) {
        this.tmdbRouter.navigateToFilm(film.id)
      }
    }
  }
</script>
