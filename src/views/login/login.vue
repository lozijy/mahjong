<template>
  <div>
  <div class="bg"></div>
  <img src="../../../public/img/logo2.png" class="logo">
    <div id="login_box">
      <h2>LOGIN</h2>
      <h3 id="l_error">账号密码错误！</h3>
      <div id="input_box">
        <input type="text" placeholder="请输入用户id"  v-model=user_id >
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
      <h3 id="r_error" :v-model="r_error">注册格式错误</h3>
      <div id="input_box">
        <input type="text" placeholder="请输入至多7位昵称" v-model="r_name">
        <input type="text" placeholder="请输入至少5位id" v-model="r_user_id">
        <input type="text" placeholder="请输入邮箱地址" v-model="r_email">
      </div>
      <div class="input_box">
        <input type="password" placeholder="请输入至少8位密码" v-model="r_password">
        <input type="password" placeholder="请确认密码" v-model="r_password1">
      </div>
      <div class="botton_container" >
        <button  type="submit" id="login_button" @click="click">完成注册</button>
        <button  type="button" id="login_button1" @click="retur()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  //eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  mounted() {
    this.loginBox=document.getElementById("login_box");
    this.registerBox= document.getElementById("register_box");
    this.loginButton= document.getElementById("login_button");
    // eslint-disable-next-line no-import-assign
    this.axios=require("axios");
  },
  data(){
    return{
      user_id:"",
      password:"",
      r_name:"",
      r_user_id:"",
      r_email:"",
      r_password:"",
      r_error:"",
      r_password1:"",
    }
  },
  methods:{
    login(){
      if(this.user_id!==""&&this.password!=="") {
        this.axios.post('http://198.211.12.166:23333/login',
            {
              user_id: this.user_id,
              password: this.password
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*"
              }
            }).then((response) => {
              // eslint-disable-next-line no-undef
              window.localStorage.setItem('userId', response.data.user_id);
              window.localStorage.setItem('token', response.data.token);
              this.$router.push("/hall");
            }
        )
      }else{
        alert("请输入账号或者密码");
      }
    },
    sign_up_button(){
      this.loginBox.style.display = "none";
      this.registerBox.style.display = "block";
    },
    retur(){
      this.loginBox.style.display = "block";
      this.registerBox.style.display = "none";
    },
    click(){
      if(this.r_password===this.r_password1) {
        //发送post请求
        this.$http.post('http://198.211.12.166:23333/register', {
          name: this.r_name,
          user_id: this.r_user_id,
          email: this.r_email,
          password: this.r_password
        }).then((response) => {
          this.loginBox.style.display = "block";
          this.registerBox.style.display = "none";
          alert(response.data.text);
        }).catch(
            function (error) {
              const pipei = {
                "ensure this value has at most 7 characters": "昵称最多7位",
                "string does not match regex \"^[a-zA-Z\\u4e00-\\u9fa5]+$\"": "昵称格式不对",
                "ensure this value has at least 5 characters": "ID至少包含5个字符",
                "value is not a valid email address": "不是正确的邮箱地址",
                "ensure this value has at least 8 characters": "密码至少八位",
                "该邮箱已存在": "该邮箱已存在"
              }
              var i = 0;

              if (typeof error.response.data.detail == "string") {
                alert(error.response.data.detail);
              } else {
                while (error.response.data.detail[i]) {
                  if (pipei[error.response.data.detail[i].msg]) {
                    alert(pipei[error.response.data.detail[i].msg]);
                  } else {
                    alert(error.response.data.detail[i].loc[1]);
                    alert(error.response.data.detail[i].msg)
                  }
                  i++;
                }
                this.getElementById("r_error").display = "block";

              }
            });

        this.loginBox.style.display = "block";
        this.registerBox.style.display = "none";
      }
      else{
        alert("密码和确认密码不一致");
      }

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

::placeholder{
  font-size: 12px;
  color: #fbf7f7;
  font-weight: bold;
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
  position: absolute;
  /* margin-left: 290px; */
  /* margin-top: 8%; */
  left: 30%;
  top:50%;
  transform: translate(-50%,-50%);
  /* opacity: 90%; */
  z-index: 0;
  /* background-size: ; */
}



#register_box {
  position: absolute;
  width: 200px;
  height: 300px;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  background-color: #00000060;
  /* margin: auto;
  margin-left: 500px;
  margin-top: -300px; */
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  z-index: 1;
}

#login_box {
  display: block;
  position: absolute;
  top:50%;
  left:50%;
  /* left:900px; */
  width: 200px;
  /* bottom: 100%; */
  height: 300px;
  /* background-position: center center; */
  background-color: #00000060;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  z-index: 1;
  transform:translate(-50%,-50%);
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

#login_button1 {
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