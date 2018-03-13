<template>
  <div id="app">
    <h1>Math trainer</h1>
    <h2>Level: {{level +1}}</h2>
    <hr>
    <div class="progress">
      <div class="progress-bar" v-bind:style="progressStyle"></div>
    </div>
    <div id="box">
      <transition name="flip" mode="out-in">
        <start v-if="state == 'start'" @started="changeStateToQuestion"></start>
        <question
          v-else-if="state == 'question'"
          @correctAnswer="handleCorrectAnswer"
          @wrongAnswer="handleWrongAnswer"
          :settings="levels[level]"
        ></question>
        <message v-else-if="state == 'message'"
          :title="this.message.title"
          :className = "this.message.className"
          :correctAnswer = "this.message.correctAnswer"
          @messageReaded = "changeStatetoResult"
        ></message>
        <result v-if="state == 'result'"
              :stats="stats"
              @repeat="changeStateToQuestion"
              @nextLevel="increaseLevel"
        ></result>
        <congrats v-if="state == 'congrats'"
                  @returnToStart="changeStateToStart"
        ></congrats>
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
      maxQuestions: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 40,
          variants: 2,
          range: 5,
        },
        {
          from: 100,
          to: 200,
          variants: 4,
          range: 20,
        },
        {
          from: 500,
          to: 900,
          variants: 6,
          range: 40,
        },
      ]
    }
  },
  computed: {
    questionsDone() {
      return this.stats.success + this.stats.errors
    },
    progressStyle() {
      return {
        width: (this.questionsDone / this.maxQuestions * 100) + '%'
      }
    }
  },
  methods: {

    changeStateToStart() {
      this.state = 'start';
      this.resetStats();
      this.level = 0;
    },
    changeStateToQuestion () {
      this.state = 'question';
      this.resetStats()
    },
    changeStatetoResult () {
      if(this.questionsDone < this.maxQuestions) {
        this.state = 'question'
      }
      else {
        this.state = 'result'
      }
    },
    changeStateToCongrats() {
      this.state = 'congrats'
    },
    handleCorrectAnswer() {
      this.state = "message";
      this.message.title = 'Thats correct answer!';
      this.message.className = 'alert-success';
      this.stats.success++;
    },
    handleWrongAnswer(msg){
      this.state = "message";
      this.message.title = 'Thats wrong answer!';
      this.message.className = 'alert-warning';
      this.message.correctAnswer = 'The correct answer is '+ msg;
      this.stats.errors++;
    },
    increaseLevel() {
      if(this.level != this.levels.length-1) {
        this.level++;
        this.changeStateToQuestion();
      }
      else {
        this.changeStateToCongrats();
      }
    },
    resetStats() {
      this.stats.success = 0;
      this.stats.errors = 0;
    },
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
