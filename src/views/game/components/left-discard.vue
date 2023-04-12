<template>
  <div id="container">
    <img :src="url" id="body" />
  </div>
</template>

<script>
export default {
  name: "left-discard",
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
  width: 35%;
  height: 25%;
  background-image: url('../../../../public/img/2/hai1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 0.5px solid black;
  float: right;
  background-attachment: fixed;
  /* transform: rotate(90deg); */
}
#body{
  /*position: absolute;*/
  /*left: 20%;*/
  /*top:1%;*/
  /*width: 60%;*/
  /*height: 80%;*/
  /*z-index:2;*/
  /*transform: rotateY(90deg);*/
  position: absolute;
  left: 33%;
  top:13%;
  width: 35%;
  height: 60%;
  z-index:2;
  transform: rotateZ(90deg);
  image-rendering: auto;
}
</style>