<template>
  <div class="row justify-center">
    <q-card inline flat>
      <q-card-media overlay-position="top">
        <progressive-img :src="posterPath(item.backdrop_path)"/>
      </q-card-media>
      <q-card-title>
        <h5>{{ item.title }}</h5>
        <h5>{{ item.name }}</h5>
        <q-btn slot="right" flat round color="secondary" size="2rem">
          <q-icon name="thumb_up" />
        </q-btn>
        <q-btn slot="right" flat round color="secondary" size="2rem" @click="openImdb()">
          IMDB
        </q-btn>
        <h6 slot="subtitle">{{item.tagline}}</h6>
      </q-card-title>
      <q-card-main>
        <p>
          <q-icon name="ion-star" color="warning"/>
          {{item.vote_average}}
        </p>
        <q-item-tile><span>{{item.overview}}</span></q-item-tile>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
  import { posterPath } from '../../services/repositories/tmdb-repository'
  import { openURL } from 'quasar-framework'

  export default {
    props: ['item'],
    methods: {
      posterPath(relativePath) {
        return posterPath(relativePath)
      },
      openImdb() {
        openURL('http://www.imdb.com/title/' + this.item.imdb_id)
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

  .q-card-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .q-card {
    min-width : 320px
    margin-top: -8px
    margin-left: -8px
    margin-right: -8px
  }

  .q-card-main {
    font-size: 1.2rem;
  }
  FormButton {
    margin: 0.5rem;
  }
</style>
