<template>
  <div id="right">
    <right-tile v-for="i in this.$store.state.right.number" :key="i"></right-tile>
  </div>
</template>

<script>
import rightTile from "@/components/right-tile.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "right",
  components:{
    rightTile
  }
}
</script>

<style scoped>
#right{
  position: absolute;
  width: 3%;
  height:30%;
  right:27%;
  top:20%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4% 0;

}
</style>