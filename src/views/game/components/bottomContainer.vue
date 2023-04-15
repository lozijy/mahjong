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
  width: 16%;
  height: 25%;
  float: right;
  transform: rotateX(180deg);
  /* top:-10%; */
  /* left: 40%; */
  /* display: grid; */
}
.bottomContainer{
  position: absolute;
  bottom:5.5%;
  width:19.3%;
  right:6%;
  height: 19.3%;
  /* height:105.167px; */
  border: 1px solid gray;
  transform: rotateX(180deg);
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