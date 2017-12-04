export const SEARCH_FILMS_SUCCESS = 'searchFilmsSuccess'

export function searchFilmsSuccess(state, results) {
  state.loading = false
  state.searchResults = results
  state.error = ''
}
