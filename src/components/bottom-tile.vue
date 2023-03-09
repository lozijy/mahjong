<template>
    <img  ref="tile" :src ="url" class="bottom-tile" @click="click(history)">  
</template>

<script>
export default {
name: "bottom-tile",
props:{
  tile: {
    type: String, // props 的数据类型
    required: true // 是否必须传递
  },
  history:{
    type: String, // props 的数据类型
    required: true // 是否必须传递
  },
  flag:{
    type:Boolean,
    required:true
  }
},
data(){
  return{
  url: require(`../../public/img/1/${this.tile}.gif`)
  }
},
methods:{
  click(history){
    if(history.count==0){
      this.$refs.tile.classList.toggle("move");
      history.count=1,
      history.last=this.tile;
    }
    else{
      if(history.last==this.tile){
        history.count=0;
        history.last=this.tile;
        this.$emit('updateFlag', true);
        console.log("flag=true")
      }else{
        this.refs.history.last.classList.toggle("move");
        this.$refs.tile.classList.toggle("move");
        history.last=this.tile;
      }
    }
  },
}



}
</script>

<style scoped>
.bottom-tile{
  width: 6%;
  height: 100%;
  margin-right: 0px;
  margin-bottom: 5px;
  float: left;
  cursor: pointer;
}
.move{ 
    position: relative;
    bottom:20px;
}

</style>