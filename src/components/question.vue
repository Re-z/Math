<template>
  <div class="wrap alert alert-secondary">
    <h2>{{ num1 }} + {{ num2 }} = ? </h2>
    <div class="btns">
      <button class="btn btn-success"
                    v-for="answer in answers"
                    @click="handleAnswer"
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

      answers() {
        let correct = this.num1 + this.num2;
        let result = [correct];
        for (let i = 0; i < 3; i++) {
          let t = calculateRandomNumber(correct - 10, correct + 10);
          result.push(t);
        }
        return result;
      },
    },
    methods: {
      handleAnswer(){

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
