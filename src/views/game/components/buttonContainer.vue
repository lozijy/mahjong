<template>
  <div class="buttonContainer">
      <img v-for="choice in options"  :key="choice.action" @click="choose(choice)" :src="get_url(choice)" >
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
      options:[]
    }
  },
  methods:{
    choose(choice){
      if(choice.action!=="chi"){
      choice.type=choice.action;
      //向后端发送
      this.$root.$socket.send(JSON.stringify(choice));
      this.$store.dispatch("action_choose");
      document.getElementById("chiContainer").style.display="none";
      }else{
        document.getElementById("chiContainer").style.display="inline";
      }
    },
    chi_func(chi){
      chi.type=chi.action;
      //向后端发送
      this.$root.$socket.send(JSON.stringify(chi));
      this.$store.dispatch("action_choose");
      document.getElementById("chiContainer").style.display="none";
    },
    get_url(choice){
      return require(`../../../../public/img/4/${choice.action}.png`);
    }
  },
  
  computed:{
      flag:function(){ return this.number.chi;},
      OP:{
      get() {
        return this.$store.state.options;
      }
    },
      
  },
  mounted() {
    this.$store.commit("chi");
  },
  watch:{
      OP: function(newValue, oldValue){
        console.log(oldValue);
        this.options=newValue;
    },
  }
}

</script>

<style scoped>
.buttonContainer{
  position: absolute;
  width: 49%;
  height:6.4%;
  bottom: 15.6%;
  right:25.4%;
  border: 1px solid gray;
}
.buttonContainer img{
  float: left;
  width: 20%;
  height: 106%;
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