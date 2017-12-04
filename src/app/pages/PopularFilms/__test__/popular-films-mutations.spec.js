
import { fetchFilmsError, fetchDataRequest, fetchFilmsPageSuccess } from '../popular-films-mutations'

describe('Films Mutations', () => {

  let state
  let OLD_FILMS
  beforeEach(() => {
    OLD_FILMS = ['an old film', 'another old film']
    state = { films: OLD_FILMS, filmPageNumber: 1 }
  })

  describe('When fetching films', () => {

    it('starts request', () => {
      fetchDataRequest(state)

      expect(state).toEqual({ loading: true, films: OLD_FILMS, filmPageNumber: 1, error: '' })
    })

    it('finishes with success', () => {
      const FILMS = ['a new film', 'another new film']

      fetchFilmsPageSuccess(state, FILMS)

      expect(state.loading).toBeFalsy()
      expect(state.error).toBe('')
      expect(state.films.length).toBe(4)
      expect(state.filmPageNumber).toBe(2)
    })

    it('finishes with error', () => {
      fetchFilmsError(state, 'Any Error')

      expect(state).toEqual({ loading: false, films: OLD_FILMS, filmPageNumber: 1, error: 'Any Error' })
    })
  })
})
