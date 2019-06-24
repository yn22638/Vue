<template>
<div class="bgc">
    <SchoolInformation></SchoolInformation>
    <homepage></homepage>
    <Catalog></Catalog>
  <div class="SchoolInformation">
    <ul class="jump">
      <router-link class="ro" to="/SchoolInformation">
        <li class="xxxx">{{xxxx}}</li>
      </router-link>
      <li class="Delimiter">{{Delimiter}}</li>
      <router-link class="rl" to="/Schoollocation">
      <li class="xxwz">{{xxwz}}</li>
      </router-link>
    </ul>
    <hr class="xhx" >
    <ul class="pic">
      <li class="firstone">
        <img class="firstone" :src="firstone" alt="1">
      </li>
      <!-- <li>
        <img class="firsttwo" :src="firstone" alt="1">
      </li>
      <li>
        <img class="firstsherr" :src="firstone" alt="1">
      </li>
      <li>
        <img class="firsfore" :src="firstone" alt="1">
      </li>
      <li>
        <img class="firsfive" :src="firstone" alt="1">
      </li>-->
    </ul>
    <br>
    <h3 class="SchoolProfile">{{SchoolProfile}}</h3>
    <hr class="Underline_one">
    <div class="brief_introduction">
      <span class="paragraph_one">{{paragraph_one}}</span>
      <span class="paragraph_two">{{paragraph_two}}</span>
      <span class="paragraph_three">{{paragraph_three}}</span>
      <span class="paragraph_fore">{{paragraph_fore}}</span>
      <span class="paragraph_five">{{paragraph_five}}</span>
    </div>

    <div class="data">
      <h3 class="Schooldata">{{Schooldata}}</h3>
      <hr class="Underline_two">
      <span class="data_one">{{data_one}}</span>
      <span class="data_two">{{data_two}}</span>
      <span class="data_three">{{data_three}}</span>
      <span class="data_fore">{{data_fore}}</span>
    </div>
    <img class="school" :src="school" alt="55">
  </div>
  </div>
</template>
<script>
import homepage from  "@/components/homepage"
import Catalog from    "@/components/Catalog"
import SchoolInformation from "@/components/SchoolInformation"
export default {
  data() {
    return {
      xxxx: "学校信息",
      Delimiter: "|",
      xxwz: "学校位置",
      firstone: require("../pic/切图/照片轮播/firstone.jpg"),
      //   firsttwo: require("../pic/切图/照片轮播/firstone.jpg"),
      //   firstthree: require("../pic/切图/照片轮播/firstone.jpg"),
      //   firsfore: require("../pic/切图/照片轮播/firstone.jpg"),
      //   firsfive: require("../pic/切图/照片轮播/firstone.jpg")
      SchoolProfile: "学校简介",
      paragraph_one:
        "重庆市江津中学创建于1906年（清光绪32年）1953年即为四川省重点中学，重庆直辖后首批确认的重点中学。学校位于渝西鼎山之麓，长江之滨。 ",
      paragraph_two:
        "江津中学夙富革命传统，文化底蕴深厚，治学严谨、校风淳朴。百年来，辉煌的业绩享誉巴蜀，播名八方。以校友聂荣臻为代表的老一辈革命家从这里起步，以“ 白屋诗人”吴芳吉为代表的名师荟萃于此。“桃李芬芳，母校荣光”，这是江津中学百年历史的写照。 ",
      paragraph_three:
        "校园占地近300亩，分本部和分部。其中本部是重庆市重点文物单位，分部现为学校的主要教学、生活、运动区。学校宽阔恢弘，环境幽雅。亭榭楼阁，流水小桥，绿树繁花，荷风送爽，琅琅书声，鹿洞俨然。学校拥有多媒体校园网、闭路电视教学系统、后勤IC管理服务系统； 400M跑道的标准田径运动场、足球场、排球场、乒乓球场、体育馆、标准游泳池、网球场，国家一类标准的理、化、生实验设备，通用技术教室和数字化探究实验室。 ",
      paragraph_fore:
        "学校现有教学班级106个，学生7000余人。现有教职工420余人，其中研究员2人，特级教师8人，高级教师112人，国家和市级学科带头人、骨干教师36人，江津区骨干教师及学科带头人140余人，研究生及完成研究生课业学习的教师160余人。教学质量一年上一个新台阶，每年学校高考重点本科上线率超过50%，本科上线率超过90%。近十年，上清华、北大录取线70余人。 ",
      paragraph_five:
        "全面贯彻党的教育方针，大力推进素质教育。一年一度的艺术节、运动会、夏令营、科技活动周频添特色，形式多样的兴趣活动异彩纷呈。1997年开始，学校开展“学聂荣臻事迹、走聂荣臻道路、创聂荣臻业绩、做聂荣臻传人”的“五地六校东风行动”。",
      data_one:
        "南科大是一所新型大学。她带着新愿景、新思维，采用新体制、新机制肩负为我国高等教育改革发挥先导和示范作用、探索建设现代大学制度和创新人才培养模式的历史使命，并致力于服务创新型国家建设和珠三角地区、深圳现代化、国际化、创新型城市建设。",
      data_two:
        "     南科大是研究、创新、企业家精神三位一体的大学（Research，Innovation and Entrepreneurship）。我们聚焦世界科技前沿，提升基础研究竞争力；聚焦国家重大需求，提升应用基础研究竞争力；聚焦深圳科技发展，提升应用研究竞争力。在这里我们要培养诺贝尔奖级的学者，也希望我们的师生能够成就创业者的伟业。",
      data_three:
        "盛邦真有魅力大学（简称盛邦）是xx在中国高等教育改革发展的宏观背景下，创建的一所高起点、高定位的公办创新型大学，它肩负着为我国高等教育改革发挥先导和示范作用的使命，并致力于服务创新型国家建设和XX创新型城市建设。",
      Schooldata: "学校资料",
      data_fore:
        "盛邦大被确定为国家高等教育综合改革试验校。2012年4月，教育部同意建校，并赋予学校探索具有中国特色的现代大学制度、探索创新人才培养模式的重大使命。盛邦大借鉴世界一流理工科大学的学科设置和办学模式，以理、工、医科为主，兼具商科及特色人文社会学科，在本科、硕士、博士层次办学，在一系列新的学科方向上开展研究，使学校成为引领社会发展的思想库和新知识、新技术的源泉。盛邦大将发扬“敢闯敢试、求真务实、改革创新、追求卓越”的创校精神，突出“创知、创新、创业”（Research, Innovation and Entrepreneurship）的办学特色，努力服务创新型国家建设及深圳国际化.盛邦真有魅力大学（简称盛邦）是xx在中国高等教育改革发展的宏观背景下，创建的一所高起点、高定位的公办创新型大学，它肩负着为我国高等教育改革发挥先导和示范作用的使命，并致力于服务创新型国家建设和XX创新型城市建设。",
      Schooldata: "学校资料",
      school: require("../pic/切图/学校/school.jpg")
    };
  },
   components: { homepage , Catalog , SchoolInformation, }
};
</script>
<style >
* {
  padding: 0;
  margin: 0;
}

.bgc{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.SchoolInformation {

  float: left;
  width: 85%;
  height: 90%;
  position: absolute;
  left: 15%;
}
.SchoolInformation .jump {
  float: left;
  width: 100%;
  height: 5%;
  list-style: none;
}
.SchoolInformation .xhx{
  position: absolute;
  width: 105.8%;
  height: 0.1px;
  background-color: #999999;
  left: -5.9%;
  top: 4.5%;
}
.SchoolInformation .jump .xxxx {
  margin-top: 0.8%;
  float: left;
  margin-left: 20%;
  font-family: "楷体";

}
.SchoolInformation .jump .ro {
  text-decoration: none;
  color: #999999;
}
.SchoolInformation .jump .Delimiter {
  margin-top: 0.8%;
  color: #cccccc;
  float: left;
  /* text-align: center; */
  margin-left: 23%;
}
.SchoolInformation .jump .xxwz {
  font-family: "楷体";

  margin-top: 0.8%;
  float: left;
  margin-left: 22%;
  color: #cccccc;

}
.SchoolInformation .jump .xxwz .rl {
  
  text-decoration: none;
  color: #cccccc;
}
.SchoolInformation .jump .xxxx:hover {
  border-bottom: 4px solid #3c9cd3;
  color: #0662de;
}
.SchoolInformation .jump .xxwz:hover {
  border-bottom: 4px solid #3c9cd3;
  color: #0662de;

}
.SchoolInformation .pic {
  width: 80%;
  height: 10%;
  list-style: none;
}
.SchoolInformation .pic li .firstone {
  margin-top: 1%;
  width: 110%;
  height: 20%;
  margin-left: 3.5%;
  margin-top: 0%;
}
.SchoolInformation .pic li .firsttwo {
  margin-top: 1%;
  width: 100%;
  height: 20%;
  margin-left: 15%;
  margin-top: 3%;
}
.SchoolInformation .pic li .firstsherr {
  margin-top: 1%;
  width: 100%;
  height: 20%;
  margin-left: 15%;
  margin-top: 3%;
}
.SchoolInformation .pic li .firsfore {
  margin-top: 1%;
  width: 100%;
  height: 20%;
  margin-left: 15%;
  margin-top: 3%;
}
.SchoolInformation .pic li .firsfive {
  margin-top: 1%;
  width: 100%;
  height: 20%;
  margin-left: 15%;
  margin-top: 3%;
}
.SchoolInformation .SchoolProfile {
  font-size: 15px;
  /* float: left; */
  margin-top: 22.8%;
  margin-left: -4%;
  color: #000000;
  font-family: "仿宋";
}
.SchoolInformation .Underline_one {
  float: left;
  width: 34%;
  height: 2%;
  background-color: #3d50ad;
  margin-top: 0.2%;
  margin-left: -4%;
}
.SchoolInformation .brief_introduction {
  float: left;
  /* clear: both; */
  left: -35%;
  top: 4%;
  position: relative;
  /* border: 1px solid black; */
  width: 42%;
  height: 44%;
  /* margin-top: 1%; */
}
.SchoolInformation .brief_introduction .paragraph_one {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;
  width: 84%;
  font-family: "黑体";
}
.SchoolInformation .brief_introduction .paragraph_two {
  position: relative;
  float: left;
  left: 2%;
  width: 84%;

  font-size: 13px;
  font-family: "黑体";
}
.SchoolInformation .brief_introduction .paragraph_three {
  position: relative;
  float: left;
  left: 2%;
  width: 84%;

  font-size: 13px;

  font-family: "黑体";
}
.SchoolInformation .brief_introduction .paragraph_fore {
  position: relative;
  float: left;
  left: 2%;
  width: 84%;

  font-size: 13px;

  font-family: "黑体";
}
.SchoolInformation .brief_introduction .paragraph_five {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;
  width: 84%;

  font-family: "黑体";
}
.SchoolInformation .data {
  position: relative;
  float: left;
  /* border: 1px solid black; */
  width: 38%;
  height: 40%;
  top: -45%;
  left: 60%;
  /* margin-left: 1.5%; */
}
.SchoolInformation .data .data_one {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;

  font-family: "黑体";
}
.SchoolInformation .data .data_two {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;
  font-family: "黑体";
}
.SchoolInformation .data .data_three {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;
  font-family: "黑体";
}
.SchoolInformation .data .data_fore {
  position: relative;
  float: left;
  left: 2%;
  font-size: 13px;
  font-family: "黑体";
}
.SchoolInformation .data .Schooldata {
  /* position: relative; */
  float: left;
  margin-left: 1%;
  font-size: 15px;
  margin-top: -1%;
  color: #000000;
  font-family: "仿宋";
}
.SchoolInformation .data .Underline_two {
  float: left;
  width: 95%;
  height: 4.5%;
  background-color: #3d50ad;
  /* margin-top: 1%; */
  margin-left: 1.7%;
}
.SchoolInformation .school {
  position: absolute;
  top: 65%;
  width: 27%;
  height: 35%;
  left: 32%;
}
</style>
