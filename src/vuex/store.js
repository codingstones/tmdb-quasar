import Vue from 'vue'
import Vuex from 'vuex'
import {
  retrieveAFilmAction, retrieveATvShowAction, retrievePopularFilmsAction,
  retrievePopularTvShowsAction
} from '../app/pages/Films/films-actions'
import {
  FETCH_FILM_ERROR,
  FETCH_FILM_REQUEST,
  FETCH_FILM_SUCCESS,
  FETCH_FILMS_ERROR,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  fetchFilmError,
  fetchFilmRequest,
  fetchFilmsError,
  fetchDataRequest,
  fetchFilmsSuccess,
  fetchFilmSuccess, fetchTvShowsSuccess, FETCH_TV_SHOWS_SUCCESS, FETCH_TV_SHOWS_ERROR, fetchTvShowsError,
  fetchTvShowSuccess, FETCH_TV_SHOW_SUCCESS
} from '../app/pages/Films/films-mutations'
import {
  RETRIEVE_POPULAR_FILMS, RETRIEVE_FILM,
  RETRIEVE_POPULAR_TV_SHOWS, RETRIEVE_TV_SHOW
} from '../app/services/repositories/backend-commands'
import { numberOfFilms } from './getters'

Vue.use(Vuex)

export const initialState = {
  films: [],
  tvShows: [],
  filmDetail: {},
  tvShowDetail: {},
  error: false,
  loading: false
}

export const actions = {
  [RETRIEVE_POPULAR_FILMS]: retrievePopularFilmsAction(),
  [RETRIEVE_POPULAR_TV_SHOWS]: retrievePopularTvShowsAction(),
  [RETRIEVE_FILM]: retrieveAFilmAction(),
  [RETRIEVE_TV_SHOW]: retrieveATvShowAction()
}

export const mutations = {
  [FETCH_FILMS_REQUEST]: fetchDataRequest,
  [FETCH_FILMS_SUCCESS]: fetchFilmsSuccess,
  [FETCH_TV_SHOWS_SUCCESS]: fetchTvShowsSuccess,
  [FETCH_FILMS_ERROR]: fetchFilmsError,
  [FETCH_TV_SHOWS_ERROR]: fetchTvShowsError,
  [FETCH_FILM_REQUEST]: fetchFilmRequest,
  [FETCH_FILM_SUCCESS]: fetchFilmSuccess,
  [FETCH_FILM_ERROR]: fetchFilmError,
  [FETCH_TV_SHOW_SUCCESS]: fetchTvShowSuccess
}

export const getters = {
  numberOfFilms,
  paramId: state => state.route.params.id,
  currentRoute: state => state.route.path
}

export const store = new Vuex.Store({
  state: initialState,
  actions,
  mutations,
  getters
})
