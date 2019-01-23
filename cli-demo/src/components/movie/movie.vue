<template>
  <div class="movie">
    <movieNav></movieNav>
    <movieList @click="goToDetail()" v-for="(obj,index) in movieListss" :key="index" :title="obj.title" :picUrl="obj.images.small" :year="obj.year" :genres="obj.genres" :average="obj.average"></movieList>
  </div>
</template>

<script>
import movieNav from "./movieNav";
import movieList from "./movieList";
import Axios from "axios";
export default {
  name: "movie",
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
          "https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10"
      )
        .then(res => {
          this.movieListss = res.data.subjects;
        })
        .catch(() => {
          console.log("请求失败");
        });
    },
    goToDetail() {
      // this.$router.push("/movieDetail");
      console.log(222);
    }
  },
  components: {
    movieNav,
    movieList
  },
  created() {
    //****this
    this.getMovies();
  },
  mounted() {
    window.onscroll = () => {
      //滚动条滚动的高度
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //可视区域的高度
      let clientTop = document.documentElement.clientHeight;
      //页面整体高度
      let scrollHeight = document.documentElement.scrollHeight;
      console.log("滚动了", scrollTop);
      console.log("可视区域为", clientTop);
      console.log("整体高度为", scrollHeight);
      if (scrollHeight === scrollTop + clientTop) {
        console.log("到底了");
        this.getMovies();
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>