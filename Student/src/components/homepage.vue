<template>
  <div class="header">
    <img class="logo" :src="logo" alt="11">
    <span class="xyh">{{xyh}}</span>
    <img class="Headportrait" :src="headportrait" alt="22">
    <span class="xtgly">{{xtgly}}</span>
    <img class="envelope" :src="envelope" alt>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require("../pic/切图/logo/logo.png"),
      xyh: "小月环",
      headportrait: require("../pic/切图/logo/head-portrait.png"),
      xtgly: "系统管理员",
      envelope: require("../pic/切图/logo/envelope.png")
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #282955;
}
.header .logo {
  margin-left: 1.5%;
  float: left;
  margin-top: 0.25%;
}
.header .xyh {
  font-family: "宋体";
  float: left;
  color: white;
  margin-left: 0.8%;
  margin-top: 1%;
}
.header .Headportrait {
  position: absolute;
  float: left;
  left: 84%;
  top: 1%;
}
.header .xtgly {
  position: absolute;
  float: left;
  color: white;
  font-size: 15px;
  left: 87%;
  top: 2%;
  font-family: "楷体";
}
.header .envelope {
  position: absolute;
  float: right;
  right: 3%;
  top: 1.5%;
}
</style>
