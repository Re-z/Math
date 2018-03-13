<template>
  <div class="wrap alert alert-secondary">
    <h2>It was the final level. You can start again</h2>
    <hr>
    <button class="btn btn-primary" @click="$emit('returnToStart')">Return to start</button>
  </div>
</template>

<script>
  export default {
    props: ['stats']
  }
</script>

<style scoped lang="sass">

</style>
