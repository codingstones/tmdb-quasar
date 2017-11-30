
import { fetchTvShowsError, fetchDataRequest, fetchTvShowsSuccess } from '../films-mutations'

describe('TV shows Mutations', () => {

  let state
  let OLD_FILMS
  beforeEach(() => {
    OLD_FILMS = ['an old film', 'another old film']
    state = { tvShows: OLD_FILMS }
  })

  describe('When fetching films', () => {

    it('starts request', () => {
      fetchDataRequest(state)

      expect(state).toEqual({ loading: true, tvShows: OLD_FILMS, error: '' })
    })

    it('finishes with success', () => {
      const FILMS = ['a new film', 'another new film']

      fetchTvShowsSuccess(state, FILMS)

      expect(state.loading).toBeFalsy()
      expect(state.error).toBe('')
      expect(state.tvShows.length).toBe(4)
    })

    it('finishes with error', () => {
      fetchTvShowsError(state, 'Any Error')

      expect(state).toEqual({ loading: false, tvShows: OLD_FILMS, error: 'Any Error' })
    })
  })
})
