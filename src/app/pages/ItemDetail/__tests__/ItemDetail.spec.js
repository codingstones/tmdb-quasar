import ItemDetail from '@/app/pages/ItemDetail/ItemDetail.vue'
import { Wrap } from '../../../../../test/helpers'
import PageObject from '../../../__page_objects__/PageObject'
import { fakeFilm } from '../../../services/repositories/__mocks__/fake-films'

jest.mock('@/app/services/repositories/tmdb-repository')

describe('Item Detail', () => {

  it('renders details from an Item', async () => {
    const wrapper = Wrap(ItemDetail)
      .withProps({ item: fakeFilm })
      .mount()
    const page = new PageObject(wrapper)
    await page.resolveAll()

    expect(wrapper.text()).toContain(fakeFilm.title)
  })
})
