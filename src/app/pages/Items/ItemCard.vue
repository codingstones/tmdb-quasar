<template functional>
  <q-card v-on:click.once="props.onClick(props.item.id)" inline class="menu-card">
    <q-card-media overlay-position="top">
      <img v-if="props.item.poster_path.includes('null')" src="~assets/not-found.png"/>
      <progressive-img v-else :src="props.item.poster_path"/>
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

<style lang="stylus" scoped>
  @import '~variables'

  .menu-card:hover {
    background: alpha(orange, 30%);
    opacity: 0.5;
    cursor: pointer;
  }
  .q-card-main {
    font-size: 1rem;
  }

  .q-card-title
    color black
    font-weight bold
    font-size 150%

  .q-card
    display inline
    width 9rem
</style>
