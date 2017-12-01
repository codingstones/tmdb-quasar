<template>
  <div class="row justify-center">
    <LoadSpinner :isLoading="isLoading"></LoadSpinner>
    <q-card inline>
      <q-card-media overlay-position="top">
        <progressive-img :src="posterPath(filmDetail.backdrop_path)"/>
      </q-card-media>
      <q-card-title>
        <h5>{{ filmDetail.title }}</h5>
        <q-btn slot="right" flat round color="secondary" size="2rem">
          <q-icon name="thumb_up" />
        </q-btn>
        <q-btn slot="right" flat round color="secondary" size="2rem" @click="openImdb()">
          IMDB
        </q-btn>
        <h6 slot="subtitle">{{filmDetail.tagline}}</h6>
      </q-card-title>
      <q-card-main>
        <p>
          <q-icon name="ion-star" color="warning"/>
          {{filmDetail.vote_average}}
        </p>
        <q-item-tile><span>{{filmDetail.overview}}</span></q-item-tile>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex'
  import { posterPath } from '../../services/repositories/tmdb-repository'
  import { openURL } from 'quasar-framework'

  export default {
    async created() {
      await this.retrieve_film(this.paramId)
    },
    computed: {
      ...mapState(['filmDetail', 'isLoading']),
      ...mapGetters(['paramId'])
    },
    methods: {
      ...mapActions(['retrieve_film']),
      posterPath(relativePath) {
        // ~assets/stones.svg
        return posterPath(relativePath)
      },
      openImdb() {
        openURL('http://www.imdb.com/title/' + this.filmDetail.imdb_id)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~variables'

  img {
    max-width: 30%;
    max-height: 30%;
  }

  .block {
    margin: 0.5rem;
    font-size: 1.1rem;
  }

  .q-card {
    max-width: 80%;
    min-width : 320px
  }

  .q-card-main {
    font-size: 1.2rem;
  }
  FormButton {
    margin: 0.5rem;
  }
</style>
