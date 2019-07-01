<template>
  <div class="StudentHeader">
    <img :src="logo" alt class="logo">
    <img :src="touxiang" alt class="touxiang">
    <span>{{guanliyuan}}</span>
    <img :src="xinxi" alt="" class="xinxi">
  </div>
</template>

<script>
export default {
  name: "StudentHeader",
  data() {
    return {
      logo: require("../assets/logo.png"),
      touxiang: require("../assets/touxiang.png"),
      guanliyuan: "系统管理员",
      xinxi: require("../assets/xinxi.png"),
    };
  }
};
</script>

<style>
.StudentHeader {
  height: 4.63%;
  width: 100%;
  background-color: #282955;
  float: left;
}
.StudentHeader .logo {
  float: left;
  width: 6%;
  height: 80%;
  margin-left: 1.8%;
  margin-top: 0.3%;
}
.StudentHeader .touxiang {
  float: left;
  margin-left: 78.4%;
  margin-top: 0.4%;
}
.StudentHeader span {
  float: left;
  color: white;
  font-size: 12px;
  line-height: 50px;
  margin-left: 0.7%;
}
.StudentHeader .xinxi{
    height: 46%;
    width: 2.3%;
    float:right;
    margin-top: 0.8%;
    margin-right: 30px;
}
</style>
