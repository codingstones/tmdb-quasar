<template>
  <q-toolbar>
    <q-btn flat @click="clickDrawer()" big>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      The Movie Database
    </q-toolbar-title>
    <q-btn color='secondary' @click="openSearch()">
      <q-icon name="search"/>
      SEARCH
    </q-btn>
  </q-toolbar>
</template>

<script>
  export default {
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
