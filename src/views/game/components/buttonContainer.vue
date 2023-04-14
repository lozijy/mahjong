<template>
  <div class="buttonContainer">
    <img v-for="choice in $store.state.options" :key="choice.action" @click="choose(choice)" :src="require(`../../../../public/img/4/${choice.action}.png`)">
  </div>
</template>

<script>
export default {
  name: "buttonContainer",
  methods:{
    choose(choice){
      console.log(choice);
      choice.type=choice.action;
      //向后端发送
      this.$root.$socket.send(JSON.stringify(choice));
      //不能打牌
      this.$store.commit("draw_flag",false);
      //清空
      this.$store.commit("clear_options");
      //排序
      this.$store.commit("my_sort");
    }
  }
}
</script>

<style scoped>
.buttonContainer{
  position: absolute;
  width: 49%;
  height:9.4%;
  bottom: 12.6%;
  right:25.4%;
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