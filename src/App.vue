<template>
  <div id="app">
    <start v-if="state == 'start'" @started="changeStateToQuestion"></start>
    <question v-else-if="state == 'question'"></question>
    <message v-else-if="state == 'message'"></message>
    <result v-else-if="state == 'result'"></result>
  </div>

</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start'
    }
  },
  methods: {
    changeStateToQuestion () {
      this.state = 'question'
    }
  }
}
</script>

<style lang="sass">
  .wrap
    max-width: 900px
    margin: 20px auto
    text-align: center
</style>
