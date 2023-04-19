<template>
  <div class="topContainer">
    <top-discard v-for="tile in this.$store.state.front.open" :key="tile" class="B" :tile="tile"></top-discard>
  </div>
</template>

<script>
import topDiscard from "@/views/game/components/top-discard.vue";
export default {
  name: "topContainer",
  components:{
    topDiscard
  }
}
</script>

<style scoped>
.topContainer{
  position: absolute;
  width:62.3%;
  left:6%;
  top:6%;
  height: 7%;
  
  z-index: -1;
}
.B{
  width:6%;
  height:86%;
}

</style>