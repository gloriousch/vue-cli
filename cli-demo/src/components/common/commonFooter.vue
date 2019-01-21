<template>
  <div class="commonfooter">
    <ul class="footerTabs" :style="{background:$store.state.bgColor}">
      <li v-for="(tabItem,index) in tabArr" :key="index" @click="$store.commit('change',tabItem.getColor)"><router-link :to="`${tabItem.url}`">{{tabItem.tab}}</router-link></li>
      <!-- <li :class="{active:curTab}" @click="$store.commit('change','lightblue')"><router-link to="/">电影</router-link></li> -->
      <!-- <li @click="$store.commit('change','lightgray')"><router-link to="/music">音乐</router-link></li> -->
      <!-- <li @click="$store.commit('change','lightsalmon')"><router-link to="/photo">相册</router-link></li> -->
      <!-- <li @click="$store.commit('change','skyblue')"><router-link to="/mine">我的</router-link></li> -->
    </ul>
  </div>
</template>

<script>
import store from "../../vuex/store.js";
export default {
  store,
  data() {
    return {
      curTab: false,
      tabArr: [
        { getColor: "lightblue", url: "/", tab: "电影" },
        { getColor: "lightgray", url: "/music", tab: "音乐" },
        { getColor: "lightsalmon", url: "/photo", tab: "相册" },
        { getColor: "skyblue", url: "/mine", tab: "我的" }
      ]
    };
  },
  methods: function addClass() {
    this.curTab = !this.curTab;
  }
};
</script>

<style scoped>
.footerTabs {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: lightsalmon;
  display: flex;
  position: fixed;
  bottom: 0;
}
.footerTabs li {
  flex: 1;
  text-align: center;
}
.active {
  background-color: #fff;
}
.router-link-exact-active {
  color: #000;
}
</style>