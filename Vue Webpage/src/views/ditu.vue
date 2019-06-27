<template>
  <div class="ditu">
      <dituheader></dituheader>
      <HomeNav></HomeNav>
      <ditulist></ditulist>
      <ditubanner></ditubanner>
      <ditufooter></ditufooter>
  </div>
</template>

<script>
import dituheader from "../components/dituheader"
import HomeNav from "../components/HomeNav"
import ditulist from "../components/ditulist"
import ditubanner from "../components/ditubanner"
import ditufooter from "../components/ditufooter"
export default {
  name: "ditu",
  components: {
      dituheader,
      HomeNav,
      ditulist,
      ditubanner,
      ditufooter,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.ditu {
  width: 100%;
  height: 1080px;
}
</style>
