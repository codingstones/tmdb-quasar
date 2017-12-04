import { mount } from 'vue-test-utils'
import NewFilm from '@/app/pages/NewFilm/NewFilm.vue'
import NewFilmPage from '../../../__page_objects__/NewFilmPageObject'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('New Film', () => {

  const PAST_DATETIME = '1900/10/27'
  const FUTURE_DATETIME = '3000/10/27'

  let page, wrapper, store
  beforeEach(() => {
    store = cloneProductionStore()
    wrapper = Wrap(NewFilm).withStore(store).mount()
    page = new NewFilmPage(wrapper)
  })

  describe('shows validation error', () => {

    describe('when validating title', () => {

      it('and title is cleared', async () => {
        page.dirtyValidation()
        await page.resolveAll()
        expect(page.text()).toContain('Name is required')
      })

      it('and title is too short', async() => {
        page.writeName(tooShortName())
        await page.resolveAll()
        expect(page.text()).toContain('Minimum 5 characters.')
      })

      it('and title is too long', async() => {
        page.writeName(tooLongName())
        await page.resolveAll()
        expect(page.text()).toContain('Maximum 20 characters.')
      })
    })

    describe('when validating datetime', () => {
      it('and datetime is cleared', async () => {
        page.dirtyValidation()
        await page.resolveAll()
        expect(page.text()).toContain('Date and time of gig are required.')
      })

      it('and datetime is in the past', async () => {
        page.writeDatetime(PAST_DATETIME)
        await page.resolveAll()
        expect(page.text()).toContain('You cannot set a film in a past date :(')
      })
    })
  })

  describe('does not show validation error', () => {
    it('when datetime is in the future', async () => {
      page.writeDatetime(FUTURE_DATETIME)
      await page.resolveAll()
      expect(page.hasDatetimeError()).toBe(false)
    })

    it('when title has valid length', async() => {
      page.writeName(nameWithValidLength())
      await page.resolveAll()
      expect(page.hasNameError()).toBe(false)
    })
  })

  describe('when save button', () => {
    it('is disabled by default', async () => {
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is disabled when form not fully filled', async () => {
      page.writeName(nameWithValidLength())
      await page.resolveAll()
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is disabled when form has errors', async () => {
      page.writeName(tooShortName())
      page.writeDatetime(PAST_DATETIME)
      await page.resolveAll()
      expect(page.isSaveButtonDisabled()).toBe(true)
    })

    it('is enabled when form is fully filled without errors', async () => {
      await page.fillFormWith(nameWithValidLength(), FUTURE_DATETIME)
      expect(page.isSaveButtonDisabled()).toBe(false)
    })

    describe('is clicked', async () => {
      beforeEach(async () => {
        expect(store.state.films).toHaveLength(0)

        await page.fillFormWith(nameWithValidLength(), FUTURE_DATETIME)
        page.clickSaveButton()
        await page.resolveAll()
      })
      it('creates a Film in the store', async () => {
        expect(store.state.films).toHaveLength(1)
      })
      it('navigates to all gigs route', async () => {
        page.checkCurrentPath(store, '/popular_films')
      })
    })
  })
})

const MIN_LENGTH = 4
const MAX_LENGTH = 20

function nameWithValidLength() {
  return nameWithLength(MIN_LENGTH + 1)
}

function tooShortName() {
  return nameWithLength(MIN_LENGTH - 1)
}

function tooLongName() {
  return nameWithLength(MAX_LENGTH + 1)
}

function nameWithLength(length) {
  return 'x'.repeat(length)
}
