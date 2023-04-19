<template>
  <div id="left">
    <left-tile v-for="i in this.$store.state.left.number" :key="i"></left-tile>
  </div>
</template>

<script>
import leftTile from "@/views/game/components/left-tile.vue";
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
  width: 7%;
  height:43.8%;
  left:6%;
  top:20.5%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4% 0;
}
</style>