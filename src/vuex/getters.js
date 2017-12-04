import { SEARCH_PATH } from '../router'

export function numberOfFilms(state) {
  return state.films.length
}

export function searching(state) {
  return state.route.path === SEARCH_PATH
}
