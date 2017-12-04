<template>
  <Items :retrievePage="()=> ({})"
         :items="searchResults"
         :goTo="tmdbRouter.navigateToFilm"
         :pageNumber="1" />
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['searchResults'])
    }
  }
</script>
