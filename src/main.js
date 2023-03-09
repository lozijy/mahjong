import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import store from './store'

Vue.config.productionTip = false
const socket = io('http://localhost:8080');

new Vue({
  render: h => h(App),
  store,
  created(){
    this.$socket=socket;
    this.$socket.on("connect",()=>{
      console.log("connected!");
    })
    this.$socket.on("message",(data)=>{
      console.log(data);
    });
    this.$socket.emit('message', 'Hello, server!');

  }
}).$mount('#app')
