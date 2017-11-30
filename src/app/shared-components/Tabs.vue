<template functional>
  <q-tabs align="justify">
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

