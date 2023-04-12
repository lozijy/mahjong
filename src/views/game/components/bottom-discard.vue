<template>
  <div id="container">
    <img :src="url" id="body" />
  </div>
</template>

<script>
export default {
  name: "bottom-discard",
  props:{
    tile:{
      type:String,
      require:true
    }
  },
  data(){
    return{
      url: require(`../../../../public/img/2/${this.tile}.png`)
    }
  },
}
</script>

<style scoped>
#container {
  position: relative;

  background-image: url('../../../../public/img/2/hai2.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  float: left;
  border-right: 0.5px solid black;
}
#body{
  position: relative;
  left: 10%;
  top:1%;
  width: 60%;
  height: 80%;
  z-index:2;
  transform: rotateX(60deg);
  image-rendering: high-quality;
}
</style>