<template>
  <div class="house-window" @click="click()">
    <img src="../../../../public/img/hall/lablefather.png">
    <p id="house-window-number">{{house.number}}</p>
    <house-window  v-for="item in house.user" :item="item" :key="item.id"></house-window>

  </div>
</template>

<script>
import houseWindow from "@/views/hall/components/houseWindow.vue";
export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    houseWindow
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "house",
  props:{
    // eslint-disable-next-line no-undef
    house: {
      type: Object, // props 的数据类型
      required: true // 是否必须传递
    },
  },
  methods:{
    click(){
      console.log("click");
      console.log(this.house.number)
      this.$http.post('http://198.211.12.166:23333/join', {
        type:"join",
        player_id:this.$store.state.me.player_id,
        number:this.house.number,
      }).then(()=> {
        console.log("接受数据");
        this.loginBox.style.display = "block";
        this.registerBox.style.display = "none";
        alert("加入成功");
      })
    }
  }
}
</script>

<style>
.house-window {
  border: 1px solid gray;

  vertical-align: top;
  top: 0%;
  height: 34%;
  width: 99%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

}
.house-window img {
  position: absolute;
  width: 100%;
  left: 0%;
  z-index: 0;

  /* border: 1px solid gray; */
}
#house-window-number {
  position: absolute;
  width: 200px;
  left: 310px;
  margin: 0;
  text-align: center;
  vertical-align:middle;
  line-height: 20px;
  z-index: 0;
  color: rgb(199, 160, 89);
}

</style>