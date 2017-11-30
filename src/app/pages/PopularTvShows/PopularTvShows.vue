<template>
  <Films :retrievePages="retrieve_popular_tv_shows" :films="tvShows"/>
</template>

<script>
  import { Loading } from 'quasar-framework'
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['tvShows'])
    },
    methods: {
      ...mapActions(['retrieve_popular_tv_shows'])
    },
    async created() {
      Loading.show({message: 'Loading films...'})
      await this.retrieve_popular_tv_shows({ pageNumber: 1 })
      Loading.hide()
    }
  }
</script>
