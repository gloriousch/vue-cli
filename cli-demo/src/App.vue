<template>
  <div id="app">
    <commonHeader></commonHeader>
    <div class="content">
      <router-view/>      
    </div>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
import commonHeader from "./components/common/commonHeader";
import commonFooter from "./components/common/commonfooter";
export default {
  name: "App",
  components: {
    commonHeader,
    commonFooter
  },
  data: {}
};
</script>

<style>
/* .clearfix::after {
  content: "";
  display: block;
  clear: both;
} */
html,
body {
  height: 100%;
}
a {
  color: #fff;
  outline: none;
}
.content {
  margin: 0.7rem 0;
  height: 100%;
}
</style>
