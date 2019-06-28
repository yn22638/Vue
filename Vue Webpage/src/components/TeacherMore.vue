<template>
    <div class="big" > 
      <router-link to="/Teachers">  <img :src="fh" alt=""></router-link>
        <div class="TeacherMore">
          <span class="name" >{{enh}}</span>
          <hr class="xhx" >
          <img class="pic" :src="ren" alt="">
          <ul>
              <ul class="xb" >
                  <li>{{xb}}</li>
                  <li>{{mz}}</li>
              </ul>
              <ul class="ss">
                  <li>{{sj}}</li>
                  <li>{{ssd}}</li>
              </ul>
              <ul class="sx" >
                  <li>{{sjzy}}</li>
                  <li>{{xx}}</li>
              </ul>
              <ul class="sj" >
                  <li>{{sjbj}}</li>
                  <li>{{szbm}}</li>
              </ul>
                  <ul class="js" >
                  <li>{{jm}}</li>
                  <li>{{sf}}</li>
              </ul>
                 </ul>
                  <ul class="cc" >
                  <li>{{cysj}}</li>
                  <li>{{cynx}}</li>
              </ul>
                  </ul>
                  <ul class="cj" >
                  <li>{{cjmx}}</li>
                  <li class="szgx" >{{szgx}}</li>
              </ul>
              <span class="jxzl" >{{jxzl}}</span>
              <span class="jxsy" >{{jxsy}}</span>
          </ul>
                  <el-row>
                <el-button class="bj" type="primary" plain> <span class="wz" >{{bj}}</span> </el-button>
                 <el-button class="qd" type="danger" plain><span class="wz_one" >{{qd}}</span></el-button>
            </el-row>
                <span class="jsly" >{{jsly}}</span>
            <div class="ly" >
                <span class="ly_wz" >{{llzmsnh}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        fh:require("../assets/fanhui.png"),
        enh:"恩年华",
        ren:require("../assets/pic.png"),
        xb:"性别:女",
        mz:"民族：汉",
        sj:"手机:1008695574174",
        ssd:"所属地:帝都",
        sjzy:"所教专业：计算机专业",
        xx:"学校:盛邦升华",
        sjbj:"所教班级：计算机一班",
        szbm:"所在部门:学工部",
        jm:"教名：教员",
        sf:"是否有教师职业证:是",
        cysj:"从业时间：2017/07/19",
        cynx:"从业年限:七年",
        cjmx:"曾教名校:玛丽苏高等贵族学院",
        szgx:"所做贡献：上海省帝都市第一教师",
        jxzl:"教学质量:优",
        jxsy:"教学素养：谦虚有礼，对学生从未存在好善坏恶，对同事无评定高低之分，遇到问题向同事虚心求教。",
        bj:"编辑",
        qd:"确定",
        jsly:"教师留言：",
        llzmsnh:"历历在目思年华",
    };
  },
};
</script>
<style>

.big{
    width: 100%;
  /* height: 95.37%; */
    height: 1030px;
    background-color: #e5e5e5;
    float: left;
}
.big img{
    margin-left: 10px;
float: left;
}
.big .TeacherMore{
    width: 50%;
    height: 959px;
    background-color: white;;
    margin-left: 25%;
    margin-top: 2%;
}
.big .TeacherMore .name{
float: left;
margin-left: 5%;
   font-weight: 900;
margin-top: 5%;
}
.big .TeacherMore .xhx{
    width: 40%;
    height: 1px;
    float: left;
    margin-top: 10%;
    margin-left: -10%;


    background-color: #dcdcdc;
}
.big .TeacherMore .pic{
    float: right;
    margin-top: 3%;
    margin-right: 5%;
}
.big .TeacherMore .xb{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 16%;
    margin-left: -44.5%;
}
.big .TeacherMore .xb li{
    float: left;
    font-size: 12px;
    margin-left: 62px;
   font-weight: 900;
}
.big .TeacherMore .ss{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 21%;
    margin-left: -49.5%;
}
.big .TeacherMore .ss li{
    float: left;
    font-size: 12px;

    margin-left: 58px;
   font-weight: 900;
}
.big .TeacherMore .sx{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 27%;
    margin-left: -49.5%;
}
.big .TeacherMore .sx li{
    float: left;
    font-size: 12px;

    margin-left: 56.5px;
   font-weight: 900;
}
.big .TeacherMore .sj{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 33%;
    margin-left: -49.5%;
}
.big .TeacherMore .sj li{
    float: left;
    margin-left: 50px;
    font-size: 12px;

   font-weight: 900;
}
.big .TeacherMore .js{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 38%;
    margin-left: -49.5%;
}
.big .TeacherMore .js li{
    float: left;
    margin-left: 50px;
    font-size: 12px;

   font-weight: 900;
}
.big .TeacherMore .cc{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 43%;
    margin-left: -50%;
}
.big .TeacherMore .cc li{
    float: left;
    font-size: 12px;

    margin-left: 50px;
   font-weight: 900;
}
.big .TeacherMore .cj{
    width: 50%;
    height: 10px;
    list-style: none;
    float: left;
    margin-top: 47%;
    margin-left: -50%;
}
.big .TeacherMore .cj li{
    float: left;
    font-size: 12px;

    margin-left: 50px;
   font-weight: 900;
}
.big .TeacherMore .cj .szgx{
    float: right;
    margin-right: -75px;
   font-weight: 900;
}
.big .TeacherMore .jxzl{
    width: 50%;
    height: 10px;
    float: left;
    margin-top: 51%;
    margin-left: -43.5%;
    font-size: 12px;

   font-weight: 900;
}
.big .TeacherMore .jxsy{
    width: 97%;
    height: 10px;
    float: right;
    margin-top: -1.5%;
    margin-right: -20%;
 
    font-size: 12px;
   font-weight: 900;
}
.big .TeacherMore .bj{
    width: 73px;
    height: 35px;
    background-color: #0662de;
    border: 1px solid #ffffff;
    margin-left: 12%;
    margin-top: 15%;
    border-radius: 15px;
}
.big .TeacherMore .bj .wz{
    color: #ffffff;
    line-height: 1px;
}
.big .TeacherMore .qd{
    width: 73px;
    height: 35px;
    background-color: #c26767;
    border: 1px solid #ffffff;
    margin-left: 1%;
    margin-top: 15%;
    border-radius: 15px;
}
.big .TeacherMore .qd .wz_one{
    color: #ffffff;
}
.big .TeacherMore .jsly{
    float: left;
    margin-top: 10%;
    margin-left: 5%;
    font-size: 14px;
    font-weight: 900;
}
.big .TeacherMore .ly{
    width: 95%;
    height: 350px;
    float: left;
    margin-top: 5px;
    margin-left: 20px;
    background-color: #f8f8f8;
}
.big .TeacherMore .ly .ly_wz{
    float: left;
    font-size: 14px;
    font-family: "宋体";
    margin-top: 13px;
    margin-left: 12px;
    color:#7d7d7d;
}
</style>
