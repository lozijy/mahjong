<template>
  <div id="app">
    <div id="background">
      <mid></mid>
      <top></top>
      <left></left>
      <right></right>
      <bottom></bottom>

      <left-container></left-container>
      <right-container></right-container>
      <top-container></top-container>
      <bottom-container></bottom-container>

      <button-container></button-container>
    </div>

  </div>
</template>

<script>
import mid from "@/views/game/components/mid.vue";
import top from "@/views/game/components/top.vue";
import topTile from "@/views/game/components/top-tile.vue";
import left from "@/views/game/components/left.vue";
import leftTile from "@/views/game/components/left-tile.vue";
import right from "@/views/game/components/right.vue";
import rightTile from "@/views/game/components/right-tile.vue";
import bottom from "@/views/game/components/bottom.vue";
import bottomTile from "@/views/game/components/bottom-tile.vue";

import leftContainer from "@/views/game/components/leftContainer.vue";
import rightContainer from "@/views/game/components/rightContainer.vue";
import topContainer from "@/views/game/components/topContainer.vue";
import bottomContainer from "@/views/game/components/bottomContainer.vue";

import buttonContainer from "@/views/game/components/buttonContainer.vue";
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    mid,
    // eslint-disable-next-line vue/no-unused-components
    top,
    // eslint-disable-next-line vue/no-unused-components
    topTile,
    // eslint-disable-next-line vue/no-unused-components
    left,
    // eslint-disable-next-line vue/no-unused-components
    leftTile,
    // eslint-disable-next-line vue/no-unused-components
    right,
    // eslint-disable-next-line vue/no-unused-components
    rightTile,
    bottom,
    // eslint-disable-next-line vue/no-unused-components
    bottomTile,

    leftContainer,
    rightContainer,
    topContainer,
    bottomContainer,

    buttonContainer

  },
  methods:{
    checkdata(data){
      if(data.type=="get_me_id"){
        this.$store.commit("get_me_id",data.player_id);
      }
      if(data.type=="draw_self"){
        console.log(data.tile);
        this.$store.commit("draw_self",data.tile);
      }
      else if(data.type=="draw_other"){
        this.$store.commit("draw_other",data.player_id);
      }
      else if(data.type=="action_choose"){
        this.$store.commit("action_choose",data.action);
      }
      else if(data.type=="countdown"){
        this.$store.commit("countdown",data.time);
      }
    }
  },
  mounted() {
      this.$socket=new WebSocket('ws://localhost:8000');
      this.$socket.addEventListener('open', () => {
        console.log('Connected to server');
        this.$socket.send('ready to connect');
      });
      this.$socket.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
        this.checkdata(JSON.parse(event.data));
      });
      this.$socket.addEventListener('close', () => {
        console.log('Disconnected from server');
      });
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#background{
  display: inline;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../../../public/img/table.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  transform-style: preserve-3d;
  /* transform: rotateX(30deg) rotateY(0deg) translateZ(0px);   */
}
</style>
