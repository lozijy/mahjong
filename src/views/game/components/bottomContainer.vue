<template>
  <div class="bottomContainer">
    <bottom-discard v-for="tile in this.$store.state.me.open" :key="tile" class="B" :tile="tile"></bottom-discard>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import bottomDiscard from "@/views/game/components/bottom-discard.vue";
export default {
  name: "bottomCOntainer",
  components:{
    bottomDiscard
  }
}
</script>

<style scoped>
.B{
  bottom: 3%;
  width: 6%;
  height: 86%;
  float: right;
  transform: rotateX(180deg);
  /* top:-10%; */
  /* left: 40%; */
  /* display: grid; */
}
.bottomContainer{
  position: absolute;
  bottom:5.5%;
  width:62.3%;
  right:6%;
  height: 6%;
  /* height:105.167px; */
  border: 1px solid gray;
  transform: rotateX(180deg);
  z-index: -1;
  /* overflow: auto; */
}
/* .bottomContainer::after {
    content: "";
    display: table;
    clear: both;
} */

.bottomContainer #body{

}
</style>