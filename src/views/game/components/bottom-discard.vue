<template>
  <div id="container">
    <img src="../../../../public/img/2/hai2.png" id="img">
    <img :src="get_url(this.tile)" id="body" />
  </div>
</template>

<script>
export default {
  name: "bottom-discard",
  props:{
    tile:{
      type:String,
      require:true
    }
  },
  methods:{
    get_url(tile){
      return require(`../../../../public/img/2/${tile}.png`)
    }
  },
  data(){
    return{
      url: require(`../../../../public/img/2/${this.tile}.png`)
    }
  },
}
</script>

<style scoped>
#container {
  position: relative;

  /* background-image: url('../../../../public/img/2/hai2.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain; */
  /* float: left; */
  border: 0.3px solid black;
}

#container img{
  display: block; /* ʹͼƬ��Ϊ�鼶Ԫ�أ��Զ���Ӧ��Ԫ�ش�С */
    max-width: 100%; /* ��ͼƬ���Ȳ����������Ŀ��� */
    /* height: auto; �߶�����Ӧ������ͼƬ�Ŀ��߱� */
    /* border: 1px solid #000; �߿���ʽ���ɸ�����Ҫ�Զ��� */
    box-sizing: border-box; /* �߿�����ģ�ͣ����ֱ߿��������Ե���� */
}

#body{
  position: absolute;
  left: 15%;
  top:-40%;
  width: 72%;
  height: 151%;
  z-index:2;
  transform: rotateX(60deg);
  /* image-rendering: high-quality; */
  image-rendering: auto;
}
</style>