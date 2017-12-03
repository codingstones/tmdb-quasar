<template>
  <q-toolbar>
    <q-btn flat @click="clickDrawer()" big v-if="!searching">
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title v-if="!searching">
      The Movie Database
    </q-toolbar-title>
    <q-btn flat color='secondary' @click="openSearch()" v-if="!searching">
      <q-icon name="search"/>
      SEARCH
    </q-btn>
    <q-btn flat v-go-back=" '/' " v-if="searching">
      <q-icon name="keyboard_backspace"/>
    </q-btn>
    <q-search v-if="searching"
              :debounce="600"
              placeholder=""
              v-model="searchTerms"
    />
  </q-toolbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        searchTerms: ''
      }
    },
    methods: {
      ...mapMutations(['toogleSearch']),
      clickDrawer() {
        this.$emit('drawerClick')
      },
      openSearch() {
        this.$store.commit('toogleSearch')
        this.tmdbRouter.navigateToSearch()
      }
    },
    computed: {
      ...mapState(['searching'])
    }
  }
</script>

<style scoped>
  img { max-width: 60px; }
</style>
