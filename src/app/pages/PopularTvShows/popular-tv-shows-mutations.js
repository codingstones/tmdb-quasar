export const FETCH_TV_SHOWS_SUCCESS = 'fetchTvShowsSuccess'
export const FETCH_TV_SHOWS_ERROR = 'fetchTvShowsError'
export const FETCH_TV_SHOW_SUCCESS = 'fetchTvShowSuccess'

export function fetchTvShowsSuccess(state, page) {
  state.loading = false
  state.tvShows = state.tvShows.concat(page)
  state.error = ''
  state.tvShowPageNumber++
}

export function fetchTvShowsError(state, error) {
  state.loading = false
  state.error = error
}

export function fetchTvShowSuccess(state, show) {
  state.loading = false
  state.tvShowDetail = show
  state.error = ''
}
