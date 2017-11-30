import FormButton from '@/app/shared-components/FormButton.vue'
import { Wrap } from '../../../../test/helpers'

describe('FormButton.vue', () => {

  it('renders label', () => {

    const SLOT_CONTENT = '<p>Any text</p>'
    const wrapper = Wrap(FormButton)
      .withProps({label: 'SAVE'})
      .withSlots({default: SLOT_CONTENT})
      .mount()

    expect(wrapper.html()).toContain(SLOT_CONTENT)
  })

  describe('When clicking', () => {

    let clickSpy
    beforeEach(() => {
      clickSpy = jest.fn()
    })

    it('calls callback if enabled', () => {
      const wrapper = Wrap(FormButton).withProps({onClick: clickSpy}).mount()

      wrapper.trigger('click')

      expect(clickSpy).toHaveBeenCalled()
    })

    it('does not call callback if disabled', () => {
      const wrapper = Wrap(FormButton)
        .withProps({disabled: true, onClick: clickSpy})
        .mount()
      wrapper.trigger('click')

      expect(wrapper.html()).toContain('disable')
      expect(clickSpy).not.toHaveBeenCalled()
    })
  })
})
