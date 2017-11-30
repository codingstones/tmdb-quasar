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

registerGlobalComponents()
export default {
  methods: {
    clickDrawer() {
      this.$refs.layout.toggleLeft()
    }
  }
}
</script>

<style>
</style>
