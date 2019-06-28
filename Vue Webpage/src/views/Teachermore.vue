<template>
  <div class="teachermore">
       <Teacherheader></Teacherheader>
    <TeacherMore></TeacherMore>
  </div>
</template>
<script>
import Teacherheader from "../components/Teacherheader";
import TeacherMore from "../components/TeacherMore";

export default {
  name: "Teachermore",
  data() {
    return {};
  },
  components: {TeacherMore,Teacherheader}
};
</script>
<style>
  .teachers{
    width: 100%;
    height: 1080px;
  }
</style>

