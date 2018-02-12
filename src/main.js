import Vue from 'vue'
import App from './App.vue'

import Message from './components/message'
import Question from './components/question'
import Result from './components/result'
import Start from './components/start'

Vue.component('message', Message),
Vue.component('question', Question),
Vue.component('result', Result),
Vue.component('start', Start)

new Vue({
  el: '#app',
  render: h => h(App)
})
