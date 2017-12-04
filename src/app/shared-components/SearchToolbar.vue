<template>
  <q-toolbar>
    <q-btn flat v-go-back=" '/' ">
      <q-icon name="keyboard_backspace"/>
    </q-btn>
    <q-search :debounce="600"
              placeholder=""
              @change="search($event)"
              value=""
              autofocus
    />
  </q-toolbar>
</template>

<script>
  import { GoBack } from 'quasar-framework'
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(['search_films']),
      search(input) {
        this.search_films(input)
      }
    },
    directives: {
      GoBack
    }
  }
</script>

<style scoped>
  img { max-width: 60px; }
</style>
