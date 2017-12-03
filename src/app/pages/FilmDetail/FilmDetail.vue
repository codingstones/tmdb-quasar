<template>
  <div>
    <LoadSpinner :isLoading="isLoading"></LoadSpinner>
    <ItemDetail v-if="!isLoading" :item="filmDetail"></ItemDetail>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  export default {
    async created() {
      await this.retrieve_film(this.paramId)
    },
    computed: {
      ...mapState(['filmDetail', 'isLoading']),
      ...mapGetters(['paramId'])
    },
    methods: {
      ...mapActions(['retrieve_film'])
    }
  }
</script>
