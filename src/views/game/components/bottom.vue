<template>
  <div id="bottom">
<!--    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile"  ></bottom-tile>-->
    <bottom-tile :ref="tile+index" v-for=" (tile,index) in p_tiles"  :tile="tile" :key="tile+index" :index="index"  @click.native="Click(tile,index)" :change="change"></bottom-tile>
    
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
        tiles:[],
        Get_Message:0
    }
  },

    methods:{
      go(tile){
        console.log("go"+tile);
        console.log("go"+tile.substr(0,2));
        //向后端发送数据
        const information={
          "type":"discard",
          "player_id":this.$store.state.me.player_id,
          "tile_type": tile.substr(0,2),
        };
        this.$root.$socket.send(JSON.stringify(information))
        //修改change  
        this.change="";
        this.$store.commit("clear_options");
    },
      Click(tile,index) {
        console.log("click");
        if(this.Get_Message===1){
          if (this.change === tile+index) {
            console.log("click go");
            // this.discardFlag=true;
            this.go(this.change);
            this.change = "";
            this.discardFlag = false;
          } else {
            console.log("click else");
            this.change = tile+index;
            console.log(this.change);
          } 
      }else{
        console.log("not allowed");
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
    get_message:function(newValue, oldValue){
      console.log("message"+newValue+oldValue);
      this.Get_Message=newValue;
    }
},



  }

  



</script>

<style scoped>
#bottom {
  position: absolute;
  width:56%;
  height:6%;
  bottom:5.5%;
  right:25.4%;
  
  display: inline;
}



</style>