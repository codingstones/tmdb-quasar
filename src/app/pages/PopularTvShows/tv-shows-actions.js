import { retrieveATvShow, retrievePopularTvPage } from '../../services/repositories/tmdb-repository'
import {
  FETCH_DATA_REQUEST,
  FETCH_FILM_ERROR
} from '../PopularFilms/films-mutations'
import { queryAction } from '../../../vuex/pattern-actions'
import { FETCH_TV_SHOW_SUCCESS, FETCH_TV_SHOWS_ERROR, FETCH_TV_SHOWS_SUCCESS } from './tv-shows-mutations'

export function retrievePopularTvShowsAction() {
  return queryAction(retrievePopularTvPage, FETCH_DATA_REQUEST, FETCH_TV_SHOWS_SUCCESS, FETCH_TV_SHOWS_ERROR).run
}

export function retrieveATvShowAction() {
  return queryAction(retrieveATvShow, FETCH_DATA_REQUEST, FETCH_TV_SHOW_SUCCESS, FETCH_FILM_ERROR).run
}
