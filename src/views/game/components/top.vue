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
  width: 27%;
  height:6%;
  top:5%;
  right:35%;
  border: 1px solid gray;
  display: inline;
}
</style>