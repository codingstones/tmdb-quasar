import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Quasar from 'quasar-framework'
import { jotaRouterMixin } from './app/services/TMdbRouter'
Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.mixin(jotaRouterMixin)

import { registerGlobalComponents } from './app/GlobalComponentsLoader'

registerGlobalComponents()
