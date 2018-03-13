<template>
  <div class="wrap alert alert-primary">
    <h2>Success: {{stats.success}}</h2>
    <h2>Errors: {{stats.errors}}</h2>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Repeat</button>
    <button class="btn btn-primary" @click="$emit('nextLevel')">Next level</button>
  </div>
</template>

<script>
  export default {
    props: ['stats']
  }
</script>

<style scoped lang="sass">

</style>
