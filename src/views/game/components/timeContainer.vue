<template>
  <div class="timeContainer">
    <time></time>
    <img :src="url">
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
  watch:{
    time: function (newValue,oldValue){
      console.log(newValue,oldValue)
      new Audio("../../../public/audio.countdown5.mp3").play();
    }
  }
}
</script>

<style scoped>
.timeContainer{
  position: absolute;
  width: 6%;
  height: 10%;
  right:30%;
  bottom: 30%;
  border: 1px solid gray;
}
img{
  width: 40%;
  height: 40%;
  margin-right: 0px;
  margin-bottom: 5px;
  float: left;
  cursor: pointer;
  image-rendering: pixelated;
}
</style>