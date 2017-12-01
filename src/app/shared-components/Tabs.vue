<template>
  <q-tabs align="justify" v-show="isVisible()">
    <q-route-tab
      default
      to="/popular_films"
      exact
      slot="title"
    >
      Popular Films
    </q-route-tab>
    <q-route-tab
      to="/popular_tv_shows"
      exact
      slot="title"
    >
      Popular Tv Shows
    </q-route-tab>
  </q-tabs>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { SEARCH_PATH } from '../../router'
  export default {
    computed: {
      ...mapGetters(['currentRoute'])
    },
    methods: {
      isVisible() {
        return this.currentRoute !== SEARCH_PATH
      }
    }
  }
</script>

