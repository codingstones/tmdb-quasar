<template>
  <div v-if="isLoading" class="spinner">
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    props: ['isLoading']
  }
</script>

<style>
</style>
