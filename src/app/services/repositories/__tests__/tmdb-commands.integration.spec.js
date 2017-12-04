
import {
  retrieveAFilm, retrieveATvShow, retrievePopularFilmPage, retrievePopularTvPage,
  searchTmdbFilms
} from '../tmdb-repository'

xdescribe('Tmdb client', () => {

  it('finds searched film', async () => {
    const results = await searchTmdbFilms({ title: 'Princess Mononoke' })
    const film = results[0]
    expect(film.id).toBe(128)
    expect(film.backdrop_path).toContain('image.tmdb.org')
    expect(film.backdrop_path).toContain('.jpg')
    expect(film.poster_path).toContain('.jpg')
  })

  it('retrieves a page of films order by popularity', async () => {
    const PAGE_NUMBER = 2
    const result = await retrievePopularFilmPage(PAGE_NUMBER)
    expect(result.length).toBe(20)
    expect(result[0].backdrop_path).toContain('.jpg')
    expect(result[0].poster_path).toContain('.jpg')
  })

  it('retrieves a page of tv programs order by popularity', async () => {
    const PAGE_NUMBER = 2
    const result = await retrievePopularTvPage(PAGE_NUMBER)
    expect(result.length).toBe(20)
    expect(result[0].backdrop_path).toContain('.jpg')
    expect(result[0].poster_path).toContain('.jpg')
  })

  it('Gets a film by url', async () => {
    const film = await retrieveAFilm(128)
    expect(typeof film.title).toBe('string')
  })

  it('Gets a tv show by url', async () => {
    const film = await retrieveATvShow(12697)
    expect(typeof film.title).toBe('string')
  })
})
