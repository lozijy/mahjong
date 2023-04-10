<template>
  <img :src="url">
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "time",
  data(){
    return{
      url: require(`../../../../public/img/5/${this.$store.state.time}.png`)
    }
  },

}
</script>

<style scoped>
img{
  width: 6%;
  height: 100%;
  margin-right: 0px;
  margin-bottom: 5px;
  float: left;
  cursor: pointer;
  image-rendering: pixelated;
}
</style>