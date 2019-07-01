<template>
  <div class="Student">
    <StudentHeader></StudentHeader>
    <StudentNav></StudentNav>
  </div>
</template>

<script>
import StudentHeader from "../components/StudentHeader";
import StudentNav from "../components/StudentNav";
export default {
  name: "app",
  components: { StudentHeader, StudentNav,},
  data() {
    return {
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Student {
  width: 100%;
  height: 1080px;
}
</style>

