<template>
  <div id="mid">
    <img id="yu" :src="require(`../../../../public/img/3/left.png`)">
    <div class="yuContainer">
      <img  class="yu" v-for="yu in $store.state.yu_array" :key="yu"  :src="require(`../../../../public/img/3/${yu}.png`)">
    </div>  
    <div class="top" v-if="this.$store.state.front.turn===1"></div>
    <div class="right" v-if="this.$store.state.right.turn===1"></div>
    <div class="left" v-if="this.$store.state.left.turn===1"></div>
    <div class="bottom" v-if="this.$store.state.me.turn===1"></div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mid",
  data(){
    return {
      src:"../../../../public/img/3/left.png"
    }
  },
  computed:{
    
  }
}

</script>

<style scoped>
#mid{
  position: absolute;
  width: 24%;
  height: 24%;
  top:38.2%;
  left:37.8%;
  
  background-image: url("../../../../public/img/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  z-index: -1;
}
#yu{
  position: absolute;
  left:38%;
  top:54%;
  width: 11%;
  height:10%;
}
.yuContainer{
  position: absolute;
  left:49%;
  top:55%;
  width: 16%;
  height:10%;
  
}
.yu{
  height: 100%;
  width: 50%;
  float: left;
  margin: -5%;
}

.top{
  position: absolute;
  top: 5.7%;
  left: 33%;
  height: 8.7%;
  width:34%;
  background-color: rgb(48, 48, 145);
  /* border: 1px solid rgb(16, 236, 30); */
}
.right{
  position: absolute;
  top: 29%;
  right: 12.3%;
  height: 42%;
  width:7.4%;
  background-color: rgb(48, 48, 145);
  /* border: 1px solid rgb(16, 236, 30); */
}
.left{
  position: absolute;
  top: 29%;
  left: 12.3%;
  height: 42%;
  width:7.4%;
  background-color: rgb(48, 48, 145);
  /* border: 1px solid rgb(16, 236, 30); */
}
.bottom{
  position: absolute;
  bottom: 5.4%;
  left: 33%;
  height: 8.2%;
  width:34%;
  background-color: rgb(48, 48, 145);
  /* border: 1px solid rgb(16, 236, 30); */
}

</style>
