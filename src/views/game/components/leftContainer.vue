<template>
  <div class="leftContainer">
    <left-discard v-for="tile in $store.state.left.discarded_card" class="B" :key="tile" :tile="tile"></left-discard>
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
  position: absolute;
  border: 1px solid gray;
  width:7%;
  height: 15%;
  left:28%;
  bottom: 6%;

}
</style>