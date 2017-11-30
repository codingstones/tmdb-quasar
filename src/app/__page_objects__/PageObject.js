export default class PageObject {
  constructor(wrapper) {
    this.wrapper = wrapper
  }

  wait() {
    return new Promise(resolve => setImmediate(resolve))
  }

  update() {
    return this.wrapper.update()
  }

  text() {
    return this.wrapper.text()
  }

  html() {
    return this.wrapper.html()
  }

  contains(text) {
    expect(this.text()).toContain(text)
  }

  matchSnapshot() {
    expect(this.wrapper.html()).toMatchSnapshot()
  }

  setRouterSpy(routerSpy) {
    this.wrapper.vm.jotaRouter = routerSpy
  }

  checkCurrentPath(state, path) {
    expect(this.wrapper.vm.$store.state.route.path).toBe(path)
  }
}
