<template>
  <div class="rightContainer">
    <right-discard v-for="tile in $store.state.right.open" class="B" :key="tile" :tile="tile"></right-discard>
  </div>
</template>

<script>
import rightDiscard from "@/views/game/components/right-discard.vue";
export default {
  name: "rightContainer",
  components:{
    rightDiscard
  }
}
</script>

<style scoped>
.rightContainer{
  display: flex;
  flex-direction: column;
  position: absolute;
  
  width:7%;
  height: 62.3%;
  right:6%;
  top:6%;
  z-index: -1;

}
.B{
  width:73%;
  height:6%;
}

</style>