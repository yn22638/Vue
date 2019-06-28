<template>
  <div class="Student">
    <dituheader></dituheader>
    <StudentNav></StudentNav>
    <StuRouter></StuRouter>
  </div>
</template>

<script>
import dituheader from "../components/dituheader";
import StudentNav from "../components/StudentNav";
import StuRouter from "../components/StuRouter";
export default {
  name: "app",
  components: { dituheader, StudentNav,StuRouter, },
  data() {
    return {
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Student {
  width: 100%;
  height: 1080px;
}
</style>

