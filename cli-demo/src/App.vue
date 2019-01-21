<template>
  <div id="app">
    <commonHeader></commonHeader>
    <router-view/>
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
a {
  color: #fff;
  outline: none;
}
</style>
