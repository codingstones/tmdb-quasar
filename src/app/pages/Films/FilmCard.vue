<template functional>
  <q-card @click="props.onClick(props.film)" inline class="menu-card">
    <q-card-media overlay-position="top">
      <img v-if="props.film.backdrop_path.includes('null')" src="~assets/not-found.png"/>
      <progressive-img v-else :src="props.film.backdrop_path"/>
    </q-card-media>

    <q-card-main>
      {{ props.film.title }}
      {{ props.film.name }}
      <!--{{ props.film }}-->
      <q-item-tile sublabel>
        <q-icon name="ion-star" color="warning"/>
        {{props.film.vote_average}}
      </q-item-tile>
    </q-card-main>
    <!--<q-collapsible label="Description">-->
      <!--<div>-->
        <!--{{ props.film.overview }}-->
      <!--</div>-->
    <!--</q-collapsible>-->
  </q-card>
</template>

<style lang="stylus" type="text/stylus">
  .menu-card:hover {
    background: alpha(orange, 30%);
    opacity: 0.5;
    cursor: pointer;
  }
  .q-card-main {
    font-size: 1.2rem;
  }
</style>
