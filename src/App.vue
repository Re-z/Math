<template>
  <div id="app">
    <h1>Math trainer</h1>
    <hr>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div id="box">
      <transition name="flip" mode="out-in">
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
      </transition>
    </div>

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
      },
      stats: {
        success: 0,
        errors: 0,
      },
      maxQuestions: 3
    }
  },
  computed: {
    questionsDone() {
      return this.stats.success + this.stats.errors
    }
  },
  methods: {
    changeStateToQuestion () {
      this.state = 'question'
    },
    changeStatetoResult () {
      // this.state = 'result'
      this.state = 'question'
    },
    handleCorrectAnswer() {
      this.state = "message";
      this.message.title = 'Thats correct answer!';
      this.message.className = 'alert-success'
    },
    handleWrongAnswer(msg){
      this.state = "message";
      this.message.title = 'Thats wrong answer!';
      this.message.className = 'alert-warning';
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
  .flip-enter
  .flip-enter-active
    animation: flipInX .3s linear
  .flip-leave
  .flip-leave-active
    animation: flipOutX .3s linear
  @keyframes flipInX
    from
      transform: rotateX(90deg)
    to
      transform: rotateX(0deg)
  @keyframes flipOutX
    from
      transform: rotateX(0deg)
    to
      transform: rotateX(90deg)


</style>
