<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<template>
  <div class="index">
    <RouterView/>
    <van-tabbar v-model="active" active-color="#ff2e63" route>
      <van-tabbar-item to="/home"
        ><span class="material-symbols-outlined"> home </span><br />
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/quote">
        <span class="material-symbols-outlined"> monitoring </span><br />
        <span>行情</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mining">
        <span class="material-symbols-outlined"> landscape </span><br />
        <span>矿机</span>
      </van-tabbar-item>
      <van-tabbar-item to="/contract">
        <span class="material-symbols-outlined"> list_alt </span><br />
        <span>合约</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span class="material-symbols-outlined"> person </span><br />
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>