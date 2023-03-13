<template>
  <div id="bottom">
    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile" :history="history" :flag="flag" @updateFlag="flag = $event"></bottom-tile>
  </div>
</template>

<script>
import bottomTile from "@/views/game/components/bottom-tile.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "bottom",
    components: { bottomTile },
    data() {
    return {
      flag: false
    }
  },
    methods:{
      go(tile){
        console.log(tile);
        console.log("go");
        //向后端发送数据
        const information={
          type:"discard_a_card",
          player_id:this.$store.state.me.player_id,
          card:tile
        };
        this.$root.$socket.send(JSON.stringify(information))

        //在me中删除这个牌
        var p_tiles=this.$store.state.me.p_tiles
        var index=p_tiles.indexOf(tile);
        p_tiles.splice(index,1);
      }
    },
    mounted(){
      this.history={
        count:0,
        last:"",
      }
    },
    watch: {
      flag: function(newValue, oldValue) {
        console.log(newValue+oldValue);
        console.log("haha");
        if(newValue==true) {
          // do something with the new value
          this.go(this.history.last);
          this.flag = false;
        }
      }
    }

}
</script>

<style scoped>
#bottom {
  position: absolute;
  width: 27%;
  height:6%;
  bottom:6%;
  right:37%;
  border: 1px solid gray;
  display: inline;
}



</style>