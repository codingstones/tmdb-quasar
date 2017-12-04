import {
  numberOfFilms
} from '../getters'
import { fakeFilms } from '../../app/services/repositories/__mocks__/fake-films'

describe('Vuex Getters', () => {

  const state = { films: fakeFilms }

  it('Counts the Number of Films', () => {
    expect(numberOfFilms(state)).toBe(3)
  })
})
