<template>
  <q-btn
    v-back-to-top.animate="{offset: 500, duration: 200}"
    round
    color="secondary"
    class="fixed-bottom-right"
    style="margin: 0 15px 15px 0"
  >
    <q-icon name="keyboard_arrow_up" />
  </q-btn>
</template>

<script>
  import { BackToTop } from 'quasar-framework'

  export default {
    directives: {
      BackToTop
    }
  }
</script>

<style>
</style>
