import { fakeFilms, fakeFilm } from './fake-films'

const retrieveFilms = jest.fn(() => {
  return Promise.resolve(fakeFilms)
})

const retrievePopularFilmPage = jest.fn(() => {
  return Promise.resolve(fakeFilms)
})

const retrieveAFilm = jest.fn(() => {
  return Promise.resolve(fakeFilm)
})

const posterPath = jest.fn()

module.exports = { retrievePopularFilmPage, retrieveFilms, retrieveAFilm, filmIds: jest.fn(), posterPath }
