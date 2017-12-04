export const FETCH_FILMS_REQUEST = 'fetchDataRequest'
export const FETCH_FILMS_SUCCESS = 'fetchFilmsPageSuccess'
export const FETCH_FILMS_ERROR = 'fetchFilmsError'
export const FETCH_DATA_REQUEST = 'fetchDataRequest'
export const FETCH_FILM_PAGE_REQUEST = 'fetchFilmPageRequest'
export const FETCH_FILM_PAGE_SUCCESS = 'fetchFilmPageSuccess'
export const FETCH_FILM_PAGE_ERROR = 'fetchFilmPageError'

export function fetchDataRequest(state) {
  state.loading = true
  state.error = ''
}

export function fetchFilmsPageSuccess(state, page) {
  state.loading = false
  state.films = state.films.concat(page)
  state.filmPageNumber++
  state.error = ''
}

export function fetchFilmsError(state, error) {
  state.loading = false
  state.error = error.toString()
}

export function fetchFilmPageRequest(state) {
  state.loading = true
  state.error = ''
  state.filmDetail = {}
}

export function fetchFilmSuccess(state, film) {
  state.loading = false
  state.filmDetail = film
  state.error = ''
}

export function fetchFilmPageError(state, error) {
  state.loading = false
  state.error = error
}
