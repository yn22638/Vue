<template>
  <div class="StuRouter">
    <ul class="router">
      <li class="Computer">
        <router-link to="/StuContent">{{Computer}}</router-link>
      </li>
      <li class="preschool">
        <router-link to>{{preschool}}</router-link>
      </li>
    </ul>
    <ul class="claxx">
      <li class="calxxLi" v-for="item,index in StudnetList">{{item.name}}</li>
    </ul>
    <div class="operationstudent">
      <img class="pic" src="../assets/add.jpg" alt>
      <ul class="operation">
        <li>增加</li>
        <li>删除</li>
        <li>修改</li>
        <li>查看</li>
      </ul>
    </div>
    <div class="stucontent">
      <div class="query">
        <img class="picfdj" src="../assets/fdj.jpg" alt="">
        <input type="text" v-model="studentname" placeholder="输入关键字…">
      </div>
      <!-- <ul>
        <li v-for="item,index in StudentList">
          姓名
          <span>{{item.name}}</span>
          性别
          <span></span>
          成绩
          <span>{{item.}}</span>
          千分制
          <span>{{}}</span>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "StuRouter",
  data() {
    return {
      Computer: "计算机专业",
      preschool: "学前教育专业",
      StudnetList: [
        { name: "一班" },
        { name: "二班" },
        { name: "三班" },
        { name: "四班" }
      ],
      url: require("../assets/add.jpg")
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.StuRouter {
  float: left;
  height: 95.4%;
  width: 91.1%;
  /* border: 1px solid red; */
}
.StuRouter .router {
  width: 100%;
  height: 4.8%;
  border: 1px solid #cccccc;
}
.StuRouter .router .Computer {
  float: left;
  width: 49.8%;
  height: 100%;
  list-style: none;
  text-align: center;
}
.StuRouter .router .preschool {
  float: left;
  width: 49.8%;
  height: 100%;
  list-style: none;
  text-align: center;
}
.StuRouter .router li a {
  line-height: 50px;
  text-decoration: none;
  color: black;
}
.StuRouter .Computer {
  border-right: 2px solid #cccccc;
}
.StuRouter .Computer a {
  color: #0662de;
  border-bottom: 2px solid #0662de;
  padding-bottom: 1.5%;
}
.claxx {
  float: left;
  width: 95%;
  height: 4.8%;
  border-bottom: 2px solid #cccccc;
  margin-left: 2.9%;
}
.claxx .calxxLi {
  height: 39%;
  width: 24.5%;
  float: left;
  list-style: none;
  /* line-height: 50px; */
  margin-top: 1.1%;
  text-align: center;
  /* border: 1px solid red; */
  border-left: 2px solid #cccccc;
}
.operationstudent {
  display: block;
  line-height: 30px;
  overflow: hidden;
  position: relative;
  margin-top: 1%;
}
.operationstudent:hover {
  overflow: visible;
  /* width: 100px;
  height: 100px; */
}
/* .operationstudent .pic {
  width: 100%;
  height: 100%;
} */
.operationstudent .operation {
  float: left;
  position: absolute;
  right: 2%;
  /* top: 60%; */
  width: 6%;
  border: 1px solid;
  /* text-align: center; */
}
.operationstudent .operation li {
  width: 70%;
  border-bottom: 1px solid #cccccc;
  list-style: none;
  margin-left: 15%;
  text-align: center;
  /* position: absolute; */
  float: left;
  /* left: 10%; */
}
.stucontent{
  width: 94%;
  height: 85%;
  background-color: #f7f7f7;
  margin-left: 3.4%;
  margin-top: 1.2%;
}
.query input {
  width: 410px;
  height: 54px;
  margin-top: 1.4%;
  margin-left: 2.2%;
  padding-left: 5%;
  background-color: #f7f7f7;
  border: 1px solid black;
  /* border-radius: 20%; */
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border-bottom-right-radius: 25%;
  border-bottom-left-radius: 25%;
  /* transform: skew(10deg,10deg) */
}
.picfdj{
  position: absolute;
  top: 21%;
  left: 15%;
}
</style>
