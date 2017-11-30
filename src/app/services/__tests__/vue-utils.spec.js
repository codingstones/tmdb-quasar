import { camelToSnake, snakeToCamel } from '../vue-utils'

describe('vue utils', () => {
  it('snakeToCamel', () => {
    expect(snakeToCamel('hello')).toBe('hello')
    expect(snakeToCamel('apply_rating_to_amount')).toBe('applyRatingToAmount')
  })

  it('camelToSnake', () => {
    expect(camelToSnake('hello')).toBe('hello')
    expect(camelToSnake('applyRatingToAmount')).toBe('apply_rating_to_amount')
  })
})
