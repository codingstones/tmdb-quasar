import {
  localizedToday, isoToday, isoTomorrow, localizedFromIso, localizedTomorrow,
  setLocale, year
} from '../date-utils'
import { stubNow } from '../../../../test/helpers'

describe('date utils', () => {

  beforeEach(() => stubNow('2017-09-02'))

  it('Prints today in ISO', () => {
    expect(isoToday()).toBe('2017-09-02')
  })

  it('Prints tomorrow in ISO', () => {
    expect(isoTomorrow()).toBe('2017-09-03')
  })

  describe('When locale is english', () => {

    beforeEach(() => setLocale('en'))

    it('Prints todays date', () => {
      expect(localizedToday()).toBe('Saturday, 2 Of September')
    })

    it('Prints tomorrows date', () => {
      expect(localizedTomorrow()).toBe('Sunday, 3 Of September')
    })
  })

  describe('When locale is spanish', () => {

    beforeEach(() => setLocale('es'))

    it('Prints todays date', () => {
      expect(localizedToday()).toBe('Sábado, 2 De Septiembre')
    })

    it('Prints tomorrows date', () => {
      expect(localizedTomorrow()).toBe('Domingo, 3 De Septiembre')
    })

    it('translate ISO date', () => {
      expect(localizedFromIso('2017-09-18')).toBe('Lunes, 18 De Septiembre')
      expect(localizedFromIso('2017-11-04')).toBe('Sábado, 4 De Noviembre')
    })

    it('Prints year from ISO', () => {
      expect(year('2017-09-02')).toBe('2017')
    })
  })
})
