<template>
  <div id="container">
    <img src="../../../../public/img/2/hai1.png" id="img">
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
  /* width: 29%;
  height: 17%; */
  /* background-image: url('../../../../public/img/2/hai1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain; */
  border: 0.5px solid black;
  float: right;
  background-attachment: fixed;
  /* display: inline-block; */
  /* padding: 0; */
  /* transform: rotate(90deg); */
}

#container img{
  display: block; /* 使图片成为块级元素，自动适应父元素大小 */
    max-width: 100%; /* 让图片宽度不超过容器的宽度 */
    height: auto; /* 高度自适应，保持图片的宽高比 */
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
  left: 30%;
  top:-10.2%;
  width: 49%;
  height: 60%;
  z-index:2;
  transform: rotateZ(90deg);
  image-rendering: auto;
}
</style>