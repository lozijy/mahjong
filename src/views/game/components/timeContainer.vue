<template>
  <div class="timeContainer">
    {{ $store.state.time }}
  </div>

</template>

<script>
export default {
  name: "timeContainer",
  data(){
    return{
      url: require(`../../../../public/img/5/${this.$store.state.time}.png`)
    }
  },
  computed:{
    time(){
      console.log("time");
      return this.$store.state.time
    },
    countdown_flag(){
      return this.$store.state.started===1
    },
    turn(){
      return this.$store.state.me.turn;
    }
  },
  watch:{
    time: function (newValue,oldValue){
      console.log(newValue,oldValue)
      new Audio("../../../../public/audio/countdown5.mp3").play();
      if(newValue===0){
        document.getElementById("timeContainer").style.display="none";
      }
    },
    countdown_flag: function (newValue,oldValue){
      console.log(newValue,oldValue)
      if(this.countdown_flag===true){
        document.getElementById("timeContainer").style.display="block";
      }
    },
    turn: function (newValue,oldValue){
      console.log(newValue,oldValue)
      if(newValue===1){
        document.getElementById("timeContainer").style.display="block";
      }else{
        document.getElementById("timeContainer").style.display="none";
      }
    },
  }
}
</script>

<style scoped>
.timeContainer{
  display: none;
  position: absolute;
  width: 6%;
  height: 10%;
  right:30%;
  bottom: 30%;
  border: 1px solid gray;
  font-size: 30px;
  color: crimson;
}
img{
  width: 40%;
  height: 40%;
  margin-right: 0px;
  margin-bottom: 5px;
  float: left;
  cursor: pointer;
  image-rendering: auto;
}
</style>