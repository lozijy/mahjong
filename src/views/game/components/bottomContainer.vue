<template>
  <div class="bottomContainer">
    <bottom-discard class="B" :tile="'1s'"></bottom-discard>
    <bottom-discard class="B" :tile="'1s'"></bottom-discard>
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
  bottom:6%;
  width:7%;
  right:28%;
  height: 18%;
  border: 1px solid gray;
}
.bottomContainer #body{

}
</style>