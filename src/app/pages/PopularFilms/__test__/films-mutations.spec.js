
import { fetchFilmsError, fetchDataRequest, fetchFilmsSuccess } from '../films-mutations'

describe('Items Mutations', () => {

  let state
  let OLD_FILMS
  beforeEach(() => {
    OLD_FILMS = ['an old film', 'another old film']
    state = { films: OLD_FILMS }
  })

  describe('When fetching films', () => {

    it('starts request', () => {
      fetchDataRequest(state)

      expect(state).toEqual({ loading: true, films: OLD_FILMS, error: '' })
    })

    it('finishes with success', () => {
      const FILMS = ['a new film', 'another new film']

      fetchFilmsSuccess(state, FILMS)

      expect(state.loading).toBeFalsy()
      expect(state.error).toBe('')
      expect(state.films.length).toBe(4)
    })

    it('finishes with error', () => {
      fetchFilmsError(state, 'Any Error')

      expect(state).toEqual({ loading: false, films: OLD_FILMS, error: 'Any Error' })
    })
  })
})
