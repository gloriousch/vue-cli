<template>
  <div class="movie">
    <movieNav></movieNav>
  </div>
</template>

<script>
import movieNav from "./movieNav";
export default {
  name: "movie",
  data() {
    return {};
  },
  components: {
    movieNav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>