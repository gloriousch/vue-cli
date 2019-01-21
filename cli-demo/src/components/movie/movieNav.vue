<template>
    <div class="movieNav">
        <ul class="movieNavs">
            <li><router-link to="">近期热映</router-link></li>
            <li><router-link to="">即将上演</router-link></li>
            <li><router-link to="">top25</router-link></li>
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
}
.movieNavs li {
  flex: 1;
  text-align: center;
}
</style>