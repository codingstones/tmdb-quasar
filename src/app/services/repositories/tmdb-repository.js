import { backendClient } from './backend-client'
const client = backendClient()

export function posterPath(relativePath) {
  const posterBase = 'https://image.tmdb.org/t/p/w780/'
  return posterBase + relativePath
}

export async function searchTmdbFilm(ghibliFilm) {
  const backdropBase = 'https://image.tmdb.org/t/p/w780/'
  const posterBase = 'https://image.tmdb.org/t/p/w300/'
  const response = await tmdbCommand('search/movie', { query: ghibliFilm.title, year: ghibliFilm.release_date }).run()
  const movie = response.results[0]
  movie.backdrop_path = backdropBase + movie.backdrop_path
  movie.poster_path = posterBase + movie.poster_path
  return movie
}

export async function retrievePopularFilmPage(params) {
  const payload =
    { sort_by: 'popularity.desc',
      page: params.pageNumber,
      callback: 'test' }
  const response = await tmdbCommand('discover/movie/', payload).run()
  return response.results.map(film => createFilm(film))
}

export async function retrievePopularTvPage(params) {
  const payload =
    { sort_by: 'popularity.desc',
      page: params.pageNumber,
      callback: 'test' }
  const response = await tmdbCommand('discover/tv/', payload).run()
  return response.results.map(film => createFilm(film))
}

export function retrieveAFilm(id) {
  return tmdbCommand('movie/' + id).run()
}

export function retrieveATvShow(id) {
  return tmdbCommand('tv/' + id).run()
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function createAFilm(payload) {
  return delay(2000).then(() => 'OK')
}

function tmdbCommand(suffix, payload) {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const command = {
    url: baseUrl + suffix,
    payload: {
      api_key: process.env.API_KEY,
      language: 'en-US',
      ...payload
    }
  }
  return { ...command, run }

  function run() {
    return client.run(command)
  }
}

function createFilm(rawFilm) {
  const backdropBase = 'https://image.tmdb.org/t/p/w780/'
  const posterBase = 'https://image.tmdb.org/t/p/w300/'
  rawFilm.backdrop_path = backdropBase + rawFilm.backdrop_path
  rawFilm.poster_path = posterBase + rawFilm.poster_path
  return rawFilm
}
