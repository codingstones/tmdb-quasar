<template>
  <q-scroll-area slot="left" style="width: 100%; height: 100%" inset-separator>
    <q-list-header>
      Studio Ghibli
    </q-list-header>
    <q-side-link item to="/all">
      <q-item-side icon="list" />
      <q-item-main label="All Films"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <q-item-separator></q-item-separator>
    <q-list-header>
      Admin
    </q-list-header>
    <q-side-link item to="/newFilm">
      <q-item-side icon="note_add" />
      <q-item-main label="Create new Film"/>
      <q-item-side icon="keyboard_arrow_right" />
    </q-side-link>
    <br>
    <q-list-header>
      <img src="~assets/tmdb.png" class="totoro"/>
      <img src="~assets/stones.svg"/>
    </q-list-header>
  </q-scroll-area>
</template>

<script>
  export default {
    name: 'SideBar',
    methods: {
      clickDrawer() {
        this.parent.$refs.layout.toggleLeft()
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 60px;
    margin-top: 10px;
  }
  q-scroll-area {
    background-color: #f4f4f4;
  }
  .totoro {
    position: relative;
    top: 10px;
  }
</style>
