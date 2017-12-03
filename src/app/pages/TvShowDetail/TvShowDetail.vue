<template>
  <ItemDetail :item="tvShowDetail"></ItemDetail>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    async created() {
      await this.retrieve_tv_show(this.paramId)
    },
    computed: {
      ...mapState(['tvShowDetail']),
      ...mapGetters(['paramId'])
    },
    methods: {
      ...mapActions(['retrieve_tv_show'])
    }
  }
</script>
