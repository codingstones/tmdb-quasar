import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/
  return () => import(`@/app/pages/${component}.vue`)
}
import PopularFilms from '@/app/pages/PopularFilms/PopularFilms.vue'
import PopularTvShows from '@/app/pages/PopularTvShows/PopularTvShows.vue'
import FilmDetail from '@/app/pages/FilmDetail/FilmDetail.vue'
import TvShowDetail from '@/app/pages/TvShowDetail/TvShowDetail.vue'
import SearchResults from '@/app/pages/SearchResults/SearchResults.vue'
import NewFilm from '@/app/pages/NewFilm/NewFilm.vue'

export const POPULAR_FILMS_PATH = '/popular_films'
export const POPULAR_TV_SHOWS_PATH = '/popular_tv_shows'
export const SEARCH_PATH = '/search'
export const FILM_DETAIL_PATH = '/film/'
export const TV_SHOW_DETAIL_PATH = '/tvShow/'
export const NEW_FILM_PATH = '/newFilm/'

const router = new VueRouter({
  routes:
  [
    { path: '/', redirect: POPULAR_FILMS_PATH },
    { path: POPULAR_FILMS_PATH, component: PopularFilms },
    { path: POPULAR_TV_SHOWS_PATH, component: PopularTvShows },
    { path: SEARCH_PATH, component: SearchResults },
    { path: FILM_DETAIL_PATH + ':id', component: FilmDetail },
    { path: TV_SHOW_DETAIL_PATH + ':id', component: TvShowDetail },
    { path: NEW_FILM_PATH, component: NewFilm },
    { path: '*', component: load('Error404') }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
