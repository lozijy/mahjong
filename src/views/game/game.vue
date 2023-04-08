<template>
  <div id="app">
    <div id="background">
<!--      打出去的牌-->
      <div id="BO">
        <img v-for="card in $store.state.me.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>
      <div id="LE">
        <img v-for="card in $store.state.left.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>
      <div id="RI">
        <img v-for="card in $store.state.right.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>
      <div id="TO">
        <img v-for="card in $store.state.front.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>
<!--      桌子-->
      <mid></mid>
<!--      上下左右-->
      <top></top>
      <left></left>
      <right></right>
      <bottom></bottom>
<!--      放搁置的牌-->
      <left-container></left-container>
      <right-container></right-container>
      <top-container></top-container>
      <bottom-container></bottom-container>
<!--放置按钮-->
      <button-container></button-container>
<!--倒计时-->
      <time-container></time-container>

      <not-started></not-started>
    </div>

  </div>
</template>

<script>
import mid from "@/views/game/components/mid.vue";
import top from "@/views/game/components/top.vue";
import topTile from "@/views/game/components/top-tile.vue";
import left from "@/views/game/components/left.vue";
import leftTile from "@/views/game/components/left-tile.vue";
import right from "@/views/game/components/right.vue";
import rightTile from "@/views/game/components/right-tile.vue";
import bottom from "@/views/game/components/bottom.vue";
import bottomTile from "@/views/game/components/bottom-tile.vue";

import leftContainer from "@/views/game/components/leftContainer.vue";
import rightContainer from "@/views/game/components/rightContainer.vue";
import topContainer from "@/views/game/components/topContainer.vue";
import bottomContainer from "@/views/game/components/bottomContainer.vue";

import buttonContainer from "@/views/game/components/buttonContainer.vue";
import TimeContainer from "@/views/game/components/timeContainer.vue";

import notStarted from "@/views/game/components/notStarted.vue";
export default {
  name: 'App',
  //解决浏览器前进后退不会重新渲染的问题
  // beforeRouteUpdata(to,from,next){
  //
  // },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    notStarted,

    TimeContainer,
    // eslint-disable-next-line vue/no-unused-components
    mid,
    // eslint-disable-next-line vue/no-unused-components
    top,
    // eslint-disable-next-line vue/no-unused-components
    topTile,
    // eslint-disable-next-line vue/no-unused-components
    left,
    // eslint-disable-next-line vue/no-unused-components
    leftTile,
    // eslint-disable-next-line vue/no-unused-components
    right,
    // eslint-disable-next-line vue/no-unused-components
    rightTile,
    bottom,
    // eslint-disable-next-line vue/no-unused-components
    bottomTile,

    leftContainer,
    rightContainer,
    topContainer,
    bottomContainer,

    buttonContainer,




  },
  methods:{
    checkdata(data){

      //websocket各种请求,和store.js耦合，get_me_id获取我的词句游戏的id,自己和别人摸牌,自己选择一个选择，获取分数，倒计时，退出
      //加入牌局，创建牌局
      //加入大厅
      //退出登录
      if(data.type==="get_me_id"){
        this.$store.commit("get_me_id",data.player_id);
      }
      if(data.type==="draw_self"){
        this.$store.commit("draw_self",data.tile);
        this.$store.commit("my_sort");
      }
      else if(data.type==="draw_other"){
        this.$store.commit("draw_other",data.player_id);
      }
      else if(data.type==="action_choose"){
        this.$store.commit("action_choose",data.action);
        this.$store.commit("my_sort");
      }      
      else if(data.type==="get_point"){
        this.$store.commit("get_point",data.point);
      }
      else if(data.type==="countdown"){
        this.$store.commit("countdown",data.time);
      }
      else if(data.type === "exit"){
        this.$root.$socket.send('exit');
      }
      else if(data.type==="join"){
        this.$root.$socket.send('join');
      }
      else if(data.type==="create"){
        this.$root.$socket.send("create");
      }
      else if(data.type==="hall"){
        this.$root.$socket.send("hall");
      }
      else if(data.type==="logout"){
        this.$root.$socket.send("logout");
      }


    }
  },
  mounted() {
    //自动发送websocket请求
      this.$root.$socket=new WebSocket(`ws://198.211.12.166:23333/ws/${window.localStorage.getItem("userId")}/${window.localStorage.getItem("token")}`);
      this.$root.$socket.addEventListener('open', () => {
        console.log('Connected to server');
      });
      this.$root.$socket.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
        this.checkdata(JSON.parse(event.data));
      });
      this.$root.$socket.addEventListener('close', (a) => {
        console.log('Disconnected from server');
        console.log(a);
      });
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#background{
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../../public/img/table.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transform-style: preserve-3d;
  /* transform: rotateX(30deg) rotateY(0deg) translateZ(0px);   */
}
#BO{
position: absolute;
  bottom: 22%;
  right: 44%;
  width: 12%;
  height: 16%;
  border: 1px solid gray;
}
#TO{
  position: absolute;
  top: 22%;
  right: 44%;
  width: 12%;
  height: 16%;
  border: 1px solid gray;
}
#LE{
  position: absolute;
  width: 6%;
  height: 20%;
  top:40%;
  left:37%;
  border: 1px solid gray;
}
#RI{
  position: absolute;
  width: 6%;
  height: 20%;
  top:40%;
  right:37%;
  border: 1px solid gray;
}
#BO img{
  float: left;
  height: 40%;
  weight: 40%;
}
#TO img{
  float: right;
  height: 40%;
  weight: 40%;
}
#LE img{
  float: top;
  height: 40%;
  weight: 40%;
}
#RI img{
  vertical-align: bottom;
  height: 40%;
  weight: 40%;

}
</style>
