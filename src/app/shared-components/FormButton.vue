<template>
  <q-btn color="secondary"
         :disable="disabled"
         @click="onClick()">
    <span v-if="isLoading">
      <q-spinner-mat size="20"/>
      Saving gig...
    </span>
    <slot v-else></slot>
  </q-btn>
</template>

<script>
  export default {
    props: ['onClick', 'disabled', 'isLoading']

  }
</script>
