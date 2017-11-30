<template>
  <Films :retrievePages="retrieve_popular_films" :films="films"/>
</template>

<script>
  import { Loading } from 'quasar-framework'
  import { mapActions, mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['films'])
    },
    methods: {
      ...mapActions(['retrieve_popular_films'])
    },
    async created() {
      Loading.show({message: 'Loading films...'})
      await this.retrieve_popular_films({ pageNumber: 1 })
      Loading.hide()
    }
  }
</script>
