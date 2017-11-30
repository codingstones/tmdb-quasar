<template>
  <div id="q-app" class="row justify-center">
    <q-layout ref="layout">
      <Toolbar slot="header" @drawerClick="clickDrawer()"></Toolbar>
      <Tabs slot="header"></Tabs>
      <SideBar slot="left"></SideBar>
      <q-transition
        enter="fadeIn"
        leave="fadeOut">
        <router-view class="layout-view"/>
      </q-transition>
   </q-layout>
  </div>
</template>

<script>
import { registerGlobalComponents } from './app/GlobalComponentsLoader'
import { mapActions } from 'vuex'
import { Loading } from 'quasar-framework'

registerGlobalComponents()
export default {
  methods: {
    ...mapActions(['retrieve_popular_films']),
    clickDrawer() {
      this.$refs.layout.toggleLeft()
    }
  },
  async mounted() {
    Loading.show({message: 'Loading films...'})
    await this.retrieve_popular_films({ pageNumber: 1 })
    Loading.hide()
  }
}
</script>

<style>
</style>
