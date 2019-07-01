<template>
  <div class="Bbs">
    <Homeheader></Homeheader>
    <BbsNav></BbsNav>
    <Bbscontent></Bbscontent>
    
  </div>
</template>

<script>
import Homeheader from "../components/Homeheader.vue";
import BbsNav from "../components/BbsNav.vue";
import Bbscontent from "../components/Bbscontent";
export default {
  name: "Bbs",
  components: {
    Homeheader,
    BbsNav,
    Bbscontent,
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Bbs {
  width: 100%;
  height: 1080px;
}
</style>
