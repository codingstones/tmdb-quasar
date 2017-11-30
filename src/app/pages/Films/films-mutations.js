export const FETCH_FILMS_REQUEST = 'fetchDataRequest'
export const FETCH_FILMS_SUCCESS = 'fetchFilmsSuccess'
export const FETCH_FILMS_ERROR = 'fetchFilmsError'
export const FETCH_DATA_REQUEST = 'fetchDataRequest'
export const FETCH_TV_SHOWS_SUCCESS = 'fetchTvShowsSuccess'
export const FETCH_TV_SHOWS_ERROR = 'fetchTvShowsError'
export const FETCH_FILM_REQUEST = 'fetchFilmRequest'
export const FETCH_FILM_SUCCESS = 'fetchFilmSuccess'
export const FETCH_FILM_ERROR = 'fetchFilmError'

export function fetchDataRequest(state) {
  state.loading = true
  state.error = ''
}

export function fetchFilmsSuccess(state, page) {
  state.loading = false
  state.films = state.films.concat(page)
  state.error = ''
}

export function fetchFilmsError(state, error) {
  // console.error('Error fetching films', error.toString())
  state.loading = false
  state.error = error
}
export function fetchFilmRequest(state) {
  state.loading = true
  state.error = ''
  state.filmDetail = {}
}

export function fetchFilmSuccess(state, film) {
  state.loading = false
  state.filmDetail = film
  state.error = ''
}

export function fetchFilmError(state, error) {
  // console.error('Error fetching films', error.toString())
  state.loading = false
  state.error = error
}
