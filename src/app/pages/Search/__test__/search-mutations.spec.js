import { toogleSearch } from '../search-mutations'

describe('Search Mutations', () => {

  let state
  beforeEach(() => {
    state = { searching: false }
  })

  it('toogle search', () => {
    toogleSearch(state)
    expect(state.searching).toBeTruthy()
    toogleSearch(state)
    expect(state.searching).toBeFalsy()
  })
})
