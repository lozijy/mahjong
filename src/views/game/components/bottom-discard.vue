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
  position: absolute;

  background-image: url('../../../../public/img/2/hai2.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  float: left;
  border-right: 0.3px solid black;
}
#body{
  position: absolute;
  left: 17%;
  top:-30%;
  width: 60%;
  height: 130%;
  z-index:2;
  transform: rotateX(60deg);
  /* image-rendering: high-quality; */
  image-rendering: auto;
}
</style>