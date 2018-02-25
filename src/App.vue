<template>
  <div id="app">
    <start v-if="state == 'start'" @started="changeStateToQuestion"></start>
    <question
      v-else-if="state == 'question'"
      @correctAnswer="handleCorrectAnswer"
      @wrongAnswer="handleWrongAnswer"
    ></question>
    <message v-else-if="state == 'message'"
      :title="this.message.title"
      :className = "this.message.className"
      :correctAnswer = "this.message.correctAnswer"
      @messageReaded = "changeStatetoResult"
    ></message>
    <result v-else-if="state == 'result'"></result>
  </div>

</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      state: 'start',
      message: {
        title: '',
        className: '',
        correctAnswer: ''
      }
    }
  },
  methods: {
    changeStateToQuestion () {
      this.state = 'question'
    },
    changeStatetoResult () {
      this.state = 'result'
    },
    handleCorrectAnswer() {
      this.state = "message";
      this.message.title = 'Thats correct answer!';
      this.message.className = 'alert-success'
    },
    handleWrongAnswer(msg){
      this.state = "message";
      this.message.title = 'Thats wrong answer!';
      this.message.className = 'alert-warning'
      this.message.correctAnswer = 'The correct answer is '+ msg
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
