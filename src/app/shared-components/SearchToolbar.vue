<template>
  <q-toolbar>
    <q-btn flat v-go-back=" '/' ">
      <q-icon name="keyboard_backspace"/>
    </q-btn>
    <q-search :debounce="600"
              placeholder=""
              v-model="searchTerms"
              autofocus
    />
  </q-toolbar>
</template>

<script>
  import { GoBack } from 'quasar-framework'

  export default {
    data() {
      return {
        searchTerms: ''
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
