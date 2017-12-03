import { retrieveAFilm, retrievePopularFilmPage } from '../../services/repositories/tmdb-repository'
import {
  FETCH_DATA_REQUEST,
  FETCH_FILM_ERROR,
  FETCH_FILM_SUCCESS,
  FETCH_FILMS_ERROR,
  FETCH_FILMS_SUCCESS
} from './films-mutations'
import { queryAction } from '../../../vuex/pattern-actions'

export function retrievePopularFilmsAction() {
  return queryAction(retrievePopularFilmPage, FETCH_DATA_REQUEST, FETCH_FILMS_SUCCESS, FETCH_FILMS_ERROR).run
}

export function retrieveAFilmAction() {
  return queryAction(retrieveAFilm, FETCH_DATA_REQUEST, FETCH_FILM_SUCCESS, FETCH_FILM_ERROR).run
}
