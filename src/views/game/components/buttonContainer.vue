<template>
  <div class="buttonContainer">
    <img v-for="choice in $store.state.options" :key="choice.action" @click="choose(choice)" :src="require(`../../../../public/img/4/${choice.action}.gif`)">
  </div>
</template>

<script>
export default {
  name: "buttonContainer",
  methods:{
    choose(action){
      console.log(action);
      //清空
      this.$store.commit("clear_options");
    }
  }
}
</script>

<style scoped>
.buttonContainer{
  position: absolute;
  width: 30%;
  height:10%;
  bottom: 11%;
  right:35%;
  border: 1px solid gray;
}
.buttonContainer img{
  float: left;
  width: 20%;
  height: 70%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.buttonContainer img:hover{
  transform: scale(1.2);
}

</style>