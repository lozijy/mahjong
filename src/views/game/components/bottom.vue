<template>
  <div id="bottom">
<!--    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile"  ></bottom-tile>-->
    <bottom-tile :ref="tile" v-for="tile in this.$store.state.me.p_tiles"  :tile="tile" :key="tile"   @click.native="click(tile)" :get_message="get_message" :change="change"></bottom-tile>
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
        //收到可以打牌的消息
        get_message:this.$store.state.draw_Flag,
        //是否可以打牌
        drawFlag: false,
        change:"",
    }
  },
    methods:{
      go(tile){
        console.log("go"+tile);
        //向后端发送数据
        const information={
          "type":"discard",
          "player_id":this.$store.state.me.player_id,
          "card":tile
        };
        this.$root.$socket.send(JSON.stringify(information))

        //在me中删除这个牌
        console.log(tile);
        var p_tiles=this.$store.state.me.p_tiles
        var index=p_tiles.indexOf(tile);
        console.log(tile);
        p_tiles.splice(index,1);
        console.log(p_tiles);
        //在open里面加牌
        this.$store.commit()
        //修改change
        this.change="";
        this.drawFlag=false;
      },
      click(tile){
        if(this.get_message){
        //第一次点
        if(this.change===""){
          this.change=tile;
          }
          else{
            if(this.change===tile){
              this.drawFlag=true;
            }else{
              this.change=tile;
            }
          }
      }
    }
    },

  watch: {
      //打牌
      drawFlag: function(newValue, oldValue) {
        console.log("drawFlag change");
        console.log(newValue+oldValue);
        if(newValue===true) {
          // do something with the new value
          this.go(this.change);
        }
      },      


    }


}
</script>

<style scoped>
#bottom {
  position: absolute;
  width: 49%;
  height:7%;
  bottom:5.5%;
  right:25.4%;
  border: 1px solid gray;
  display: inline;
}
.move{
  position: relative;
  bottom:20px;
}



</style>