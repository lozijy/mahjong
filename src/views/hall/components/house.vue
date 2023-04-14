<template>
  <div class="house-window" @click="click(house)">
    <img src="../../../../public/img/hall/lablefather.png">
    <p id="house-window-number">{{house.table_code}}</p>
    <house-window  v-for="item in house.players" :item="item"  :key="item.id"></house-window>

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
    click(house){
      console.log("click");
      console.log(house.number);
      this.$http.post('http://198.211.12.166:23333/join', {
        table_code: house.number,
        user_id: window.localStorage.getItem("userId"),
        token:window.localStorage.getItem("token")
      }).then((response)=> {
        console.log("接受数据");
        console.log(response);
        this.$router.push("/game");
      });
      this.$store.state.table_code=house.number;
      this.$store.state.number=house.players.length;
      this.$store.state.people=house.players;

    }
  }
}
</script>

<style>
.house-window {
  border: 1px solid gray;

  vertical-align: top;
  top: 0%;
  height: 18%;
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