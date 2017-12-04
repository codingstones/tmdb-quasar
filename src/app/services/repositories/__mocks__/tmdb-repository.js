import { fakeFilms, fakeFilm } from './fake-films'
import { fakeTvShow, fakeTvShows } from './fake-tv-shows'

const retrieveFilms = jest.fn(() => {
  return Promise.resolve(fakeFilms)
})

const retrievePopularFilmPage = jest.fn(() => {
  return Promise.resolve(fakeFilms)
})

const retrievePopularTvPage = jest.fn(() => {
  return Promise.resolve(fakeTvShows)
})

const retrieveAFilm = jest.fn(() => {
  return Promise.resolve(fakeFilm)
})

const retrieveATvShow = jest.fn(() => {
  return Promise.resolve(fakeTvShow)
})

const createAFilm = jest.fn((payload) => {
  return Promise.resolve(payload)
})

const posterPath = jest.fn()

module.exports = {
  retrievePopularFilmPage,
  retrievePopularTvPage,
  retrieveFilms,
  retrieveAFilm,
  createAFilm,
  retrieveATvShow,
  posterPath
}
