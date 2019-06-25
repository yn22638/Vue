<template>
  <div class="Home">
    <Homeheader></Homeheader>
    <HomeNav></HomeNav>
    <HomeCont></HomeCont>
  </div>
</template>

<script>
import Homeheader from "../components/Homeheader";
import HomeNav from "../components/HomeNav";
import HomeCont from"../components/HomeCont";
export default {
  name: "Home",
  components: {
    Homeheader,
    HomeNav,
    HomeCont,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Home {
  width: 100%;
  height: 1080px;
}
</style>
