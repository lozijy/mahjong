<template>
  <div id="right">
    <right-tile ></right-tile>
  </div>
</template>

<script>
import rightTile from "@/components/right-tile.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "right",
  components:{
    rightTile
  }
}
</script>

<style scoped>
#right{
  position: absolute;
  width: 3%;
  height:30%;
  right:27%;
  top:20%;
  border: 1px solid gray;
  display: inline-block;
  padding: 4% 0;

}
</style>