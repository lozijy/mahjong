<template>
  <div id="top">
    <top-tile v-for="i in this.$store.state.front.number" :key="i"></top-tile>
  </div>
</template>

<script>
import topTile from "@/views/game/components/top-tile.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "top",
  components:{
    topTile
  }
}
</script>

<style scoped>
#top{
  position: absolute;
  width: 53%;
  height:7%;
  top:6%;
  right:20.4%;
  
  display: inline;
}
</style>