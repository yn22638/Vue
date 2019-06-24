<template>
  <div class="ditubanner">
    <img :src="ditu" alt="" class="weizhi">
  </div>
</template>

<script>
export default {
  name: "ditubanner",
  data() {
    return {
      fanhui: require("../assets/fanhui.png"),
      ditu:require("../assets/学校位置.png")
    };
  }
};
</script>

<style>
.ditubanner {
  float: left;
  width: 91.1%;
  height: 77%;
}
.ditubanner .weizhi{
    margin-top: 50px;
    margin-left: 11%;
    width: 79%;
    height: 94%;
}
</style>
