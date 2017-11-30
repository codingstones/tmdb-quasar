import PageObject from './PageObject'

export default class FilmsPageObject extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  clickFirstGig() {
    this.wrapper.findAll('.q-card').at(0).trigger('click')
  }

  clickSecondGig() {
    this.wrapper.findAll('.q-card').at(1).trigger('click')
  }
}
