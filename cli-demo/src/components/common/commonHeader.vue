<template>
  <div class="commonHeader">
		<div class="btn">首页</div>
		<h2>movie</h2>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commonHeader {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: lightblue;
  display: flex;
  position: fixed;
  top: 0;
}
.commonHeader .btn {
  float: left;
  text-align: center;
  width: 0.7rem;
  height: 0.7rem;
}
.commonHeader h2 {
  text-align: center;
  flex: 1;
  margin-left: -1rem;
}
</style>