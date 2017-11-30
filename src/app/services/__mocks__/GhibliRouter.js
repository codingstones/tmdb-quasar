const getParam = () => 'any id'
const navigateToAllGigs = jest.fn()
const navigateToGig = jest.fn()
module.exports = {
  GhibliRouter: () => {
    return { getParam, navigateToAllGigs, navigateToGig }
  }
}
