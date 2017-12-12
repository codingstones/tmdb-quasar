describe('Search', function() {

  const visitApp = () => cy.visit('http://localhost:8080/')

  const clickSearchButton = () => cy.contains('SEARCH').click()
  const checkUrlContains = (url) => cy.url().should('include', url)
  const search = (text) => cy.get('input').type(text)

  beforeEach(visitApp)

  it('searches movie', function() {
    clickSearchButton()
    checkUrlContains('/#/search')
    search('piquillo')
    cy.contains('Pápa Piquillo')
  })
})
