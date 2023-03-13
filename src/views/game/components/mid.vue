<template>
  <div id="mid">
    <img src="../../../../public/img/3/left.png">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mid"
}
</script>

<style scoped>
#mid{
  position: absolute;
  width: 10%;
  height: 24%;
  top:38%;
  left:45%;
  border: 1px solid gray;
  background-image: url("../../../../public/img/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
#mid img{
  position: absolute;
  width: 11%;
  height:6%;
  left:36%;
  top:55%;
}


</style>