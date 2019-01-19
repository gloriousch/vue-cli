<template>
    <div class="movieNav">
        <ul class="movieNavs">
            <li>近期热映</li>
            <li>即将上演</li>
            <li>top25</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.movieNavs {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: lightblue;
  display: flex;
  position: fixed;
  top: 0.7rem;
}
.movieNavs li {
  flex: 1;
  text-align: center;
}
</style>