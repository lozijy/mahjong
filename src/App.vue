<template>
  <div id="app">
    <div id="background">
      <mid></mid>
      <top></top>
      <left></left>
      <right></right>
      <bottom></bottom>

      <left-container></left-container>
      <right-container></right-container>
      <top-container></top-container>
      <bottom-container></bottom-container>

      <button-container></button-container>
    </div>

  </div>
</template>

<script>
import mid from "@/components/mid.vue";
import top from "@/components/top.vue";
import topTile from "@/components/top-tile.vue";
import left from "@/components/left.vue";
import leftTile from "@/components/left-tile.vue";
import right from "@/components/right.vue";
import rightTile from "@/components/right-tile.vue";
import bottom from "@/components/bottom.vue";
import bottomTile from "@/components/bottom-tile.vue";

import leftContainer from "@/components/leftContainer.vue";
import rightContainer from "@/components/rightContainer.vue";
import topContainer from "@/components/topContainer.vue";
import bottomContainer from "@/components/bottomContainer.vue";

import buttonContainer from "@/components/buttonContainer.vue";
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    mid,
    // eslint-disable-next-line vue/no-unused-components
    top,
    // eslint-disable-next-line vue/no-unused-components
    topTile,
    // eslint-disable-next-line vue/no-unused-components
    left,
    // eslint-disable-next-line vue/no-unused-components
    leftTile,
    // eslint-disable-next-line vue/no-unused-components
    right,
    // eslint-disable-next-line vue/no-unused-components
    rightTile,
    bottom,
    // eslint-disable-next-line vue/no-unused-components
    bottomTile,

    leftContainer,
    rightContainer,
    topContainer,
    bottomContainer,

    buttonContainer

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#background{
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../public/img/table.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transform-style: preserve-3d;
  /* transform: rotateX(30deg) rotateY(0deg) translateZ(0px);   */
}
</style>
