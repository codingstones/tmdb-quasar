import { queryAction } from '../../../vuex/pattern-actions'
import { searchTmdbFilms } from '../../services/repositories/tmdb-repository'
import { FETCH_DATA_REQUEST, FETCH_FILMS_ERROR } from '../PopularFilms/popular-films-mutations'
import { SEARCH_FILMS_SUCCESS } from './search-mutations'

export function searchFilmsAction() {
  return queryAction(searchTmdbFilms, FETCH_DATA_REQUEST, SEARCH_FILMS_SUCCESS, FETCH_FILMS_ERROR).run
}
