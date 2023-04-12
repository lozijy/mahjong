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
  width:8%;
  left:28%;
  top:5%;
  height: 15%;
  border: 1px solid gray;
}

</style>