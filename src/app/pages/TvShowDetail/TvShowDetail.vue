<template>
  <div>
    <LoadSpinner :isLoading="!tvShowDetail.title"></LoadSpinner>
    <!--DETAIL: {{tvShowDetail}}-->

    <q-card inline>
      <q-card-media overlay-position="top">
        <img :src="posterPath(tvShowDetail.poster_path)">
        <q-card-title slot="overlay">
          {{ tvShowDetail.title }}
          <span slot="subtitle">({{tvShowDetail.release_date}})</span>
        </q-card-title>
      </q-card-media>

      <q-card-main>
        TEXTO
        <q-item-tile sublabel>{{tvShowDetail.vote_average}}</q-item-tile>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import { posterPath } from '../../services/repositories/tmdb-repository'

  export default {
    async created() {
      await this.retrieve_tv_show(this.paramId)
    },
    computed: {
      ...mapState(['tvShowDetail', 'isLoading']),
      ...mapGetters(['paramId'])
    },
    methods: {
      ...mapActions(['retrieve_tv_show']),
      posterPath(relativePath) {
        return posterPath(relativePath)
      },
      share() {
        console.log('Sharing gig')
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~variables'

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .block {
    margin: 0.5rem;
    font-size: 1.1rem;
  }

  FormButton {
    margin: 0.5rem;
  }
</style>
