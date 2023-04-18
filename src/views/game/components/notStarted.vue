<template>
  <div class="container">
    <div class="font">等待开始</div>
    <div class="font">当前牌桌人数:{{$store.state.number+1}}</div>
    <div class="font">玩家列表</div>
    <div class="font" v-for="person in $store.state.people" :key="person">{{ person.name }}</div>
    <div  id="start" class="font" @click="start()" >{{msg}}</div>
    <!-- <div  id="start" class="font" @click="start()" :style="{ backgroundImage }"></div> -->
    <div id="countdown" class="font">准备倒计时:{{$store.state.time}}</div>
    <div id="already"></div>
    <div class="font_exit" id="exit" @click="exit()"></div>
  </div>
</template>

<script>
export default {
  name: "notStarted",
  props:{
    ready_flag:{
      type:Boolean,
      required: true // 是否必须传递
    },
  },
  methods:{
    start(){
      // this.msg = "√";
      // this.$data.backgroundImage = '../../../../public/img/register.png';
      // this.$set(this, 'backgroundImage', '../../../../public/img/register.png');
      // this.backgroundImage = "../../../../public/img/register.png"; 
      // console.log(document.getElementById("start"));
      this.exi.style.display = "none";
      this.countDown.style.display = "none";
      this.sta.style.display = "none";
      this.al.style.display="block"
      this.$root.$socket.send(JSON.stringify({
        "type":"ready"
      }));
    },
    exit(){
      this.$root.$socket.close();
      console.log(this.$store.state.table_code);
      this.$http.post('http://198.211.12.166:23333/exit', {
        table_code: this.$store.state.table_code,
        user_id: window.localStorage.getItem("userId"),
        token:window.localStorage.getItem("token")
      }).then((response)=> {
        console.log("接受数据");
        console.log(response);
        this.$store.state.table_code=0;
        this.$router.push("/hall");
      });


    }
  },
  data(){
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      // backgroundImage: "../../../../public/img/ready1.png"
      msg: ""
    }
  },
  computed:{
    start_flag(){
      return this.$store.state.started===1
    }
  },
  mounted() {
    this.exi=document.getElementById("exit");
    this.sta=document.getElementById("start");
    this.countDown = document.getElementById("countdown");
    this.al = document.getElementById("already");
  },
  watch:{
    ready_flag: function(newValue, oldValue) {
      console.log(newValue+oldValue);
      if(newValue===true) {
        // do something with the new value
        this.sta.style.display = "block";
        this.countDown.style.display="block";
        this.flag = false;
      }
    },
    start_flag: function(newValue, oldValue) {
      console.log(newValue+oldValue);
      if(newValue===true) {
        // do something with the new value
        document.getElementsByClassName("container")[0].style.display="none";
      }
    }
  },

}
</script>

<style scoped>
.container{
  display: block;
  background-image: url("../../../../public/img/player_info1.png");
  background-color: #5f525260;
  background-position: contain;
  background-size: contain;
  background-repeat: no-repeat;
  top:50%;
  left:50%;
  width: 42%;
  height: 60%;
  position: absolute;
  transform: translate(-50%,-50%);
  z-index: 10;
}
#start{
  display: none;
  /* border: 1px solid rgb(249, 247, 247); */
  cursor: pointer;
  position: absolute;
  background-image: url("../../../../public/img/ready1.png");
  background-size:contain;
  background-repeat: no-repeat;
  width:22%;
  height: 8%;
  top:85%;
  left:50%;
  transform: translate(-50%,-50%);
  transition: transform 0.2s ease-in-out;
}

#start:hover{
  transform: translate(-50%,-50%) scale(1.1);
}

#already{
  display: none;
  /* border: 1px solid rgb(249, 247, 247); */
  /* cursor: pointer; */
  position: absolute;
  background-image: url("../../../../public/img/have_ready.png");
  background-size:contain;
  background-repeat: no-repeat;
  width:22%;
  height: 8%;
  top:85%;
  left:50%;
  transform: translate(-50%,-50%);
  /* transition: transform 0.2s ease-in-out; */
}

#countdown{
  display: none;
}
#exit{
  /* border: 1px solid gray; */
  cursor: pointer;
  display: block;
  /* border: 1px solid rgb(249, 247, 247); */
  position: absolute;
  background-image: url("../../../../public/img/exit.png");
  background-size:contain;
  background-repeat: no-repeat;
  width:22%;
  height: 8%;
  top:95%;
  left:50%;
  transform: translate(-50%,-50%);
  transition: transform 0.2s ease-in-out;
}
#exit:hover{
  transform: translate(-50%,-50%) scale(1.1);
}
.font{
  font-size: 20px;
  position: relative;
  top:10px;
  color: rgb(206, 154, 93);
}

.font_exit{
  font-size: 20px;
  position: absolute;
  top:90%;
  left:50%;
  transform: translate(-50%,-50%);
  /* top:50px; */
  color: red;

}
</style>