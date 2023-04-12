<template>
  <div id="mid">
    <img id="yu" :src="require(`../../../../public/img/3/left.png`)">
    <div class="yuContainer">
      <img  class="yu" v-for="yu in $store.state.yu_array" :key="yu"  :src="require(`../../../../public/img/3/${yu}.png`)">
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mid",
  data(){
    return {
      src:"../../../../public/img/3/left.png"
    }
  }
}

</script>

<style scoped>
#mid{
  position: absolute;
  width: 24%;
  height: 23.9%;
  top:38.2%;
  left:37.8%;
  border: 1px solid gray;
  background-image: url("../../../../public/img/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}
#yu{
  position: absolute;
  left:38%;
  top:54%;
  width: 11%;
  height:10%;
}
.yuContainer{
  position: absolute;
  left:49%;
  top:55%;
  width: 16%;
  height:10%;
  border: 1px solid gray;
}
.yu{
  height: 100%;
  width: 50%;
  float: left;
  margin: -5%;
}

</style>
