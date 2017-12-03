import PageObject from './PageObject'

export default class ItemsPageObject extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  clickFirstItem() {
    this.wrapper.findAll('.q-card').at(0).trigger('click')
  }

  clickSecondItem() {
    this.wrapper.findAll('.q-card').at(1).trigger('click')
  }
}
