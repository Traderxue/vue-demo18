<script setup>
import { ref } from "vue";

const notice = ref(
  "尊敬的用户：因地区政策原因强制关停和清退，平台将有3万台矿机可清退给用户。用户可根据UID和清算金额，分配到不同数量的矿机资产。国内收货地址可以随机分配9.5成新的矿机，80T以下，大部分都是可以开机的好机器；美国收货地址可以获得80T以上的矿机（3400W左右），均可以开机；中东、东欧的收货地址可以获得50T以下的机器。配送费为用户直接支付给物流公司。限定时间：（敬请在30天内回复邮件，超过30天不一定有好机器或可能也没有机器了。"
);

const gridList = ref([
  {
    icon:"",
    title:"",
    path:""
  },
  {
    icon:"",
    title:"",
    path:""
  },
  {
    icon:"",
    title:"",
    path:""
  },
  {
    icon:"",
    title:"",
    path:""
  },
])

</script>

<template>
  <div class="home">
    <div class="header">
      <span></span>
      <span class="title">RHY Bitcoin mining</span>
      <span class="material-symbols-outlined"> sms </span>
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="http://localhost:5173/img/banner1.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:5173/img/banner2.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:5173/img/banner3.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:5173/img/banner4.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="http://localhost:5173/img/banner5.png" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar left-icon="volume-o" :text="notice" />
    </div>
    <div class="grid">
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  color: #222831;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }
  .banner {
    width: auto;
    height: 160px;
    border-radius: 3px;
    overflow: hidden;
    margin: 15px 0px;
    img {
      width: 100%;
      height: 160px;
      border-radius: 3px;
    }
  }
}
</style>