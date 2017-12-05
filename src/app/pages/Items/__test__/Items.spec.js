import Items from '@/app/pages/Items/Items.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import ItemsPage from '../../../__page_objects__/ItemsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'

describe('Items', () => {
  let page, wrapper, store
  let navigateToSpy = jest.fn()
  beforeEach(async () => {
    store = cloneProductionStore()
    store.state.films = fakeFilms
    wrapper = Wrap(Items)
      .withStore(store)
      .withProps({ isLoading: false,
        onClick: jest.fn(),
        retrievePage: jest.fn(),
        items: fakeFilms,
        goTo: navigateToSpy })
      .mount()
    page = new ItemsPage(wrapper)
  })

  it('renders film titles', async() => {
    fakeFilms.map(film => page.contains(film.title))
  })

  describe('When clicking buttons', () => {
    it('navigates to first film detail', async () => {
      const FIRST_FILM = fakeFilms[0]
      page.clickFirstItem()
      expect(navigateToSpy).toHaveBeenCalledWith(FIRST_FILM.id)
    })
  })
})
