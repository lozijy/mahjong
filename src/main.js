import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

var vm=new Vue({
  render: h => h(App),
  store,
  data(){
    return {
      messages:[],
    }
  },
  methods:{
    checkdata(data){
      if(data.type=="get_me_id"){
        this.$store.commit("get_me_id",data.player_id);
      }
      if(data.type=="draw_self"){
        this.$store.commit("draw_self",data.tile);
      }
      else if(data.type=="draw_other"){
        this.$store.commit("draw_other",data.player_id);
      }
      else if(data.type=="action_choose"){
        this.$store.commit("action_choose",data.action);
      }
      else if(data.type=="countdown"){
        this.$store.commit("countdown",data.time);
      }
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
      this.checkdata(JSON.parse(event.data));
    });
    this.$socket.addEventListener('close', () => {
      console.log('Disconnected from server');
    });
  }
}).$mount('#app')
console.log(vm);
