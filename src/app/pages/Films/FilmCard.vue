<template functional>
  <q-card @click="props.onClick(props.film)" inline>
    <q-card-media overlay-position="top">
      <img v-if="props.film.backdrop_path.includes('null')" src="~assets/not-found.png"/>
      <progressive-img v-else :src="props.film.backdrop_path"/>
      <q-card-title slot="overlay">
        {{ props.film.title }}
        <span slot="props.subtitle">({{props.film.release_date}})</span>
      </q-card-title>
    </q-card-media>

    <q-card-main>
      {{ props.film.title }}
      <!--{{ props.film }}-->
      <q-item-tile sublabel>{{props.film.vote_average}}</q-item-tile>
    </q-card-main>
    <q-collapsible label="Description">
      <div>
        {{ props.film.description }}
      </div>
    </q-collapsible>
  </q-card>
</template>

<style lang="stylus" type="text/stylus">
  .q-card:hover {
    background: alpha(#795548, 30%);
    cursor: pointer;
  }
</style>
