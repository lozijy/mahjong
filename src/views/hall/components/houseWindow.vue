<template>
  <div class="house-window-room">
    <div class="User">
      <p id="Username">{{item.name}}</p>
      <p id="ID">{{ item.user_id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "houseWindow",
  props:{ 
    item:{
      type: Object, // props 的数据类型
      required: true // 是否必须传递
    },
    house:{
      type: Object, // props 的数据类型
      required: true // 是否必须传递
    }


  }
}
</script>

<style scoped>
.house-window-room {
  position: relative;
  left: 5px;
  float: left;
  top: 22px;
  width: 25%;
  height: 50px;
  /* z-index: 4; */
  margin-left: 0;
  /* border: 1px solid gray; */
}
.User {
  position: relative;
  width: 100%;
  height: 50px;
}
#Username {
  text-align: center;
  line-height: 5px;
  color: rgb(199, 160, 89);
}
#ID {
  text-align: center;
  line-height: 0px;
  color: rgb(199, 160, 89);
  font-size: smaller;
  /* margin: 0; */
}
</style>