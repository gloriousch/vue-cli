<template>
  <div class="commonfooter">
    <ul class="footerTabs">
      <li>电影</li>
      <li>音乐</li>
      <li>相册</li>
      <li>我的</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footerTabs {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: lightblue;
  display: flex;
  position: fixed;
  bottom: 0;
}
.footerTabs li {
  flex: 1;
  text-align: center;
}
</style>