import {
  retrieveAFilm, retrievePopularFilmPage,
  retrievePopularTvPage
} from '../../services/repositories/tmdb-repository'
import {
  FETCH_DATA_REQUEST, FETCH_FILM_ERROR, FETCH_FILM_SUCCESS, FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS,
  FETCH_TV_SHOWS_ERROR,
  FETCH_TV_SHOWS_SUCCESS
} from './films-mutations'
import { queryAction } from './pattern-actions'

export function retrievePopularFilmsAction() {
  return queryAction(retrievePopularFilmPage, FETCH_DATA_REQUEST, FETCH_FILMS_SUCCESS, FETCH_FILMS_ERROR).run
}

export function retrievePopularTvShowsAction() {
  return queryAction(retrievePopularTvPage, FETCH_DATA_REQUEST, FETCH_TV_SHOWS_SUCCESS, FETCH_TV_SHOWS_ERROR).run
}

export function retrieveAFilmAction() {
  return queryAction(retrieveAFilm, FETCH_DATA_REQUEST, FETCH_FILM_SUCCESS, FETCH_FILM_ERROR).run
}
