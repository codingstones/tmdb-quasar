import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
import { createFilmError, createFilmRequest, createFilmSuccess } from '../new-film-mutations'

describe('New film mutations', () => {

  let state
  let OLD_FILMS
  beforeEach(() => {
    OLD_FILMS = fakeFilms
    state = { films: OLD_FILMS }
  })

  describe('When creating a new film', () => {

    it('starts request', () => {
      createFilmRequest(state)

      expect(state).toEqual({ loading: true, films: OLD_FILMS, error: '' })
    })

    it('It finishes with success', () => {
      createFilmSuccess(state, aFilm('2017-09-19'))

      expect(state.films.length).toBe(4)
      // expect(state.films[0]).toEqual('Lunes, 18 de Septiembre')
    })

    it('finishes with error', () => {
      createFilmError(state, 'Any Error')

      expect(state).toEqual({ loading: false, films: OLD_FILMS, error: 'Any Error' })
    })
  })
})

function aFilm(date) {
  return { title: 'Any title', day: date }
}
