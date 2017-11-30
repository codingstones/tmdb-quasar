import Films from '@/app/pages/Films/Films.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import FilmsPage from '../../../__page_objects__/FilmsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'

describe('Films', () => {

  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    store.state.films = fakeFilms
    wrapper = Wrap(Films)
      .withStore(store)
      .withProps({ isLoading: false, onClick: jest.fn, films: fakeFilms })
      .mount()
    page = new FilmsPage(wrapper)
  })

  it('renders film titles', async() => {
    fakeFilms.map(film => page.contains(film.title))
  })

  describe('When clicking buttons', () => {

    let navigateToFilmSpy
    beforeEach(async () => {
      navigateToFilmSpy = jest.fn()
      page.setRouterSpy({ navigateToFilm: navigateToFilmSpy })
    })

    it('navigates to first film detail', async () => {
      const FIRST_FILM = fakeFilms[0]
      page.clickFirstGig()
      expect(navigateToFilmSpy).toHaveBeenCalledWith(FIRST_FILM.id)
    })
  })
})
