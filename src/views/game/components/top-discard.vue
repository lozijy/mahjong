<template>
  <div id="container">
    <img :src="url" id="body" />
  </div>
</template>

<script>
export default {
  name: "top-discard",
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
  /* width: 40%;
  height: 25%; */
  background-image: url('../../../../public/img/2/hai2.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-right: 0.5px solid black;
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
  left: 17%;
  top:3%;
  width: 70%;
  height: 70%;
  z-index:2;
  transform: rotateZ(180deg);
  image-rendering: auto;
}

</style>