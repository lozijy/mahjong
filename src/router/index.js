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
export default rou;

//路由守卫
// rou.beforeEach((to,from,next)=>{
//     console.log("to");
//     console.log(to);
//     console.log(from);
//     next();
//     //任何人都可以进入/login
//     // if(to.path=="/login"){
//     //     next();
//     //     //进入login后删除cookie
//     //     const expireDate = new Date("2020-01-01T00:00:00Z");
//     //     const expireString=expireDate.toUTCString();
//     //     document.cookie=`flag=1;path=/;expires=${expireString}`;
//     //     document.cookie=`user_id=2;path=/;expires=${expireString}`;
//     //     console.log("删除cookie");
//     // }
//     // //需要授权时
//     // if(to.meta.isAuth){
//     //     if(localStorage.getItem("flag")==="true"){
//     //         console.log("go");
//     //         next();
//     //     }
//     // }else{
//     //     console.log("go")
//     //     next();
//     // }
// })
