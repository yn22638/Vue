<template>
  <div class="Teacherheader">
    <img :src="logo" alt class="logo">
    <img :src="touxiang" alt class="touxiang">
    <span>{{guanliyuan}}</span>
    <img :src="xinxi" alt="" class="xinxi">
  </div>
</template>
<script>
export default {
  name: "Teacherheader",
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

.Teacherheader {
  height: 50px;
  width: 100%;
  background-color: #282955;
}
.Teacherheader .logo {
  float: left;
  width: 6%;
  height:70%;
  margin-left: 1.8%;
  margin-top: 0.5%;
}
.Teacherheader .touxiang {
  float: left;
  margin-left: 77.4%;
  margin-top: 0.4%;
}
.Teacherheader span {
  float: left;
  color: white;
  font-size: 12px;
  line-height: 50px;
  margin-left: 0.7%;
}
.Teacherheader  .xinxi{
    height: 46%;
    width: 2.3%;
    float:right;
    margin-top: 0.8%;
    margin-right: 47px;
}
</style>
