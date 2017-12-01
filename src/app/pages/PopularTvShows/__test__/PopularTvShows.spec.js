import PopularTvShows from '@/app/pages/PopularTvShows/PopularTvShows.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import FilmsPage from '../../../__page_objects__/FilmsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('Popular Tv Shows', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    wrapper = Wrap(PopularTvShows)
      .withStore(store)
      .withProps({ isLoading: false })
      .mount()
    page = new FilmsPage(wrapper)
  })

  it('renders film titles', async() => {
    fakeFilms.map(film => page.contains(film.title))
  })
})
