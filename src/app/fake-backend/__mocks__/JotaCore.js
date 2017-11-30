import { fakeGigsByDay } from '../../services/__mocks__/gigs-sample'

class GigService {
  retrieveNextGigs() {
    return Promise.resolve(fakeGigsByDay)
  }
}

class Matcher {}

module.exports = { GigService, Matcher }
