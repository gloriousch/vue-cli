<template>
  <div class="movie">
    <movieNav></movieNav>
    <movieList v-for="(obj,index) in movieListss" :key="index" :title="obj.title" :picUrl="obj.images.small" :year="obj.year" :genres="obj.genres" :average="obj.average"></movieList>
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
  created() {
    Axios.get(
      global.proxyURL + "https://api.douban.com/v2/movie/in_theaters"
    ).then(res => {
      // console.log("111", res.data.subjects);
      this.movieListss = res.data.subjects;
    });
  },
  components: {
    movieNav,
    movieList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>