<template>
  <div id="container">
    <img src="../../../../public/img/2/hai1.png" id="img">
    <img :src="get_url(this.tile)" id="body" />
  </div>
</template>

<script>
export default {
  name: "right-discard",
  props:{
    tile:{
      type:String,
      require:true
    }
  },
  data(){
    return{
      url: require(`../../../../public/img/2/${this.tile}.png`)
    }
  },
  methods:{
    get_url(tile){
      return require(`../../../../public/img/2/${tile}.png`)
    }
  },
}
</script>

<style scoped>
#container {
  position: relative;
  /* width: 29%;
  height: 17%; */
  /* background-image: url('../../../../public/img/2/hai1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain; */
  border: 0.5px solid black;
  float: right;
}

#container img{
  display: block; /* ʹͼƬ��Ϊ�鼶Ԫ�أ��Զ���Ӧ��Ԫ�ش�С */
    max-width: 100%; /* ��ͼƬ���Ȳ����������Ŀ��� */
    /* height: auto; �߶�����Ӧ������ͼƬ�Ŀ��߱� */
    /* border: 1px solid #000; �߿���ʽ���ɸ�����Ҫ�Զ��� */
    box-sizing: border-box; /* �߿�����ģ�ͣ����ֱ߿��������Ե���� */
}

#body{
  /*position: absolute;*/
  /*left: 20%;*/
  /*top:1%;*/
  /*width: 60%;*/
  /*height: 80%;*/
  /*z-index:2;*/
  /*transform: rotateY(90deg);*/
  position: absolute;
  right: 29%;
  top:-8.2%;
  width: 54%;
  height: 97%;
  z-index:2;
  transform: rotateZ(270deg);
  image-rendering: atuo;
}
</style>