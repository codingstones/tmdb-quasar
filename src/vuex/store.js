import Vue from 'vue'
import Vuex from 'vuex'
import { buildCreateFilmAction } from '../app/pages/NewFilm/new-film-actions'
import {
  CREATE_FILM_ERROR, CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS, createFilmError,
  createFilmRequest, createFilmSuccess
} from '../app/pages/NewFilm/new-film-mutations'
import { retrieveAFilmAction, retrievePopularFilmsAction } from '../app/pages/PopularFilms/popular-films-actions'
import {
  FETCH_FILM_PAGE_ERROR,
  FETCH_FILM_PAGE_REQUEST,
  FETCH_FILM_PAGE_SUCCESS,
  FETCH_FILMS_ERROR,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  fetchDataRequest,
  fetchFilmPageError,
  fetchFilmPageRequest,
  fetchFilmsError,
  fetchFilmsPageSuccess,
  fetchFilmSuccess
} from '../app/pages/PopularFilms/popular-films-mutations'
import { retrieveATvShowAction, retrievePopularTvShowsAction } from '../app/pages/PopularTvShows/popular-tv-shows-actions'
import {
  FETCH_TV_SHOW_SUCCESS,
  FETCH_TV_SHOWS_ERROR,
  FETCH_TV_SHOWS_SUCCESS,
  fetchTvShowsError,
  fetchTvShowsSuccess,
  fetchTvShowSuccess
} from '../app/pages/PopularTvShows/popular-tv-shows-mutations'
import { searchFilmsAction } from '../app/pages/SearchResults/search-actions'
import { SEARCH_FILMS_SUCCESS, searchFilmsSuccess } from '../app/pages/SearchResults/search-mutations'
import {
  CREATE_FILM,
  RETRIEVE_FILM,
  RETRIEVE_POPULAR_FILMS,
  RETRIEVE_POPULAR_TV_SHOWS,
  RETRIEVE_TV_SHOW, SEARCH_FILMS
} from '../app/services/repositories/backend-commands'
import { numberOfFilms, searching } from './getters'

Vue.use(Vuex)

export const initialState = {
  films: [],
  tvShows: [],
  searchResults: [],
  filmDetail: {},
  tvShowDetail: {},
  error: false,
  loading: false,
  searching: false,
  filmPageNumber: 0,
  tvShowPageNumber: 0
}

export const actions = {
  [RETRIEVE_POPULAR_FILMS]: retrievePopularFilmsAction(),
  [RETRIEVE_POPULAR_TV_SHOWS]: retrievePopularTvShowsAction(),
  [RETRIEVE_FILM]: retrieveAFilmAction(),
  [RETRIEVE_TV_SHOW]: retrieveATvShowAction(),
  [CREATE_FILM]: buildCreateFilmAction(),
  [SEARCH_FILMS]: searchFilmsAction()
}

export const mutations = {
  [FETCH_FILMS_REQUEST]: fetchDataRequest,
  [FETCH_FILMS_SUCCESS]: fetchFilmsPageSuccess,
  [FETCH_TV_SHOWS_SUCCESS]: fetchTvShowsSuccess,
  [FETCH_FILMS_ERROR]: fetchFilmsError,
  [FETCH_TV_SHOWS_ERROR]: fetchTvShowsError,
  [FETCH_FILM_PAGE_REQUEST]: fetchFilmPageRequest,
  [FETCH_FILM_PAGE_SUCCESS]: fetchFilmSuccess,
  [FETCH_FILM_PAGE_ERROR]: fetchFilmPageError,
  [FETCH_TV_SHOW_SUCCESS]: fetchTvShowSuccess,
  [CREATE_FILM_REQUEST]: createFilmRequest,
  [CREATE_FILM_SUCCESS]: createFilmSuccess,
  [CREATE_FILM_ERROR]: createFilmError,
  [SEARCH_FILMS_SUCCESS]: searchFilmsSuccess
}

export const getters = {
  numberOfFilms,
  searching,
  paramId: state => state.route.params.id,
  currentRoute: state => state.route.path
}

export const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations,
  getters
})
