<template>
  <div class="rightContainer">
    <right-discard v-for="tile in $store.state.right.discarded_card" class="B" :key="tile" :tile="tile"></right-discard>
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
  position: absolute;
  border: 1px solid gray;
  width:19.3%;
  height: 19.3%;
  right:6%;
  top:6%;

}

</style>