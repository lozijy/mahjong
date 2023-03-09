<template>
  <div id="left">
    <left-tile ></left-tile>
  </div>
</template>

<script>
import leftTile from "@/components/left-tile.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "left",
  components:{
    leftTile
  }
}
</script>

<style scoped>
/* 左右 */
#left{
  position: absolute;
  width: 3%;
  height:30%;
  left:28%;
  top:20%;
  border: 1px solid gray;
  display: inline-block;
  padding: 4% 0;
}
</style>