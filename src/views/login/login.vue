<template>
  <div>
  <div class="bg"></div>
  <img src="../../../public/img/logo1.png" class="logo">
    <div id="login_box">
      <h2>LOGIN</h2>
      <h3>账号密码错误！</h3>
      <div id="input_box">
        <input type="text" placeholder="请输入昵称"  v-model=name>
      </div>
      <div class="input_box">
        <input type="password" placeholder="请输入密码" v-model=password>
      </div>
      <!-- <button id="sign_up_button">注册</button> -->
      <div class="botton_container">
        <button type="submit" @click="login">登录</button><br>
        <button type="button" id="sign_up_button" @click="sign_up_button">注册</button>
      </div>
    </div>
    <div id="register_box" style="display:none">
      <h2>REGISTER</h2>
      <div id="input_box">
        <input type="text" placeholder="请输入昵称" name="name">
        <input type="text" placeholder="请输入id" name="user_id">
        <input type="text" placeholder="请输入邮箱地址" name="email">
      </div>
      <div class="input_box">
        <input type="password" placeholder="请输入密码" name="password">
      </div>
      <div class="botton_container" >
        <button  type="submit" id="login_button" @click="click">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  //eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  mounted() {
    this.loginBox=document.getElementById("login_box");
    this.registerBox= document.getElementById("register_box");
    this.loginButton= document.getElementById("login_button");
    // eslint-disable-next-line no-import-assign
    axios=require(axios);
  },
  data(){
    return{
      name:"",
      password:"",
    }
  },
  methods:{
    login(){
      console.log("login");
      axios({
        method:"post",
        url: "http://127.0.0.1:4523/m2/2389381-0-default/68423249",
        data:{
          name:this.name,
          password:this.password
        }
      }).then(
          (response)=>{
            console.log("接受数据");
            console.log(response);
            if(response.data.flag=="success"){
              console.log("成功");
              document.cookie=response.data.flag;
              document.cookie=response.data.user_id;
              document.cookie=response.data.cookie;
              this.$router.push("/game");
            }else{
              console.log("错误");
            }
          }).catch(
          ()=>{
            this.$router.push("/");
            console.log("服务器出问题了");
          }).finally(()=>{
        this.name="";
        this.password="";
        console.log("post 成功!");
      });


    },
    sign_up_button(){
      console.log(this.loginBox);
      this.loginBox.style.display = "none";
      this.registerBox.style.display = "block";
    },
    click(){
      this.loginBox.style.display = "block";
      this.registerBox.style.display = "none";
    }
  }
}
</script>

<style scoped>
  /* 设置样式 */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* 隐藏滚动条 */
}

div.bg {
  background-image: url("../../../public/img/background.jpg");
  background-position: center center;
  background-size: cover;
  /* 图片自适应 */
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  /* 将背景图片层级设为最低 */
}

.logo {
  margin-left: 290px;
  margin-top: 8%;
  opacity: 90%;
  z-index: 0;
  /* background-size: ; */
}

#login_box {
  /* left:900px; */
  width: 200px;
  /* bottom: 100%; */
  height: 300px;
  /* background-position: center center; */
  background-color: #00000060;
  margin: auto;
  margin-left: 500px;
  margin-top: -300px;
  /* margin-bottom: 10%; */
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  z-index: 1;
}

#register_box {
  width: 200px;
  height: 300px;
  background-color: #00000060;
  margin: auto;
  margin-left: 500px;
  margin-top: -300px;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  z-index: 1;
}

h2 {
  color: #ffffff90;
  margin-top: 5%;
}
h3{
  color: crimson;
  display: none;
}

#input_box {
  margin-top: 5%;
}

#input_box input:focus {
  transition: border-color 0.5s ease;
  border-color: #71bae1;
}

.input_box input:focus {
  transition: border-color 0.5s ease;
  border-color: #71bae1;
}

span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  margin-right: 10px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

#login_button {
  margin-top: 10px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  margin-left: 10px;
}


.botton_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.botton_container button:hover {
  transform: scale(1.1);
}

#sign_up_button {
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  margin-left: 10px;
}



#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}


</style>