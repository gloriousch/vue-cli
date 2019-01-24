<template>
  <div class="movie">
    <movieNav></movieNav>
    <movieList></movieList>
  </div>
</template>

<script>
import movieNav from "./movieNav";
import movieList from "./movieList";
export default {
  name: "movie",
  data() {
    return {};
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