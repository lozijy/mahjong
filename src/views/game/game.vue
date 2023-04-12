<template>
  <div id="app">
    <div id="background">
<!--      打出去的牌-->
      <div id="BO">
        <bottom-discard v-for="tile in $store.state.me.discarded_card" class="B" :key="tile" :tile="tile"></bottom-discard>
      </div>
      <div id="LE">
        <left-discard v-for="tile in $store.state.left.discarded_card" class="B" :key="tile" :tile="tile"></left-discard>
      </div>
      <div id="RI">
        <img v-for="card in $store.state.right.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>
      <div id="TO">
        <img v-for="card in $store.state.front.discarded_card" :key="card" :src="require(`../../../public/img/1/${card}.gif`)">
      </div>

<!--      名字-->
      <div id="topName">
        <div id="NA">lozijy</div>
        <div >9024分</div>
      </div>
      <div id="bottomName">
        <div id="NA">人机求轻虐~</div>
        <div >9024分</div>
      </div>
      <div id="leftName">
        <div id="NA">打我啊笨蛋啊啊</div>
        <div >9024分</div>
      </div>
      <div id="rightName">
        <div id="NA">?</div>
        <div >9024分</div>
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

      <not-started :ready_flag="ready_flag"></not-started>
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
import bottomDiscard from "@/views/game/components/bottom-discard.vue";
import LeftDiscard from "@/views/game/components/left-discard.vue";
export default {
  name: 'App',
  //解决浏览器前进后退不会重新渲染的问题
  // beforeRouteUpdata(to,from,next){
  //
  // },
  components: {
    LeftDiscard,
    bottomDiscard,
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
      if(data.type==="init_info"){
          //开始游戏
          this.$store.commit("start");
          this.$store.commit("init",data.data)

        }
      else if(data.type==="draw_self"){
        this.$store.commit("draw_self",data.data.tile);
        this.$store.commit("my_sort");
        //修改余
        this.$store.commit("yu");
      }
      else if(data.type==="draw_other"){
        this.$store.commit("draw_other",data.data.player_index);
        //修改余
        this.$store.commit("yu");
      }
      else if(data.type==="action_choose"){
        this.$store.commit("action_choose",data.data.action);
        this.$store.commit("my_sort");
      }      
      else if(data.type==="get_point"){
        this.$store.commit("get_point",data.point);
      }
      else if(data.type==="countdown"){
        if(this.$store.state.started===true){
          this.countdown_flag=true;
        }
        this.$store.commit("countdown",data.data.count);
      }
      else if(data.type==="join"){
        this.$store.commit("join",data.data);
      }


      //可以准备
      else if(data.type==="can_ready"){
        this.ready_flag=true;
      }
      else if(data.type==="dismiss"){
        this.$router.push("/hall");
        alert("房间消失");
      }

    },
  },
  data(){
    return{
      ready_flag:false,
      countdown_flag:false

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

<style scoped>
.B{
  width: 15%;
  height: 30%;
}

#topName{
  border: 1px solid gray;
  position: absolute;
  width: 7%;
  height: 6%;
  top: 12%;
  right:38%;
}
#topName #NA{
  font-size: 10px;
  background: rgba(76, 175, 80, 0.8);
  border: 1px solid gray;
}
#bottomName {
  border: 1px solid gray;
  position: absolute;
  width: 7%;
  height: 6%;
  bottom: 22%;
  left: 30%;
}
#bottomName #NA{
  font-size: 10px;
  background: rgba(76, 175, 80, 0.8);
  border: 1px solid gray;
}
#leftName{
  border: 1px solid gray;
  position: absolute;
  width: 7%;
  height: 6%;
  top: 20%;
  left:32%;

}
#leftName #NA{
  font-size: 10px;
  border: 1px solid gray;
  background: rgba(76, 175, 80, 0.8);
}
#rightName{
  border: 1px solid gray;
  position: absolute;
  width: 7%;
  height: 6%;
  top: 20%;
  right:30%;
}
#rightName #NA{
  font-size: 10px;
  background: rgba(76, 175, 80, 0.8);
}
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
