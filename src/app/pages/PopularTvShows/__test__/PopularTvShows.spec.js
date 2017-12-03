import PopularTvShows from '@/app/pages/PopularTvShows/PopularTvShows.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import ItemsPage from '../../../__page_objects__/ItemsPageObject'
import { fakeTvShows } from '../../../services/repositories/__mocks__/fake-tv-shows'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('Popular Tv Shows', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    wrapper = Wrap(PopularTvShows)
      .withStore(store)
      .withProps({ isLoading: false })
      .mount()
    page = new ItemsPage(wrapper)
  })

  it('renders tv shows titles', async() => {
    fakeTvShows.map(film => page.contains(film.name))
  })
})
