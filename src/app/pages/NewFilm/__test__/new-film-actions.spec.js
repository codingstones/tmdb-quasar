import {
  createFilmAction
} from '../new-film-actions'

import { rejectedPromise, resolvedPromise } from '../../../../../test/helpers'
import { CREATE_FILM_ERROR, CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS } from '../new-film-mutations'

describe('New Film actions', () => {

  let action
  let commitSpy
  const backendError = Error('Backend Error')

  beforeEach(() => {
    commitSpy = jest.fn()
  })

  describe('Create Film action', () => {

    it('finishes with success', async () => {
      const NEW_FILM = 'IRRELEVANT NEW FILM'
      const createFilm = resolvedPromise(NEW_FILM)

      action = createFilmAction(createFilm)
      await action.run({ commit: commitSpy }, NEW_FILM)

      expect(commitSpy).toHaveBeenCalledWith(CREATE_FILM_REQUEST)
      expect(commitSpy).toHaveBeenCalledWith(CREATE_FILM_SUCCESS, NEW_FILM)
    })

    it('finishes with error', async () => {
      const createFilm = rejectedPromise(backendError)
      action = createFilmAction(createFilm)

      await action.run({ commit: commitSpy }, 'any film')

      expect(commitSpy).toHaveBeenCalledWith(CREATE_FILM_REQUEST)
      expect(commitSpy).toHaveBeenCalledWith(CREATE_FILM_ERROR, backendError)
    })
  })
})
