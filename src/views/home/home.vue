<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const notice = ref(
  "尊敬的用户：因地区政策原因强制关停和清退，平台将有3万台矿机可清退给用户。用户可根据UID和清算金额，分配到不同数量的矿机资产。国内收货地址可以随机分配9.5成新的矿机，80T以下，大部分都是可以开机的好机器；美国收货地址可以获得80T以上的矿机（3400W左右），均可以开机；中东、东欧的收货地址可以获得50T以下的机器。配送费为用户直接支付给物流公司。限定时间：（敬请在30天内回复邮件，超过30天不一定有好机器或可能也没有机器了。"
);

const gridList = ref([
  {
    icon: "http://localhost:5173/img/cz.png",
    title: "充值",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/tx.png",
    title: "提现",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/secren.png",
    title: "矿场实景",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/miner.png",
    title: "矿机租赁",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/coin.png",
    title: "币种信息",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/miner.png",
    title: "个人中心",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/info.png",
    title: "资讯中心",
    path: "",
  },
  {
    icon: "http://localhost:5173/img/kefu.png",
    title: "联系客服",
    path: "",
  },
]);

const coinList = ref([
  {
    type: "btc",
    price: "216",
    parcent: "0.15",
    up: 0,
  },
  {
    type: "eth",
    price: "6316",
    parcent: "0.558",
    up: 0,
  },
  {
    type: "sol",
    price: "76.15",
    parcent: "16.2",
    up: 0,
  },
]);

const getPrice = () => {
  coinList.value.forEach(async (item) => {
    const { data: res } = await axios.get(
      `https://api.huobi.pro/market/detail?symbol=${item.type}usdt`
    );
    item.price = res.tick.close;
    item.parcent = (
      ((res.tick.close - res.tick.open) / res.tick.open) *
      100
    ).toFixed(2);
    if (item.parcent > 0) {
      item.up = 1;
    }
    return item;
  });
};

setInterval(() => {
  getPrice();
},2000);

onMounted(() => {
  getPrice();
});
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
      <van-notice-bar left-icon="volume-o" :text="notice" color="ff2e63" />
    </div>
    <div class="grid">
      <div v-for="(item, index) in gridList" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="coin">
      <div v-for="(item, index) in coinList" :key="index">
        <span style="color: #323232;">{{ item.type.toUpperCase() }}/USDT</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.price }}</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.parcent }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  color: #222831;
  hr {
    border: 3px solid gray;
  }
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
  .grid {
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10px;
    background: #fffbe8;
    padding: 15px 0px;
    border-radius: 2px;
    div {
      width: 25%;
      height: auto;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      margin: 5px 0px;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 13px;
        margin-top: 3px;
      }
    }
  }
  .coin {
    width: auto;
    height: auto;
    display: flex;
    margin: 10px 0px;
    padding: 15px;
    font-weight: 600;
    justify-content: space-between;
    background: #fffbe8;
    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      span {
        margin: 2px 0px;
      }
      .up {
        color: #00b8a9;
      }
      .down {
        color: #e84545;
      }
    }
  }
}
</style>