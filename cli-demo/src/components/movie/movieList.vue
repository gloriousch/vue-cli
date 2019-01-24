<template>
  <div class="movieLists">
    <dl  class="movieList clearfix" v-for="(obj,index) in movieListss" :key="index"  @click="goToDetail(obj.id)">
      <dt>
        <img class="movieHead" :src="`${obj.images.small}`" alt="">      
      </dt>
    <dd class="movieBody">
      <p class="name">{{obj.title}}</p>
      <p class="desc"><span v-for="(t,i) in obj.genres" :key=i >{{t}}|</span> {{obj.year}} {{obj.average}}</p>
      <!-- <p>{{obj.id}}</p> -->
    </dd>
    </dl>
  </div>
</template> 

<script>
import Axios from "axios";
export default {
  // props: ["title", "genres", "year", "average", "picUrl"]
  data() {
    return {
      movieListss: [
        // { title: "aa", year: "2015", type: "A,B,C", avg: "1" },
        // { title: "bb", year: "2016", type: "C,D", avg: "2" },
        // { title: "cc", year: "2017", type: "D,E", avg: "3" }
      ]
    };
  },
  methods: {
    getMovies() {
      Axios.get(
        global.proxyURL +
          "https://api.douban.com/v2/movie/in_theaters?city=广州&start=" +
          this.movieListss.length +
          "&count=10"
      )
        .then(res => {
          //扩展字符串...  可以作为数组的一部分
          this.movieListss = [...this.movieListss, ...res.data.subjects];

          // this.movieListss = res.data.subjects;
          // console.log(this.movieListss.length);
        })
        .catch(() => {
          console.log("请求失败");
        });
    },
    goToDetail(id) {
      this.$router.push("/movieDetail/" + id);
    }
  },
  created() {
    //****this
    this.getMovies();
  },
  mounted() {
    window.onscroll = () => {
      //滚动条滚动的高度
      var scrollTop = Math.ceil(document.documentElement.scrollTop);
      //可视区域的高度
      let clientHeight = document.documentElement.clientHeight;
      //页面整体高度
      let scrollHeight = document.documentElement.scrollHeight;
      console.log("滚动了", scrollTop);
      console.log("可视区域为", clientHeight);
      console.log("整体高度为", scrollHeight);
      if (scrollHeight == scrollTop + clientHeight) {
        console.log("到底了");
        this.getMovies();
      }
    };
  }
};
</script>

<style scoped>
.movieHead {
  float: left;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.1rem 0.3rem;
}
.movieBody {
  float: left;
  height: 1rem;
  width: calc(95% - 1.4rem);
  border-bottom: 1px solid #dadada;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  /* font-size: 0;
  line-height: 1rem; */
}
.movieBody .name {
  padding-top: 0.1rem;
}
.movieBody .desc {
  font-size: 0.2rem;
}
.movieBody p {
  /* font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0.2rem;
  white-space: nowrap; */
}
.clearfix::after {
  content: "";
  clear: both;
  display: block;
}
</style>