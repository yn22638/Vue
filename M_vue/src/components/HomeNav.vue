<template>
  <div class="HomeNav">
    <ul>
      <li :style="[bgc]">
        <router-link to="Home" :style="[color]">{{shouye}}</router-link>
      </li>
      <li>
        <router-link to="/Students">{{student}}</router-link>
      </li>
      <li>
        <router-link to="/Teachers">{{teacher}}</router-link>
      </li>
      <li>
        <router-link to="/Messageboard">{{liuyan}}</router-link>
      </li>
      <li>
        <router-link to="/Bbs">{{school}}</router-link>
      </li>
      <li>
        <router-link to="/">{{shezhi}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
  data() {
    return {
      shouye: "首页",
      student: "学生管理",
      teacher: "教师简介",
      liuyan: "留言板块",
      school: "校园论坛",
      shezhi: "设置",
      color:"",
      color: { color: "white" },
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

<style scoped>
.HomeNav {
  float: left;
  width: 8.9%;
  height: 95.4%;
  background-color: #090919;
  float: left;
}
.HomeNav ul {
  width: 100%;
  height: 36%;
  text-align: center;
  list-style: none;
  margin-top: 50px;
}
.HomeNav ul li {
  height: 17%;
  line-height: 65px;
}
/* .HomeNav ul li:hover {
  background-color: #171746;
  color: white;
} */
.HomeNav ul li a {
  text-decoration: none;
  color: #51515d;
}
/* .HomeNav ul li a:hover {
  color: white;
} */
</style>
