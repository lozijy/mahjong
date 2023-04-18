<template>
  <div id="bottom">
<!--    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile"  ></bottom-tile>-->
    <bottom-tile :ref="tile" v-for=" (tile,index) in p_tiles"  :tile="tile" :key="tile+index"   @click.native="Click(tile)" :change="change"></bottom-tile>
    
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
        tiles:[]
    }
  },

    methods:{
      go(tile){
        console.log("go"+tile);
        //向后端发送数据
        const information={
          "type":"discard",
          "player_id":this.$store.state.me.player_id,
          "tile_type":tile,
        };
        this.$root.$socket.send(JSON.stringify(information))
        //修改change  
        this.change="";
        this.$store.commit("clear_options");
    },
      Click(tile) {
        console.log("click");
          if (this.change === tile) {
            console.log("click go");
            // this.discardFlag=true;
            this.go(this.change);
            this.change = "";
            this.discardFlag = false;
          } else {
            console.log("click else");
            this.change = tile;
            console.log(this.change);
          } 
      }
    },
    computed:{
    get_message(){return this.$store.state.me.turn},
    p_tiles:{
      get() {
        console.log("k"+this.$store.state.me.p_tiles);
        return this.$store.state.me.p_tiles
                }
    },
  },
    watch:{
      p_tiles: function(newValue, oldValue){
        console.log(oldValue);
        this.tiles=newValue;
    },
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