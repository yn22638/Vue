<template>
  <div class="Sutdentpreschool">
    <dituheader></dituheader>
    <StudentNav></StudentNav>
    <Stupreschool></Stupreschool>
  </div>
</template>

<script>
import dituheader from "../components/dituheader";
import StudentNav from "../components/StudentNav";
import Stupreschool from "../components/Stupreschool";
export default {
  name: "Sutdentpreschool",
  components: { dituheader, StudentNav,Stupreschool },
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Sutdentpreschool {
  width: 100%;
  height: 1080px;
}
</style>
