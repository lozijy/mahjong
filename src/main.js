import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  data(){
    return {
      messages:[],
    }
  },
  created(){
    this.$socket=new WebSocket('ws://localhost:8000');
    this.$socket.addEventListener('open', () => {
      console.log('Connected to server');
      this.$socket.send('Hello, server!');
    });
    this.$socket.addEventListener('message', (event) => {
      console.log('Received message:', event.data);
      this.messages.push(event.data);
      console.log(this.messages);
    });
    this.$socket.addEventListener('close', () => {
      console.log('Disconnected from server');
    });
  }
}).$mount('#app')
  