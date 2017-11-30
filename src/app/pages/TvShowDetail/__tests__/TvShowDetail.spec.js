import TvShowDetail from '@/app/pages/TvShowDetail/TvShowDetail.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeFilm } from '../../../services/repositories/__mocks__/fake-films'

jest.mock('@/app/services/repositories/tmdb-repository')

describe('Tv Show Detail', () => {

  it('renders details from a tv show', async () => {
    let store = cloneProductionStore()
    const wrapper = Wrap(TvShowDetail)
      .withStore(store)
      .mount()
    const page = new PageObject(wrapper)
    await page.wait()

    expect(wrapper.text()).toContain(fakeFilm.title)
  })
})
