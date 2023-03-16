import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import axios from "axios"
Vue.config.productionTip = false
// 配置请求的根路径
axios.defaults.baseURL = '/api/'
// 挂载到原型对象之前 先设置拦截器 通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  // 为请求头对象添加Token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后都必须 return config
  return config
})
// 在 response 拦截器中， 隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  return config
})
// 原型上挂载axios， 所有组件都可以通过this.$http来请求
Vue.prototype.$http = axios;


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
