<template>
  <div id="app">
    <div class="background" >
      <div class="background-container">
      <!-- <img src="../../../public/img/table.jpg" class="background1"> -->
<!--      打出去的牌-->
      <div id="BO">
        <bottom-discard v-for="tile in bottomDiscardTiles" class="B_bottom" :key="tile" :tile="tile"></bottom-discard>
      </div>
      <div id="LE">
        <left-discard v-for="tile in leftDiscardTiles" class="B_left" :key="tile" :tile="tile"></left-discard>
      </div>
      <div id="RI">
        <right-discard v-for="tile in rightDiscardTiles" class="B_right" :key="tile" :tile="tile"></right-discard>
      </div>
      <div id="TO">
        <top-discard v-for="tile in frontDiscardTiles" class="B_top" :key="tile" :tile="tile"></top-discard>
      </div>

<!--      名字-->
      <div id="topName">
        <div id="NA">{{$store.state.front.name}}</div>
        <div id="score">100分</div>
      </div>
      <div id="bottomName">
        <div id="NA">{{$store.state.me.name}}</div>
        <div id="score">100分</div>
      </div>
      <div id="leftName">
        <div id="NA">{{$store.state.left.name}}</div>
        <div id="score">100分</div>
      </div>
      <div id="rightName">
        <div id="NA">{{$store.state.right.name}}</div>
        <div id="score">100分</div>
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
      <end></end>
    </div>
  </div>
  </div>
</template>

<script>
import end from "./components/end.vue";
import rightDiscard from "./components/right-discard.vue";
import topDiscard from "./components/top-discard.vue";
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
            // eslint-disable-next-line vue/no-unused-components
    rightDiscard,
        // eslint-disable-next-line vue/no-unused-components
    topDiscard,
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
    end


  },
  methods: {
    checkdata(data) {

      //websocket各种请求,和store.js耦合，get_me_id获取我的词句游戏的id,自己和别人摸牌,自己选择一个选择，获取分数，倒计时，退出
      //加入牌局，创建牌局
      //加入大厅
      //退出登录
      if (data.type === "init_info") {
        this.$store.dispatch("init_info",data);
      } 
      //自己摸牌
      else if (data.type === "draw_self") {
        this.$store.dispatch("draw_self",data);
      } 
      //别人摸牌
      else if (data.type === "draw_other") {
        this.$store.dispatch("draw_other",data);
      }
      //做出选择
       else if (data.type === "action_choose") {
        this.$store.dispatch("accept_action_choose",data);
      } 
      //得到分数
      else if (data.type === "get_point") {
        this.$store.dispatch("get_point",data);
      } 
      //倒计时
      else if (data.type === "countdown") {
        this.$store.dispatch("countdown",data);
      } 
      //玩家加入
      else if (data.type === "join") {
        this.$store.dispatch("join",data);
      }
      //打牌,肯定是其他人打牌
      else if(data.type ==="discard"){
        this.$store.dispatch("discard",data);
      }
      else if(data.type==="chi"||data.type==="pon"||data.type==="kan"){
        this.$store.dispatch("accept_options",data);
      }else if(data.type==="end"){
        this.$store.dispatch("end",data);
      }



      //可以准备
      else if (data.type === "can_ready") {
        this.ready_flag = true;
      } else if (data.type === "dismiss") {
        this.$router.push("/hall");
        alert("房间解散");
      }


    },
  },
  data() {
    return {
      ready_flag: false,
      countdown_flag: false,
      bottomDiscardTiles:[],
      leftDiscardTiles:[],
      rightDiscardTiles:[],
      frontDiscardTiles:[]
    }
  },
  computed:{
    start_flag(){
      return this.$store.state.started===1;
    },
    bottom_discard_tiles:{
      get() {
        return this.$store.state.me.discarded_card
      }
    },
    left_discard_tiles:{
      get() {
        return this.$store.state.left.discarded_card
      }
    },
    right_discard_tiles:{
      get() {
        return this.$store.state.right.discarded_card
      }
    },
    front_discard_tiles:{
      get() {
        return this.$store.state.front.discarded_card
      }
    }
  },
  watch: {
    start_flag: function (newValue, oldValue) {
      console.log(newValue + oldValue);
      if (newValue === true) {
        // do something with the new value
        document.getElementById("topName").style.display = "block";
        document.getElementById("leftName").style.display = "block";
        document.getElementById("rightName").style.display = "block";
        document.getElementById("bottomName").style.display = "block";
      }
    },
    bottom_discard_tiles:function (newValue, oldValue) {
      console.log(newValue + oldValue);
      this.bottomDiscardTiles=newValue;
    },
    left_discard_tiles:function (newValue, oldValue) {
      console.log(newValue + oldValue);
      this.leftDiscardTiles=newValue;
    },
    right_discard_tiles:function (newValue, oldValue) {
      console.log(newValue + oldValue);
      this.rightDiscardTiles=newValue;
    },
    front_discard_tiles:function (newValue, oldValue) {
      console.log(newValue + oldValue);
      this.frontDiscardTiles=newValue;
    },
  },

  mounted() {
    console.log(1);
    //自动发送websocket请求
    this.$root.$socket = new WebSocket(`ws://198.211.12.166:23333/ws/${window.localStorage.getItem("userId")}/${window.localStorage.getItem("token")}`);
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
  },


}
</script>

<style scoped>
.B_top{
  width: 15%;
  height: 36%;
}
.B_bottom{
  width: 15%;
  height: 36%;
  float: left;
}
.B_left{
  width:31%;
  height:15%;
}
.B_right{
  width:31%;
  height:15%;
}

#topName{
  color:rgb(206, 154, 93) ;
  display: none;
  /*  */
  background-image: url("../../../public/img/1234.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  font-weight: bold;
  width: 15%;
  height: 7.7%;
  top: 14%;
  right:20%;
}
#topName #NA{

  position: absolute;
  font-size: 13px;
  transform: translate(-50%,-50%);
  top:35%;
  left:50%;
}
#bottomName {
  color:rgb(206, 154, 93) ;
  font-size: large;
  display: none;
  font-weight: bold;
  /*  */
  background-image: url("../../../public/img/1234.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  width: 15%;
  height: 7.7%;
  bottom: 22%;
  left: 23%;
}
#bottomName #NA{
  position: absolute;
  font-size: 13px;
  transform: translate(-50%,-50%);
  top:35%;
  left:50%;

  /* background: rgba(76, 175, 80, 0.8); */
  /*  */
}
#leftName{
  display: none;
  color:rgb(206, 154, 93) ;
  /*  */
  background-image: url("../../../public/img/1234.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  font-weight: bold;
  width: 15%;
  height: 7.7%;
  top: 20%;
  left:14%;

}
#leftName #NA{
  position: absolute;
  font-size: 13px;
  transform: translate(-50%,-50%);
  top:35%;
  left:50%;
}
#rightName{
  color:rgb(206, 154, 93) ;
  display: none;
  /*  */
  position: absolute;
  background-image: url("../../../public/img/1234.png");
  background-size: contain;
  background-repeat: no-repeat;
  font-weight: bold;
  width: 15%;
  height: 7.7%;
  top: 64%;
  right:12.6%;
}
#rightName #NA{
  position: absolute;
  font-size: 13px;
  transform: translate(-50%,-50%);
  top:35%;
  left:50%;
}

#score{
  font-size: 10px;
  color:rgb(206, 154, 93) ;
  position: absolute;
  font-size: 10px;
  transform: translate(-50%,-50%);
  top:70%;
  left:50%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.background{
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  width: 100%;
  height: 100%;
  /* background-image: url('../../../public/img/table.jpg'); */
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transform-style: preserve-3d;
  background-color: black;
  /* transform: rotateX(30deg) rotateY(0deg) translateZ(0px);   */
}

.background-container{
  position: absolute;
  top: 50%;
  left: 50%;
  width:640px;
  height:538px;
  transform: translate(-50%, -50%);
  background-image: url('../../../public/img/table.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}

.background1{
  position: absolute;
  /* top: 0;
  left: 0; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 550px;
  /* overflow: hidden; */
}

#BO{
  position: absolute;
  float: left;
  bottom: 22.1%;
  right: 37%;
  width: 24%;
  height: 15.4%;
  
}
#TO{
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  top: 22.7%;
  right: 38%;
  width: 24%;
  height: 15.4%;
  
}
#LE{
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  width: 15.6%;
  height: 29%;
  top:35.6%;
  left:22.4%;
  
}
#RI{
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  width: 15.6%;
  height: 29%;
  top:32.6%;
  right:22.3%;
  
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
