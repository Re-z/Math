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
    props: ['settings'],
    data() {
      return {
        num1: calculateRandomNumber(this.settings.from, this.settings.to),
        num2: calculateRandomNumber(this.settings.from, this.settings.to),
      }
    },
    computed: {
      correct() {
        return this.num1 + this.num2;
      },
      answers() {
        let result = [this.correct];
        for (let i = 0; i < this.settings.variants-1; i++) {
          let t = calculateRandomNumber(this.correct - this.settings.range, this.correct + this.settings.range);
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
          this.$emit('wrongAnswer', this.correct)
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
