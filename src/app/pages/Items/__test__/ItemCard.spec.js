import ItemCard from '@/app/pages/Items/ItemCard.vue'
import { mount } from 'vue-test-utils'

describe('ItemCard', () => {

  it('renders film content', async () => {

    const FILM = {id: 'an id',
      title: 'a title',
      vote_average: 'avg',
      poster_path: 'an image url'
    }

    const wrapper = mount(ItemCard, { propsData: {item: FILM} })

    expect(wrapper.text()).toContain('a title')
    expect(wrapper.text()).toContain('avg')
  })
})
