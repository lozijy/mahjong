<template>
  <div id="bottom">
<!--    <bottom-tile v-for="tile in this.$store.state.me.p_tiles" :tile="tile" :key="tile" :history="history" :flag="flag" @updateFlag="flag = $event"></bottom-tile>-->
    <bottom-tile :ref="tile" v-for="tile in this.$store.state.me.p_tiles" :change="change" :tile="tile" :key="tile" :history="history" :flag="flag"></bottom-tile>
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
      flag: false,
      history:{
        count:0,
        last:"",
      },
      change:""
    }
  },
    methods:{
      go(tile){
        //向后端发送数据
        const information={
          "type":"discard_a_card",
          "player_id":this.$store.state.me.player_id,
          "card":tile
        };
        this.$root.$socket.send(JSON.stringify(information))

        //在me中删除这个牌
        var p_tiles=this.$store.state.me.p_tiles
        var index=p_tiles.indexOf(tile);
        p_tiles.splice(index,1);
      }
    },
    mounted() {
      document.getElementById("hah").classList.toggle("move")
    },
  watch: {
      flag: function(newValue, oldValue) {
        console.log(newValue+oldValue);
        if(newValue===true) {
          // do something with the new value
          this.go(this.history.last);
          this.$root.flag = false;
        }
      },
    change: function(newValue, oldValue) {
      console.log(newValue+oldValue);
      if(newValue!=="") {
        // do something with the new value
        this.$refs[newValue].classList.toggle("move");
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