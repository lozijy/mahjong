<template>
  <div id="mid">
    <img id="yu" src="../../../../public/img/3/left.png">
    <div class="pointContainer">
      <img  class="point" v-for="point in $store.state.points" :key="point"  :src="require(`../../../../public/img/3/${point}.png`)">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mid",
  data(){
    return {

    }
  }
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
#yu{
  position: absolute;
  left:36%;
  top:55%;
  width: 11%;
  height:6%;
}
.pointContainer{
  position: absolute;
  left:50%;
  top:55%;
  width: 16%;
  height:7%;
  border: 1px solid gray;
}
.point{
  height: 100%;
  width: 50%;
  float: left;
  margin: -8%;
}

</style>
