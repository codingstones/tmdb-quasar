import Search from '@/app/pages/Search/Search.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import FilmsPage from '../../../__page_objects__/ItemsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('Popular Items', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    wrapper = Wrap(Search)
      .withStore(store)
      .withProps({ isLoading: false, onClick: jest.fn })
      .mount()
    page = new FilmsPage(wrapper)
    await page.resolveAll()
  })

  it('renders search', async() => {
    // fakeTvShows.map(film => page.contains(film.title))
  })
})
