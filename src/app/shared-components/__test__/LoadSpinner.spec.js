import LoadSpinner from '@/app/shared-components/LoadSpinner.vue'
import { Wrap } from '../../../../test/helpers'

describe('LoadSpinner.vue', () => {

  it('shows loading', () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: false }).mount()
    expect(wrapper.text()).not.toContain('Loading...')
  })

  it('does not show loading', () => {
    const wrapper = Wrap(LoadSpinner).withProps({ isLoading: true }).mount()

    expect(wrapper.text()).toContain('Loading...')
  })
})
