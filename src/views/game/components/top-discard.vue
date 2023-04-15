<template>
  <div id="container">
    <img src="../../../../public/img/2/hai2.png" id="img">
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
  position: relative;
  /* top:-10%; */
  /* width: 40%;
  height: 25%; */
  /* background-image: url('../../../../public/img/2/hai2.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain; */
  border-right: 0.5px solid black;
  float: left;
}

#container img{
  display: block; /* 使图片成为块级元素，自动适应父元素大小 */
    max-width: 100%; /* 让图片宽度不超过容器的宽度 */
    /* height: auto; 高度自适应，保持图片的宽高比 */
    /* border: 1px solid #000; 边框样式，可根据需要自定义 */
    box-sizing: border-box; /* 边框计入盒模型，保持边框和容器边缘对齐 */
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
  left: 19%;
  top:1%;
  width: 70%;
  height: 76%;
  z-index:2;
  transform: rotateZ(180deg);
  image-rendering:auto;
}

</style>