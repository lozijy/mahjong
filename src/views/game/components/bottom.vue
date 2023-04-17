<template>
  <div id="bottom">
<!--    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile"  ></bottom-tile>-->
    <bottom-tile :ref="tile" v-for="tile in p_tiles"  :tile="tile" :key="tile"   @click.native="Click(tile)" :change="change"></bottom-tile>
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
        //是否选择打牌
        discardFlag: false,
        change:"",
    }
  },
  computed:{
    get_message(){return this.$store.state.me.turn},
    p_tiles(){return this.$store.state.me.p_tiles}
  },
    methods:{
      go(tile){
        console.log("go"+tile);
        //向后端发送数据
        const information={
          "type":"discard",
          "player_id":this.$store.state.me.player_id,
          "tile_type":tile
        };
        this.$root.$socket.send(JSON.stringify(information))
        //修改change
        this.change="";
        this.$store.commit("clear_options");
        //修改store
        this.$store.dispatch("discard",{player_index:this.$store.state.me.player_id,tile_type:tile});
    },
      Click(tile) {
        if (this.get_message===1) {
          //第一次点
          if (this.change === tile) {
            // this.discardFlag=true;
            this.go(this.change);
            this.change = "";
            this.discardFlag = false;
          } else {
            this.change = tile;
          }
        }
      }
    },


  }

  



</script>

<style scoped>
#bottom {
  position: absolute;
  width: 49%;
  height:6%;
  bottom:5.5%;
  right:25.4%;
  border: 1px solid gray;
  display: inline;
}



</style>