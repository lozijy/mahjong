import game from "@/views/game/game.vue";
import login from "@/views/login/login.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import hello from "@/components/hello.vue";
Vue.use(VueRouter);
const routes=[
    {path:"/",redirect:"/login"},
    {path:"/login",component: login},
    {path:"/game",component:game},
    {path:"*",component:hello }
]
// eslint-disable-next-line no-undef
var rou=new VueRouter({
    routes,
})
rou.beforeEach((to,from,next)=>{
    console.log(typeof (to));
    console.log(from);
    next();
    // if((to.path!=="/login"||to.path!=="/")&&document.cookie.flag!==true){
    //     next("/login");
    // }else{
    //     next();
    // }
})
export default rou;