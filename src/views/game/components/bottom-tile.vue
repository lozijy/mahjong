<template>
    <img  :ref="tile+index" :src ="get_url(this.tile)" class="bottom-tile"  >
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
  index:{
    type:String,
    require:true
  }

},  
  data(){
  return{
    url: require(`../../../../public/img/1/${this.tile}.gif`),
    move:"move"
  }
},
methods:{
  get_url(tile){
      return require(`../../../../public/img/1/${tile}.gif`)
  }
},
watch:{
  change:{
    handler(newValue, oldValue){
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
  immediate:true
}
},
  computed:{
  }





}
</script>

<style scoped>
.bottom-tile{
  width: 7%;
  height: 100%;
  /* margin-right: 0px; */
  /* margin-bottom: 5px; */
  float: left;
  cursor: auto;
}
.move{ 
    position: relative;
    bottom:20px;
}
.basic{

}
</style>