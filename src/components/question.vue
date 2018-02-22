<template>
  <div class="wrap alert alert-secondary">
    <h2>{{ num1 }} + {{ num2 }} = ? </h2>
    <div class="btns">
      <button class="btn btn-success"
                    v-for="answer in answers"
                    @click="handleAnswer(answer)"
      >{{ answer }}</button>



    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num1: calculateRandomNumber(100, 200),
        num2: calculateRandomNumber(100, 200),
      }
    },
    computed: {
      correct() {
        return this.num1 + this.num2;
      },
      answers() {
        let result = [this.correct];
        for (let i = 0; i < 3; i++) {
          let t = calculateRandomNumber(this.correct - 20, this.correct + 20);
          result.push(t);
        }
        return result.sort(function(){
          return Math.random() > 0.5;
        });
      },
    },
    methods: {
      handleAnswer(answer){
        if(answer === this.correct){
          this.$emit('correctAnswer')
        }
        else {
          this.$emit('wrongAnswer')
        }
      }
    },

  }
  function calculateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

</script>

<style scoped lang="sass">
.btns
  margin: 20px 0
  display: flex
  justify-content: space-between
  button
    display: inline-block
    margin: 0 15px
</style>
