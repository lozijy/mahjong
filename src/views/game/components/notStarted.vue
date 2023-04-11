<template>
  <div class="container">
    <div class="font">等待开始</div>
    <div class="font">当前人数:{{$store.state.number}}</div>
    <div class="font">玩家列表</div>
    <div  id="start" class="font" @click="start()">{{msg}}</div>
    <div id="countdown" class="font">准备倒计时:{{$store.state.countdown}}</div>
    <div class="font" id="exit" @click="exit()">退出</div>
  </div>
</template>

<script>
export default {
  name: "notStarted",
  props:{
    ready_flag:{
      type:Boolean,
      required: true // 是否必须传递
    }
  },
  methods:{
    start(){
      this.msg="✓";
      this.exi.style.display = "none";
      this.countDown.style.display="none";
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
      msg: "准备开始"
    }
  },

  mounted() {
    this.exi=document.getElementById("exit");
    this.sta=document.getElementById("start");
    this.countDown=document.getElementById("countdown");
  },
  watch:{
    ready_flag: function(newValue, oldValue) {
      console.log(newValue+oldValue);
      if(newValue==true) {
        // do something with the new value
        this.sta.style.display = "block";
        this.countDown.style.display="block";
        this.flag = false;
      }
    }
  },

}
</script>

<style scoped>
.container{
  display: none;
  background-color: #00000060;
  width: 20%;
  height: 60%;
  position: absolute;
  top:30%;
  left: 40%;
  border: 70px;
}
#start{
  display: none;
  border: 1px solid gray;
  cursor: pointer;
}
#countdown{
  display: none;
}
#exit{
  border: 1px solid gray;
  cursor: pointer;
}
.font{
  font-size: 60px;
  position: relative;
  top:50px;
  color: red;
}

</style>