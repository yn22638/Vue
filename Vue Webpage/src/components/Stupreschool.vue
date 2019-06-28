<template>
  <div class="Stupreschool">
    <ul class="router">
      <li class="Computer">
        <router-link to="/Student" >{{Computer}}</router-link>
      </li>
      <li class="preschool">
        <router-link to="/Sutdentpreschool" class="a">{{preschool}}</router-link>
      </li>
    </ul>


    <ul class="claxx">
      <li class="calxxLi" v-for="item,index in StudnetList"><a href="">{{item.name}}</a></li>
    </ul>
    <div class="operationstudent">
      <img class="pic" src="../assets/add.jpg" alt>
      <ul class="operation">
        <li>
          <button class="addbtn">增加
            <form action="" @submit.prevent="addclass" class="addclass">
              <input type="text" v-model="add">
              <input type="submit" value="添加">
            </form>
          </button>
        </li>
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
      <ul class="stunews">
        <li class="DataType">
          <span>姓名</span>
          <span>性别</span>
          <span>成绩</span>
          <span>千分制</span>
        </li>
        <li class="newsli" v-for="item,index in StudentList">
          
          <span>{{item.name}}</span>
          
          <span>{{item.sex}}</span>
          
          <span>{{item.achievement}}</span>
          
          <span>{{item.thousand}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stupreschool",
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
      url: require("../assets/add.jpg"),
      StudentList:[
        {
          name:'赵',
          sex:'女',
          achievement:"100",
          thousand:'1000',
        },
        {
          name:'赵',
          sex:'女',
          achievement:"100",
          thousand:'1000',
        },
        {
          name:'赵',
          sex:'女',
          achievement:"100",
          thousand:'1000',
        },
      ],
      studentname:'',
      addclass:'',
      add:'',
    };
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Stupreschool {
  float: left;
  height: 95.4%;
  width: 91.1%;
  /* border: 1px solid red; */
}
.Stupreschool .router {
  float: left;
  width: 100%;
  height: 4.8%;
  border: 1px solid #cccccc;
}
.Stupreschool .router .Computer {
  float: left;
  width: 49.8%;
  height: 100%;
  list-style: none;
  text-align: center;
}
.Stupreschool .router .preschool {
  float: left;
  width: 49.8%;
  height: 100%;
  list-style: none;
  text-align: center;
}
.Stupreschool .router li a {
  line-height: 50px;
  text-decoration: none;
  color: black;
}
.Stupreschool .Computer {
  border-right: 2px solid #cccccc;
}
.Stupreschool .preschool .a {
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
.claxx .calxxLi a{
  color: #000;
  text-decoration: none;
}
.operationstudent {
  display: block;
  line-height: 30px;
  overflow: hidden;
  position: relative;
  border: 1px solid white;
  margin-top: 5%;
}
.operationstudent:hover {
   overflow: visible;
   /* height: 3%;
   margin-top: 4%; */
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
  margin-top: 0.15%;
  float: left;
}
.query input {
  width: 410px;
  height: 54px;
  margin-top: 1.4%;
  margin-left: 2.2%;
  padding-left: 5%;
  background-color: #f7f7f7;
  border: 1px solid black;
  border-radius: 50px;
}
.picfdj{
  position: absolute;
  top: 22%;
  left: 15%;
}
.stunews{
  width: 100%;
  height: 87%;
  /* border: 1px solid red; */
  margin-top: 2%;
}
.stunews .newsli{
  width: 100%;
  height: 5%;
  float: left;
  list-style: none;
  /* border: 1px solid red; */
}
.stunews .DataType{
  height: 3%;
  list-style: none;
}
.stunews .DataType span{
  /* clear: both; */
  width: 25%;
  float: left;
  text-align: center;
}
.stunews .newsli span{
  /* clear: both; */
  width: 25%;
  float: left;
  text-align: center;
  line-height: 240%;
  /* border-bottom: 1px solid red; */
}
.addclass{
  position: absolute;
  right: 400%;
  top: 50%;
}
.addbtn{
  display: block;
  /* line-height: 30px; */
  overflow: hidden;
  position: relative;
  /* margin-top: 1%; */
}
.addbtn:hover{
  overflow: visible;
}
</style>
