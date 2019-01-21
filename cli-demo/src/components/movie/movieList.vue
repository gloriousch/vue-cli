<template>
  <div class="movieList">
    <img class="movieHead" src="../../assets/logo.png" alt="">
    <div class="movieBody">
      <p class="name">{{title}}</p>
      <p class="desc"><span v-for="(t,i) in type" :key=i >{{t}}</span> {{year}} {{avg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "type", "year", "avg"]
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
</style>