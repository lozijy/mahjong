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
  width: 25%;
  height: 35%;
}
.bottomContainer{
  position: absolute;
  bottom:5.5%;
  width:19.3%;
  right:6%;
  height: 19.3%;
  border: 1px solid gray;
}
.bottomContainer #body{

}
</style>