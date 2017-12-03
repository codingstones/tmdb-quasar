import PopularFilms from '@/app/pages/PopularFilms/PopularFilms.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import ItemsPage from '../../../__page_objects__/ItemsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('Popular Items', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    wrapper = Wrap(PopularFilms)
      .withStore(store)
      .withProps({ isLoading: false, onClick: jest.fn })
      .mount()
    page = new ItemsPage(wrapper)
  })

  it('renders film titles', async() => {
    fakeFilms.map(film => page.contains(film.title))
  })
})
