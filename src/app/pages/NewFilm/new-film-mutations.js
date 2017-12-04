export const CREATE_FILM_REQUEST = 'createFilmRequest'
export const CREATE_FILM_SUCCESS = 'createFilmSuccess'
export const CREATE_FILM_ERROR = 'createFilmError'

export function createFilmRequest(state) {
  state.loading = true
  state.error = ''
}

export function createFilmSuccess(state, film) {
  state.loading = false
  state.error = ''

  state.films.push(film)
}

export function createFilmError(state, error) {
  state.loading = false
  state.error = error
}
