import { createAFilm } from '../../services/repositories/tmdb-repository'
import { CREATE_FILM_ERROR, CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS } from './new-film-mutations'

export function buildCreateFilmAction() {
  return createFilmAction(createAFilm).run
}

export function createFilmAction(createFilm) {
  return { run }

  async function run({ commit }, payload) {
    commit(CREATE_FILM_REQUEST)
    try {
      await createFilm(payload)
      commit(CREATE_FILM_SUCCESS, payload)
      return 'OK'
    }
    catch (error) {
      commit(CREATE_FILM_ERROR, error)
      return error
    }
  }
}

export function createFilmPayload(title, date) {
  return {title, date}
}
