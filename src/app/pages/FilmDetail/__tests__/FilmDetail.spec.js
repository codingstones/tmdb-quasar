import FilmDetail from '@/app/pages/FilmDetail/FilmDetail.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeFilm } from '../../../services/repositories/__mocks__/fake-films'

jest.mock('@/app/services/repositories/tmdb-repository')

describe('Film Detail', () => {

  it('renders details from a Film', async () => {
    let store = cloneProductionStore()
    const wrapper = Wrap(FilmDetail)
      .withStore(store)
      .mount()
    const page = new PageObject(wrapper)
    await page.resolveAll()

    expect(wrapper.text()).toContain(fakeFilm.title)
  })
})
