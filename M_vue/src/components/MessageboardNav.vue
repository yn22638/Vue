<template>
  <div class="MessageboardNav">
    <ul>
      <li>
        <router-link to="Home">{{shouye}}</router-link>
      </li>
      <li>
        <router-link to="/Student">{{student}}</router-link>
      </li>
      <li>
        <router-link to="/Teachers">{{teacher}}</router-link>
      </li>
      <li :style="[liuyanbgc]">
        <router-link to="/Messageboard" :style="[liuyancolor]">{{liuyan}}</router-link>
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
  name: "MessageboardNav",
  data() {
    return {
      shouye: "首页",
      student: "学生管理",
      teacher: "教师简介",
      liuyan: "留言板块",
      school: "校园论坛",
      shezhi: "设置",
      color:"",
      liuyancolor : { color: "white" },
      liuyanbgc: {"background-color":"#171746"},
    };
  },
  methods:{
    // 点击事件
    // bgc() {
    //   this.color = {"color":"white"}
    //   this.bgc = {"background-color":"#171746"};
    // },
  }
};
</script>

<style scoped>
.MessageboardNav {
  float: left;
  width: 8.9%;
  height: 95.4%;
  background-color: #090919;
  float: left;
      /* position: absolute; */
}
.MessageboardNav ul {
  width: 100%;
  height: 36%;
  text-align: center;
  list-style: none;
  margin-top: 50px;
}
.MessageboardNav ul li {
  height: 17%;
  line-height: 65px;
}
/* .HomeNav ul li:hover {
  background-color: #171746;
  color: white;
} */
.MessageboardNav ul li a {
  text-decoration: none;
  color: #51515d;
}
/* .HomeNav ul li a:hover {
  color: white;
} */
</style>
