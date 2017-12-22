<template>
  <q-toolbar>
    <q-btn flat @click="clickDrawer()" big>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      The Movie Database
    </q-toolbar-title>
    <q-btn flat>
      <q-icon name="search" @click="openSearch()" />
    </q-btn>
  </q-toolbar>
</template>

<script>
  export default {
    data() {
      return {
        searchTerms: ''
      }
    },
    methods: {
      clickDrawer() {
        this.$emit('drawerClick')
      },
      openSearch() {
        this.tmdbRouter.navigateToSearch()
      }
    }
  }
</script>

<style scoped>
  img { max-width: 60px; }
</style>
