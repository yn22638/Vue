<template>
  <div class="teachers">
    <Homeheader></Homeheader>
    <TeacherNav></TeacherNav>
    <Teacher></Teacher>
  </div>
</template>
<script>
import Homeheader from "../components/Homeheader";
import Teacher from "../components/Teacher";
import TeacherNav from "../components/TeacherNav";

export default {
  name: "Teachers",
  data() {
    return {};
  },
  components: {Homeheader,Teacher,TeacherNav}
};
</script>
<style>
  .teachers{
    width: 100%;
    height: 1080px;
  }
</style>

