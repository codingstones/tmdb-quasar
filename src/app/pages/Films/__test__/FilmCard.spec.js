import FilmCard from '@/app/pages/Films/FilmCard.vue'
import { mount } from 'vue-test-utils'

describe('FilmCard', () => {

  it('renders film content', async () => {

    const FILM = {id: 'an id',
      title: 'a title',
      vote_average: 'avg',
      backdrop_path: 'an image url'
    }

    const wrapper = mount(FilmCard, { propsData: {film: FILM} })

    expect(wrapper.text()).toContain('a title')
    expect(wrapper.text()).toContain('avg')
  })
})
