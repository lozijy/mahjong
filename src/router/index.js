import game from "@/views/game/game.vue";
import login from "@/views/login/login.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import hello from "@/components/hello.vue";
Vue.use(VueRouter);
const routes=[
    {path:"/",redirect:"/login"},
    {path:"/login",component: login,meta:{isAuth:false}},
    {path:"/game",component:game,meta:{isAuth:true}},
    {path:"*",component:hello },
    {path:"/hall",component:hall,meta:{isAuth:true}}
]
// eslint-disable-next-line no-undef
var rou=new VueRouter({
    routes,
})

//路由守卫
rou.beforeEach((to,from,next)=>{

    //需要授权时
    if(to.meta.isAuth){
        // eslint-disable-next-line no-undef
        if(window.localStorage.getItem("flag")==="true"||window.localStorage.getItem("hall")==="true"){
            next();
        }else{
            next("/login");
        }
    }else{
        next();
    }
})

export default rou;

