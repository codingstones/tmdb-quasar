<template>
  <Items :retrievePage="retrieve_popular_tv_shows"
         :items="tvShows"
         :goTo="tmdbRouter.navigateToTvShow"
         :pageNumber="tvShowPageNumber"/>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['tvShows', 'tvShowPageNumber'])
    },
    methods: {
      ...mapActions(['retrieve_popular_tv_shows'])
    }
  }
</script>
