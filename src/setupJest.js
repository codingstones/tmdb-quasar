import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import { tmdbRouterMixin } from './app/services/TMdbRouter'
import VueProgressiveImage from 'vue-progressive-image'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.mixin(tmdbRouterMixin)
Vue.use(VueProgressiveImage)
// const puppeteer = require('puppeteer')

import { registerGlobalComponents } from './app/GlobalComponentsLoader'

registerGlobalComponents()

// export async function loadBrowser() {
//   global.__BROWSER__ = await puppeteer.launch({
//     headless: false,
//     ignoreHTTPSErrors: true,
//     dumpio: true,
//     devtools: false
//   })
// }
//
// export async function loadPage(url) {
//   const page = await global.__BROWSER__.newPage()
//   page.goto(url)
//   return page
// }
//
// import { toMatchImageSnapshot } from 'jest-image-snapshot'
// expect.extend({ toMatchImageSnapshot })
