<script setup>
import { ref } from "vue";

const mineList = ref([
  {
    name: "阿瓦隆矿机1246 90T",
    price: "300.00",
    cycle: "1",
    parcent: "0.6",
  },
  {
    name: "阿瓦隆矿机1246 90T",
    price: "300.00",
    cycle: "4",
    parcent: "1.8",
  },
  {
    name: "阿瓦隆矿机1246 90T",
    price: "300.00",
    cycle: "4",
    parcent: "0.8",
  },
  {
    name: "蚂蚁矿机 S19PRO-110T",
    price: "1349.00",
    cycle: "4",
    parcent: "0.8",
  },
  {
    name: "蚂蚁矿机L7-9050M",
    price: "5000.00",
    cycle: "4",
    parcent: "0.8",
  },
  {
    name: "阿瓦隆1246-90T",
    price: "6000.00",
    cycle: "4",
    parcent: "0.8",
  },
]);
</script>

<template>
  <div class="mining">
    <div class="header">
      <span></span>
      <span>矿机列表</span>
      <span></span>
    </div>
    <div class="box">
      <div class="per" v-for="(item, index) in mineList" :key="index">
        <h3>{{ item.name }}</h3>
        <div>
          <span>价格</span><span>{{ item.price }}USDT</span>
        </div>
        <div>
          <span>周期</span><span>{{ item.cycle }}天</span>
        </div>
        <div>
          <span>收益</span><span>{{ item.parcent }}%</span>
        </div>
        <button>购买</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mining {
  width: auto;
  height: auto;
  padding: 15px 15px 60px 15px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .per {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      background: #fffbe8;
      padding: 15px;
      margin: 15px 0px;
      h3 {
        color: #364f6b;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0px;
        span {
          font-size: 14px;
          font-weight: 600;
          color: #f6416c;
        }
      }
      button {
        border: 0;
        border-radius: 2px;
        width: auto;
        height: 35px;
        color: #fff;
        background: #2c63e4;
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }
}
</style>