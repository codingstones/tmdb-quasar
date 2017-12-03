import TvShowDetail from '@/app/pages/TvShowDetail/TvShowDetail.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeTvShow } from '../../../services/repositories/__mocks__/fake-tv-shows'

jest.mock('@/app/services/repositories/tmdb-repository')

describe('Tv Show Detail', () => {

  it('renders details from a tv show', async () => {
    let store = cloneProductionStore()
    const wrapper = Wrap(TvShowDetail)
      .withStore(store)
      .mount()
    const page = new PageObject(wrapper)
    await page.resolveAll()

    expect(wrapper.text()).toContain(fakeTvShow.name)
  })
})
