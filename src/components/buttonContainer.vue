<template>
  <div class="buttonContainer"></div>
</template>

<script>
export default {
  name: "buttonContainer"
}
</script>

<style scoped>
.buttonContainer{
  position: absolute;
  width: 30%;
  height:10%;
  bottom: 11%;
  right:35%;
  border: 1px solid gray;
}
.buttonContainer img{
  float: left;
  width: 20%;
  height: 70%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.buttonContainer img:hover{
  transform: scale(1.2);
}

</style>