import PopularFilms from '@/app/pages/PopularFilms/PopularFilms.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import FilmsPage from '../../../__page_objects__/FilmsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('Popular Films', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    wrapper = Wrap(PopularFilms)
      .withStore(store)
      .withProps({ isLoading: false, onClick: jest.fn })
      .mount()
    page = new FilmsPage(wrapper)
    await page.resolveAll()
  })

  it('renders film titles', async() => {
    await page.resolveAll()
    fakeFilms.map(film => page.contains(film.title))
  })
})
