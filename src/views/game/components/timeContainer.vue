<template>
  <div class="timeContainer">
    {{ ti }}
  </div>

</template>

<script>
export default {
  name: "timeContainer",
  data(){
    return{
      ti:""
    }
  },
  computed:{
    time(){
      return this.$store.state.time
    },
    // countdown_flag(){
    //   return this.$store.state.started===1
    // },
    turn(){
      return this.$store.state.me.turn===1;
    }
  },
  watch:{
    time: function (newValue,oldValue){
      console.log(newValue,oldValue);
        this.ti=newValue;
        new Audio("../../../../public/audio/countdown5.mp3").play();
    },
    turn:function (newValue,oldValue){
        console.log(newValue,oldValue);
        if(newValue===false){
          this.ti="";
        }
      }
    }
    // ti:function(newValue,oldValue){ 
    //   console.log(newValue,oldValue);
    //   if(newValue===0){
    //     document.getElementsByClassName("timeContainer")[0].style.display="none";
    //   }
    // },
    // countdown_flag: function (newValue,oldValue){
    //   console.log(newValue,oldValue)
    //   if(this.countdown_flag===true){
    //     document.getElementsByClassName("timeContainer")[0].style.display="block";
    //   }
    // },
    // turn: function (newValue,oldValue){
    //   console.log(newValue,oldValue)
    //   if(newValue===true){
    //     document.getElementsByClassName("timeContainer")[0].style.display="block";
    //   }else{
    //     document.getElementsByClassName("timeContainer")[0].style.display="none";
    //   }
    // },
  
}
</script>

<style scoped>
.timeContainer{
  display: block;
  position: absolute;
  width: 6%;
  height: 6%;
  right:30%;
  bottom: 23%;
  border: 1px solid gray;
  font-size: 30px;
  color: rgb(206, 154, 93);
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