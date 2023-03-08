<template>
  <div id="bottom">
    <bottom-tile></bottom-tile>
  </div>

</template>

<script>
import bottomTile from "@/components/bottom-tile.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "bottom",
  components:{
    // eslint-disable-next-line vue/no-unused-components
    bottomTile
  }
}
</script>

<style scoped>
#bottom {
  position: absolute;
  width: 27%;
  height:6%;
  bottom:6%;
  right:37%;
  border: 1px solid gray;
  display: inline;
}
</style>