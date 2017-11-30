import { actions, mutations, getters, initialState } from '../src/vuex/store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import { mount as _mount, shallow as _shallow } from 'vue-test-utils'
import { deepCopy } from '../src/vuex/utils'

export function spyFor() {
  // Returns an object like {arg0: jest.fn(), ...argN: jest.fn()} for the given args
  return Array.from(arguments).reduce((result, arg) => {
    result[arg] = jest.fn()
    return result
  }, {})
}

export function resolvedPromise(promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise(promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function resolvedStub(methodName, promiseResult) {
  // Returns the methodName method stubbed to return a resolved promise with value promiseResult
  const result = {}
  result[methodName] = resolvedPromise(promiseResult)
  return result
}

export function rejectedStub(methodName, promiseError) {
  // Returns the methodName method stubbed to return a rejected promise with value promiseResult
  const result = {}
  result[methodName] = rejectedPromise(promiseError)
  return result
}

export function cloneProductionStore() {
  return new Vuex.Store({
    state: deepCopy(initialState),
    actions,
    mutations,
    getters
  })
}

export function stubNow(isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}

export function stubDate(isoDate) {
  Date.now = jest.fn(() => new Date(isoDate).valueOf())
}

export function Wrap(component) {

  return {mount, shallow, withProps, withSlots, withRouter, withStore, withParamId, config}

  function withProps(props) {
    this.props = props
    return this
  }

  function withStore(store) {
    this.store = store
    this.router = new VueRouter()
    sync(this.store, this.router)
    return this
  }

  function withRouter(router) {
    this.router = router
    return this
  }

  function withSlots(slots) {
    this.slots = slots
    return this
  }

  function withParamId(id) {
    component.methods.paramId = () => id
    return this
  }

  function mount() {
    return _mount(component, this.config())
  }

  function shallow() {
    return _shallow(component, this.config())
  }

  function config() {
    return { propsData: this.props, slots: this.slots, router: this.router, store: this.store }
  }
}
