// import { loadBrowser } from '../../../setupJest'
// const timeout = 5000

xdescribe('/ (Home Page)', () => {

  let page
  // beforeAll(async () => {
  //   await loadBrowser()
  //   page = await global.__BROWSER__.newPage()
  //   await page.goto('http://localhost:8080')
  // }, timeout)

  it('should load page without error', async () => {
    let text = await page.evaluate(() => document.body.textContent)
    const screenshot = await page.screenshot({
      fullPage: true
    })
    console.log('WEB TEST: ', screenshot)
    expect(screenshot).toMatchImageSnapshot()
    expect(text).toContain('tmdb')
  })
})
