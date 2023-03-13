import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"

Vue.config.productionTip = false

var vm=new Vue({
  render: h => h(App),
  store,
  router,

  data(){
    return {
      messages:[],
    }
  },
  methods:{

  }
}).$mount('#app')
console.log(vm);
