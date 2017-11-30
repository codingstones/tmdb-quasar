import PageObject from './PageObject'

export default class DayListPageObject extends PageObject {
  constructor(wrapper) {
    super(wrapper)
    this.wrapper = wrapper
  }

  dayTitles() {
    return this.wrapper.findAll('.q-card-title').wrappers.map((day) => day.text())
  }

  gigRowsFor(dayNumber) {
    return this.wrapper.findAll('.day').at(dayNumber).findAll('.q-item').wrappers.map((row) => row.text().trim())
  }

  clickFirstGig() {
    this.wrapper.findAll('.q-item').at(0).trigger('click')
  }

  clickSecondGig() {
    this.wrapper.findAll('.q-item').at(1).trigger('click')
  }
}
