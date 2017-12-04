<template>
  <div id="q-app" class="row justify-center">
    <q-layout ref="layout">
      <SearchToolbar slot="header" @drawerClick="clickDrawer()"
        v-if="searching"/>
      <Toolbar v-else slot="header" @drawerClick="clickDrawer()"/>
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
import { mapGetters } from 'vuex'

registerGlobalComponents()
export default {
  computed: {
    ...mapGetters(['searching'])
  },
  methods: {
    clickDrawer() {
      this.$refs.layout.toggleLeft()
    }
  }
}
</script>

<style>
</style>
