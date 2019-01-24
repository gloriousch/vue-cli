<template>
  <div class="movieDetail">
    {{$route.params.id}}
    <dl>
      <dt><img :src="`${details.images.small}`" alt=""></dt>
      <dd><p class="name" v-for="(n,index) in details.aka" :key="index">{{n}}</p><p v-for="(c,index) in details.countries" :key="index">{{c}}</p></dd>
    </dl>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      details: []
    };
  },
  created() {
    axios
      .get(
        global.proxyURL +
          "https://api.douban.com/v2/movie/subject/" +
          this.$route.params.id
      )
      .then(res => {
        console.log(res.data);
        this.details = res.data;
      })
      .catch(() => {
        console.log("请求失败");
      });
  }
};
</script>

<style scoped>
</style>