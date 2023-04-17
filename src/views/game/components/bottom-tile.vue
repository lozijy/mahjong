<template>
    <img  :ref="tile" :src ="url" class="bottom-tile" >
</template>

<script>
export default {
name: "bottom-tile",
props:{
  tile: {
    type: String, // props 的数�?类型
    required: true // �?否必须传�?
  },
  change:{
    type:String,
    require:true
  },

},
  data(){
  return{
  url: require(`../../../../public/img/1/${this.tile}.gif`)
  }
},
watch:{
  change: function(newValue, oldValue) {
      console.log(newValue+oldValue);
      if(newValue===""){
        console.log("pass");
      }
      else if(oldValue==="") {
        this.$refs[newValue].classList.toggle("move");
      }
      else{
        if(this.$refs[oldValue]!== undefined){
        this.$refs[oldValue].classList.toggle("move");
        }
        if(this.$refs[newValue]!== undefined){
        this.$refs[newValue].classList.toggle("move");
        }
      }
    },
    get_message: function(newValue, oldValue) {
        console.log("drawFlag change");
        console.log(newValue+oldValue);
        if(newValue===1) {
          // do something with the new value
          document.getElementsByClassName("bottom-tile")[0].style.cursor="pointer";
        }else{
          document.getElementsByClassName("bottom-tile")[0].style.cursor="auto";
        }
      },
},
  computed:{
    get_message(){return this.$store.state.me.turn},
  }





}
</script>

<style scoped>
.bottom-tile{
  position: relative;
  width: 7%;
  height: 60%;
  top:40%;
  /* margin-right: 0px; */
  /* margin-bottom: 5px; */
  float: left;
  cursor: auto;
}
.move{ 
    position: relative;
    bottom:20px;
}

</style>