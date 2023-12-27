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

const videoList = ref([
  {
    poster: "https://www.rhy.zone/static/web/img/bigt_21.jpg",
    src: "https://www.rhy.zone/static/web/video/rhy21.mp4",
  },
  {
    poster: "https://www.rhy.zone/static/web/img/bigt_02.jpg",
    src: "https://www.rhy.zone/static/web/video/rhy02.mp4",
  },
  {
    poster: "https://www.rhy.zone/static/web/img/bigt_16.jpg",
    src: "https://www.rhy.zone/static/web/video/rhy16.mp4",
  },
]);

const infoList = ref([
  {
    img: "https://www.rhy.zone/static/web/img/bigt_02.jpg",
    title: "2022年，比特币算力或将达到300 EH/s，如何降低挖矿成本？",
    content:
      "据 BTC.com数据，在哈萨克斯坦恢复网络后，近三日比特币挖矿全网算力已经超过 200EH/s，达到历史新高。此前外界普遍预计，2022年比特币全网算力将达到300",
  },
  {
    img: "https://www.rhy.zone/static/web/img/bigt_02.jpg",
    title: "2022年，比特币算力或将达到300 EH/s，如何降低挖矿成本？",
    content:
      "据 BTC.com数据，在哈萨克斯坦恢复网络后，近三日比特币挖矿全网算力已经超过 200EH/s，达到历史新高。此前外界普遍预计，2022年比特币全网算力将达到300",
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
}, 2000);

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
        <span style="color: #323232">{{ item.type.toUpperCase() }}/USDT</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.price }}</span>
        <span :class="item.up == 1 ? 'up' : 'down'">{{ item.parcent }}%</span>
      </div>
    </div>
    <div class="shot">
      <div class="title">
        <div>
          <span class="left"></span>
          <p>矿场实景</p>
        </div>
        <div>
          <span>更多</span>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
      <div class="shot_list">
        <video
          v-for="(item, index) in videoList"
          :key="index"
          width="330"
          height="130"
          controls
          :poster="item.poster"
        >
          <source :src="item.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div class="info">
      <div class="title">
        <div>
          <span class="left"></span>
          <p>资讯</p>
        </div>
        <div>
          <span>更多</span>
          <span class="material-symbols-outlined"> chevron_right </span>
        </div>
      </div>
      <div class="content">
        <div class="box" v-for="(item, index) in infoList" :key="index">
          <img :src="item.img" alt="" />
          <div>
            <span>{{ item.title }}</span>
            <p>
              {{ item.content }}
            </p>
          </div>
        </div>
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
    border: 3px solid rgb(195, 195, 195);
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
  .shot {
    width: auto;
    height: auto;
    background: #fffbe8;
    padding: 15px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      .left {
        width: 5px;
        height: 20px;
        background: linear-gradient(to bottom, #ff2e63, #e3fdfd);
        margin-right: 10px;
      }
      p {
        font-weight: 600;
        font-size: 17px;
      }
      div {
        display: flex;
        align-items: center;
      }
    }
    .shot_list {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      video {
        margin: 10px 0px;
      }
    }
  }
  .info {
    margin-top: 15px;
    width: auto;
    height: auto;
    background: #fffbe8;
    padding: 15px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      .left {
        width: 5px;
        height: 20px;
        background: linear-gradient(to bottom, #ff2e63, #e3fdfd);
        margin-right: 10px;
      }
      p {
        font-weight: 600;
        font-size: 17px;
      }
      div {
        display: flex;
        align-items: center;
      }
    }
    .content {
      padding-bottom: 20px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .box {
        margin-top: 15px;
        padding: 10px 0px;
        width: auto;
        height: 80px;
        padding-bottom: 5px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: space-between;
        div {
          padding-left: 10px;
        }
        img {
          width: 140px;
          height: 80px;
        }
        span {
          font-weight: 600;
          font-size: 14px;
        }
        p {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; //显示的行
        }
      }
    }
  }
}
</style>