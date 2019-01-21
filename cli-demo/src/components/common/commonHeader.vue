<template>
  <div class="commonHeader" :bigTitle="bigTitle" :style="{backgroundColor:bgClr}">
		<div class="btn">首页</div>
		<!-- <h2>{{bigTitle}}</h2> -->
    <h2>movie</h2>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  props: ["bgClr"],
  data() {
    return {
      // bigTitle: ""
    };
  }
  // methods: {
  //   childByValue: function(childValue) {
  //     // childValue就是子组件传过来的值
  //     this.name = childValue;
  //   }
  // }
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