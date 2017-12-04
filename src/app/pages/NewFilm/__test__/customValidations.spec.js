import { isFutureDatetime } from '../customValidations'

describe('isFutureDatetime', () => {

  beforeEach(() => {
    Date.now = jest.genMockFunction().mockReturnValue(new Date('2017-10-12T04:41:20'))
  })

  it('with tomorrow', () => {
    expect(isFutureDatetime('2017-10-13T00:00:00')).toBe(true)
  })

  it('with today', () => {
    expect(isFutureDatetime('2017-10-12T00:00:00')).toBe(false)
  })

  it('with yesterday', () => {
    expect(isFutureDatetime('2017-10-11T00:00:00')).toBe(false)
  })

  it('with empty date', () => {
    expect(isFutureDatetime('')).toBe(true)
  })

})
