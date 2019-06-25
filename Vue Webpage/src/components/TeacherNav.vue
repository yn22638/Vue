<template>
  <div class="TeacherNav">
    <ul>
      <li >
        <router-link to="Home" :style="[color]">{{shouye}}</router-link>
      </li>
      <li>
        <router-link to="/">{{student}}</router-link>
      </li>
      <li :style="[bgc]" >
        <router-link class="teachers" to="/Teachers">{{teacher}}</router-link>
      </li>
      <li>
        <router-link to="/">{{liuyan}}</router-link>
      </li>
      <li>
        <router-link to="/">{{school}}</router-link>
      </li>
      <li>
        <router-link to="/">{{shezhi}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TeacherNav",
  data() {
    return {
      shouye: "首页",
      student: "学生管理",
      teacher: "教师简介",
      liuyan: "留言板块",
      school: "校园论坛",
      shezhi: "设置",
      color:"",
      color: { color: "#51515d" },
      bgc : {"background-color":"#171746"},
    };
  },
  methods:{
    //点击事件
    // bgc() {
    //   this.color = {"color":"white"}
    //   this.bgc = {"background-color":"#171746"};
    // },
  }
};
</script>

<style>
.TeacherNav {
  float: left;
  width: 8.9%;
  height: 95.4%;
  background-color: #090919;
  float: left;
}
.TeacherNav ul {
  width: 100%;
  height: 36%;
  text-align: center;
  list-style: none;
  margin-top: 50px;
}
.TeacherNav ul li {
  height: 17%;
  line-height: 65px;
}
/* .HomeNav ul li:hover {
  background-color: #171746;
  color: white;
} */
.TeacherNav ul li a {
  text-decoration: none;
  color: #51515d;
}
.TeacherNav li  .teachers{
    color: aliceblue;
}
/* .HomeNav ul li a:hover {
  color: white;
} */
</style>
