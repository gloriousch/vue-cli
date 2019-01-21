<template>
  <div class="movie">
    <movieNav></movieNav>
    <movieList v-for="(obj,index) in movieList" :key="index" :title="obj.title" :year="obj.year" :type="obj.type" :avg="obj.avg"></movieList>
  </div>
</template>

<script>
import movieNav from "./movieNav";
import movieList from "./movieList";
export default {
  name: "movie",
  data() {
    return {
      movieList: [
        { title: "aa", year: "2015", type: "A,B,C", avg: "1" },
        { title: "bb", year: "2016", type: "C,D", avg: "2" },
        { title: "cc", year: "2017", type: "D,E", avg: "3" }
      ]
    };
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