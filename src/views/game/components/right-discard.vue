<template>
  <div id="container">
    <img :src="url" id="body" />
  </div>
</template>

<script>
export default {
  name: "right-discard",
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
  width: 35%;
  height: 25%;
  background-image: url('../../../../public/img/2/hai1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 0.5px solid black;
  float: right;
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
  left: 30%;
  top:15%;
  width: 35%;
  height: 60%;
  z-index:2;
  transform: rotateZ(270deg);
  image-rendering: atuo;
}
</style>