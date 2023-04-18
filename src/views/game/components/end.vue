<template>
    <div class="container">
      <div class="font">游戏结束</div>
      <div class="font" v-if="endType==='ron'">结局:荣和</div>
      <div class="font" v-if="endType==='zimo'">结局:自摸</div>
      <div class="font" v-if="endType==='draw_end'">结局:荒牌流局</div>
      <div class="font" v-if="endType!=='draw_end'">赢家:{{ Winner }}</div>
      <div class="font" v-if="endType!=='draw_end'">输家:</div>
      <div class="font" v-for="(player,index) in Loser" :key="index">{{ player }}</div>
      <div class="font" v-if="endType!=='draw_end'">番型:</div>
      <div class="font" v-for="(fan,index) in Attribute" :key="index" >{{ fan }}</div>
      <div class="font" v-if="endType!=='draw_end'">成绩:{{ Score }}</div>
      <!-- <div  id="start" class="font" @click="start()" :style="{ backgroundImage }"></div> -->
      <div class="font_exit" id="exit" @click="exit()"></div>
    </div>
  </template>
  
  <script>
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
    name: "end",
    methods:{
      exit(){
        this.$store.state.table_code=0;
        this.$store.state.people=[];
        this.$store.dispatch("clear_end_info");
        this.$router.push("/hall");
      }
    },
    data(){
      return {
        // eslint-disable-next-line vue/no-dupe-keys
        // backgroundImage: "../../../../public/img/ready1.png"
        msg: "",
        flag:false,
        endType:"",
        Winner:"",
        Loser:[],
        Attribute:[],
        Score:[],
      }
    },
    computed:{
      end_flag(){
        return this.$store.state.ended===1;
      },
      end_type(){
        return this.$store.state.end_type;
      },
      winner(){
        return this.$store.state.winner;
      },
      loser(){
        return this.$store.state.loser;
      },
      attribute(){
        return this.$store.state.attribute;
      },
      score(){
        return this.$store.state.score;
      },
    },
    watch:{
      flag:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        if(this.flag===true){
          document.getElementsByClassName("container")[1].style.display="block";
        }
      },
        end_flag: function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.flag=newValue;
      },
      end_type:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.endType=newValue;
      },
      winner:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.Winner=newValue;
      },
      loser:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.Loser=newValue;
      },
      attribute:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.Attribute=newValue;
      },
      score:function(newValue, oldValue) {
        console.log(newValue+oldValue);
        this.Score=newValue;
      },
    },
  
  }
  </script>
  
  <style scoped>
  .container{
    display: none;
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
    top:90%;
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