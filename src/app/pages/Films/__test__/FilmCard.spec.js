import FilmRow from '@/app/pages/Films/FilmCard.vue'
import { mount } from 'vue-test-utils'

describe('FilmRow', () => {

  it('renders film content', async () => {

    const FILM = {id: 'an id',
      title: 'a title',
      vote_average: 'avg',
      backdrop_path: 'film img'}

    const wrapper = mount(FilmRow, { propsData: {film: FILM} })

    expect(wrapper.text()).toContain('a title')
    expect(wrapper.text()).toContain('avg')
    expect(wrapper.html()).toContain('film img')
  })
})
