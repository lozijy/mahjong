<template>


  <div class="hall">
  <div class="bg"></div>
  <img src="../../../public/img/hall/black.png">
  <div class="centered"><img src="../../../public/img/hall/border.png" class="centered"></div>
  <div class="title-window"><button>刷新</button></div>
  <div class="content-window">
    <house v-for="house in $store.state.house" :house="house" :key="house.number"></house>
  </div>

  </div>
</template>

<script>
import house from "@/views/hall/components/house.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "hall",
  components:{
    house
  }
}
</script>

<style scoped>
  /* 设置样式 */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* 隐藏滚动条 */
}
div.bg {
  background-image:url("../../../public/img/hall/indoor.jpg");
  background-position: center center;
  background-size: cover;
  /* 图片自适应 */
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  /* 将背景图片层级设为最低 */
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 转换位置以将元素置于页面中央 */
  width: 85%;
  height: 95%;
  /* 调整元素宽度以进行放大 */
  image-rendering: pixelated;
}
.title-window {
  position: absolute;
  top: 12%;
  left: 50%;
  bottom: -100px;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 7%;
  z-index: 0;
  background-image: url("../../../public/img/hall/title.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* background-color: aliceblue; */
}
.title-window button {
  position: relative;
  text-indent: -9999px;
  background-image: url("../../../public/img/hall/refresh.png");
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  top: 10%;
  left: 80%;
  width: 10%;
  height: 80%;
}
.title-window button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.content-window {
  position: absolute;
  top: 53%;
  left: 50%;
  bottom: -100px;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 70%;
  overflow: auto;
  z-index: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  /* padding-right: 5px; */
  /* background-color: aqua; */
}
/* 支持Webkit浏览器 */
.content-window::-webkit-scrollbar {
  width: 8px;
  /* 设置滚动条宽度 */
  position: right;
}
.content-window::-webkit-scrollbar-track {
  background: #666;
  /* 设置滚动条背景颜色 */
}
.content-window::-webkit-scrollbar-thumb {
  background-color: rgb(199, 160, 89);
  /* 设置滚动条拖动块颜色 */
}
/* 支持Edge,FireFox浏览器 */
.content-window {
  /* 设置滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: rgb(199, 160, 89) #666;
}



</style>