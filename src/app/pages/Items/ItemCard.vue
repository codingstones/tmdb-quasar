<template functional>
  <q-card v-on:click.once="props.onClick(props.item.id)" inline class="menu-card">
    <q-card-media overlay-position="top">
      <img v-if="props.item.backdrop_path.includes('null')" src="~assets/not-found.png"/>
      <progressive-img v-else :src="props.item.backdrop_path"/>
    </q-card-media>
    <q-card-main class="ellipsis">
      {{ props.item.title }}
      {{ props.item.name }}
      <!--{{ props.item }}-->
      <q-item-tile sublabel>
        <q-icon name="ion-star" color="warning"/>
        {{props.item.vote_average}}
      </q-item-tile>
    </q-card-main>
  </q-card>
</template>

<style lang="stylus" type="text/stylus" scoped>
  .menu-card:hover {
    background: alpha(orange, 30%);
    opacity: 0.5;
    cursor: pointer;
  }
  .q-card-main {
    font-size: 1.2rem;
  }
</style>
