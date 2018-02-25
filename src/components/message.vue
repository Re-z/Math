<template>
  <div class="alert wrap" :class="className">
    <h2> {{ title }}</h2>
    <p>{{ correctAnswer }}</p>

    <button class="btn btn-success"
    @click = "emitNextStep"
    >Continue</button>

  </div>
</template>

<script>
export default {
  props: ['title', 'className', 'correctAnswer'],
  methods: {
    emitNextStep () {
      this.$emit('messageReaded')
    }
  }
}
</script>

<style scoped lang="sass">

</style>
