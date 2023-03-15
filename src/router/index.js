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
    console.log("to");
    console.log(to);
    console.log(from);
    //任何人都可以进入/login
    if(to.path=="/login"){
        next();
        //进入login后删除cookie
        const expireDate = new Date("2020-01-01T00:00:00Z");
        const expireString=expireDate.toUTCString();
        document.cookie=`flag=1;path=/;expires=${expireString}`;
        document.cookie=`user_id=2;path=/;expires=${expireString}`;
        console.log("删除cookie");
    }
    //获取flag的cookie
    var cookies=document.cookie.split(";");
    for(var i=0;i<cookies.length;i++){
        var cookie=cookies[i];
        if(cookie.indexOf("flag=")!==-1){
            var cookieArr=cookie.split("=");
            var cookieValue=cookieArr[1];
            if(cookieValue==="success"){
                console.log("走");
                next();
            }else{
                console.log(1);
                this.$router.redirect("/login");
                next("/login")
            }
        }
    }
})
export default rou;