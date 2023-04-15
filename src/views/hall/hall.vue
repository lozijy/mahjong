<template>


    <div class="hall">
    <div class="bg"></div>
    <!-- <img src="../../../public/img/hall/black.png"> -->
    <div class="centered"><img src="../../../public/img/hall/border.png" class="centered">
        <div class="title-window"><div class="logout" @click="logout()">???</div><div class="create" @click="create()">????</div><div class="flushed" @click="flushed()">???</div></div>
        <div class="content-window">
        <house v-for="house in $store.state.house" :house="house" :key="house.number"></house>
    </div>
      </div>
    

  </div>
</template>

<script>
import house from "@/views/hall/components/house.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "hall",
  components:{
    house
  },
  methods:{
    flushed(){
      this.$http.post('http://198.211.12.166:23333/hall', {
        user_id: window.localStorage.getItem("userId"),
        token:window.localStorage.getItem("token")
      }
      ).then((response)=> {
        this.$store.state.house=response.data.data;
      }).catch(
          function (error) {
            alert(error);
          })
    },
    create(){
      this.$http.post('http://198.211.12.166:23333/create', {
            user_id: window.localStorage.getItem("userId")
            ,
            token:window.localStorage.getItem("token")
          }
      ).then((response)=> {
        //???id
        this.$store.state.me.id=response.data.user_id;
        //???table_code
        this.$store.state.table_code=response.data.data.table_code;
        this.$router.push("/game");

      }).catch(
          function (error) {
            alert(error);
          });

      //?????game???


    },
    logout(){
      this.$http.post('http://198.211.12.166:23333/logout', {
            user_id: window.localStorage.getItem("userId")
            ,
            token:window.localStorage.getItem("token")
          }
      ).then((response)=> {
        //???????UserId??token
        console.log(response)
        localStorage.clear();
        this.$router.push("/login");
      }).catch(
          function (error) {
            alert(error);
          });
    }
  },
  mounted() {
    //???
    this.$http.post('http://198.211.12.166:23333/hall', {
          user_id: window.localStorage.getItem("userId"),
          token:window.localStorage.getItem("token")
        }
    ).then((response)=> {
      this.$store.state.house=response.data.data;
    }).catch(
        function (error) {
          alert(error);
        })
  }
}
</script>

<style scoped>
  /* ������ʽ */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* ���ع���?? */
}
div.bg {
  background-image:url("../../../public/img/hall/indoor.jpg");
  background-position: center center;
  background-size: cover;
  /* ͼƬ��???Ӧ */
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  /* ������ͼƬ�㼶��Ϊ��?? */
}
.centered {
  position: absolute;
  /* float: auto; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* ת��λ���Խ�Ԫ������ҳ������ */
  /* width: 4*height; */
  width:912px;
  /* max-width: 912px; */
  /* height: expression_r(this.width >542 ? (542*(this.height/this.width)): true); */
  height: 500px;
  /* height:500px; */
  /* ����Ԫ�ؿ����Խ��з�?? */
  image-rendering: pixelated;
}
.title-window {
  position: absolute;
  top: 7%;
  left: 50%;
  /* top:0;
  left:0; */
  bottom: -100px;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 7%;
  z-index: 0;
  background-image: url("../../../public/img/hall/title.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* background-color:; */
}

  .title-window .logout {
    display: inline-block;
    position: relative;
    text-indent: -9999px;
    background-image: url("../../../public/img/hall/logout.png");
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    top: 10%;
    left: 85%;
    width: 10%;
    height: 80%;
  }
  .title-window .create {
    display: inline-block;
    position: relative;
    text-indent: -9999px;
    background-image: url("../../../public/img/hall/create.png");
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    top: 10%;
    left: 7%;
    width: 10%;
    height: 80%;
  }
  .title-window .flushed {
    display: inline-block;
    position: relative;
    text-indent: -9999px;
    background-image: url("../../../public/img/hall/refresh.png");
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
    top: 10%;
    left: -15%;
    width: 10%;
    height: 80%;
  }
  .title-window .create:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .title-window .logout:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
.title-window .flushed:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.content-window {
  position: absolute;
  top: 53%;
  left: 50%;
  bottom: -100px;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  overflow: auto;
  z-index: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  /* padding-right: 5px; */
  /* background-color: aqua; */
}
/* ֧��Webkit���??? */
.content-window::-webkit-scrollbar {
  width: 8px;
  /* ���ù�������?? */
  position: right;
}
.content-window::-webkit-scrollbar-track {
  background: #666;
  /* ���ù�����������?? */
}
.content-window::-webkit-scrollbar-thumb {
  background-color: rgb(216, 203, 179);
  /* ���ù������϶�����ɫ */
}
/* ֧��Edge,FireFox���??? */
.content-window {
  /* ���ù�������?? */
  scrollbar-width: thin;
  scrollbar-color: rgb(112, 89, 45) #666;
}



</style>