import { SEARCH_PATH } from '../../router'
import {
  numberOfFilms, searching
} from '../getters'
import { fakeFilms } from '../../app/services/repositories/__mocks__/fake-films'

describe('Vuex Getters', () => {

  it('Counts the Number of Films', () => {
    const state = { films: fakeFilms }
    expect(numberOfFilms(state)).toBe(3)
  })

  it('Not Searching', () => {
    const state = { route: {path: '/any'} }
    expect(searching(state)).toBe(false)
  })

  it('Searching', () => {
    const state = { route: {path: SEARCH_PATH} }
    expect(searching(state)).toBe(true)
  })
})
