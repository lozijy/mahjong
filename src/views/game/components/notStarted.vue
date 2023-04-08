<template>
  <div class="container">
    <div class="font">等待开始</div>
    <div class="font">当前人数:</div>
    <div class="font">xx</div>
    <div  id="start" class="font" @click="start()">{{msg}}</div>
    <div class="font" id="exit" @click="exit()">退出</div>
  </div>
</template>

<script>
export default {
  name: "notStarted",
  methods:{
    start(){
      this.msg="✓";
      this.exi.style.display = "none";
      this.$root.$socket.send('ready to start');
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

      });
      this.$store.state.table_code=0;
      this.$router.push("/hall");

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
  },
}
</script>

<style scoped>
.container{
  background-color: #00000060;
  width: 20%;
  height: 60%;
  position: absolute;
  top:30%;
  left: 40%;
  border: 70px;
}
#start{
  border: 1px solid gray;
  cursor: pointer;
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