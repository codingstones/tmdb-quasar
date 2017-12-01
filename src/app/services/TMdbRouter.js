import VueRouter from 'vue-router'
import { POPULAR_FILMS_PATH, POPULAR_TV_SHOWS_PATH, SEARCH_PATH } from '../../router'

export const TMdbRouter = (router) => {
  if (!router) router = new VueRouter()
  return { navigateToFilm,
    navigateToSearch,
    navigateToCreateFilm,
    navigateToPopularFilms,
    navigateToPopularTvShows,
    getParam }

  function navigateToFilm(id1) {
    router.push(`film/${id1}`)
  }

  function navigateToCreateFilm() {
    router.push({path: '/newFilm'})
  }

  function navigateToPopularFilms() {
    router.push({path: POPULAR_FILMS_PATH})
  }

  function navigateToPopularTvShows() {
    router.push({path: POPULAR_TV_SHOWS_PATH})
  }

  function navigateToSearch() {
    router.push({path: SEARCH_PATH})
  }

  function getParam(id) {
    if (!router) return ''
    return router.currentRoute.params[id]
  }
}

export const tmdbRouterMixin = {
  created: function () {
    this.tmdbRouter = TMdbRouter(this.$router)
  }
}
