import { searchFilmsSuccess } from '../../SearchResults/search-mutations'

describe('SearchResults Mutations', () => {

  let state
  let OLD_FILMS
  beforeEach(() => {
    OLD_FILMS = ['an old film', 'another old film']
    state = { searchResults: OLD_FILMS, filmPageNumber: 1 }
  })

  describe('When searching films', () => {
    it('finishes with success', () => {
      const FILMS = ['a new film', 'another new film']

      searchFilmsSuccess(state, FILMS)

      expect(state.searchResults).toBe(FILMS)
    })
  })
})
