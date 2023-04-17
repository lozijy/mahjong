<template>
  <div class="buttonContainer">
      <img v-for="choice in $store.state.options"  :key="choice.action" @click="choose(choice)" :src="require(`../../../../public/img/4/${choice.action}.png`)" >
      <div id="chiContainer">
        <button v-for="chi in $store.state.chi" :key="chi" @click="chi_func(chi)">{{ chi.tiles[0] }}{{ chi.tiles[1] }}</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "buttonContainer",
  data(){
    return{
      number:this.$refs,
    }
  },
  methods:{
    choose(choice){
      if(choice.action!=="chi"){
      choice.type=choice.action;
      //向后端发送
      this.$root.$socket.send(JSON.stringify(choice));
      this.$store.dispatch("action_choose");

      }else{
        document.getElementById("chiContainer").style.display="inline";
      }
    },
    chi_func(chi){
      //向后端发送
      this.$root.$socket.send(JSON.stringify(chi));
      this.$store.dispatch("action_choose");
      document.getElementById("chiContainer").style.display="none";
    }
  },
  
  computed:{
      flag:function(){ return this.number.chi;}
  },
  mounted() {
    this.$store.commit("chi");
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
#chiContainer{
  display: none;
  position: absolute;
  width: 80%;
  height:100%;
  bottom: 100%;
  right:10%;
  border: 1px solid gray;
}

</style>