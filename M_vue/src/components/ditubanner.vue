<template>
  <div class="ditubanner">
    <BaiduMap></BaiduMap>
  </div>
</template>

<script>
import BaiduMap from '../components/BaiduMap';
export default {
  name: "ditubanner",
  // data() {
  //   return {
  //     fanhui: require("../assets/fanhui.png"),
  //     ditu:require("../assets/学校位置.png")
  //   };
  // }
  components:{
    BaiduMap,
  }
};
</script>

<style>
.ditubanner {
  float: left;
  width: 91.1%;
  height: 77%;
}

</style>
