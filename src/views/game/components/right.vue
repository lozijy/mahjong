<template>
  <div id="right">
    <right-tile v-for="i in this.$store.state.right.number" :key="i"></right-tile>
  </div>
</template>

<script>
import rightTile from "@/views/game/components/right-tile.vue";
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
  width: 7%;
  height:43.8%;
  right:6%;
  top:25.5%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4% 0;

}
</style>