<template>
  <div  class="start alert alert-secondary">
    <h1>Are you ready to test your Math skills?</h1>
    <button class="start__btn btn btn-success" @click="$emit('started')">Lets go</button>
  </div>
</template>

<script>

</script>

<style scoped lang="sass">
  .start
    max-width: 900px
    margin: 20px auto
    text-align: center
    &__btn
      margin: 20px 0 0 0
</style>
