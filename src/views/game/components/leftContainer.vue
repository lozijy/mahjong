<template>
  <div class="leftContainer">
    <left-discard v-for="tile in $store.state.left.open" class="B" :key="tile" :tile="tile"></left-discard>
  </div>


</template>

<script>
import leftDiscard from "@/views/game/components/left-discard.vue";
export default {
  name: "leftContainer",
  components:{
    leftDiscard
  }
}
</script>

<style scoped>
.leftContainer{
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  border: 1px solid gray;
  width:7%;
  height: 62.3%;
  left:6%;
  bottom: 5.5%;
  z-index: -1;
}
.B{
  width:73%;
  height:6%;
}



</style>