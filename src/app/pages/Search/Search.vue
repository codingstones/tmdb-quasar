<template>
  <div>
    ON SEARCH ROUTE {{currentRoute}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['currentRoute'])
    }
  }
</script>
