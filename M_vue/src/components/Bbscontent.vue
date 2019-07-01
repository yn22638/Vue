<template>
  <div class="Bbscontent">
    <div class="list">
      <ul>
        <li>
          <router-link class="Campusactivities" to="/Bbs">{{Campusactivities}}</router-link>
        </li>
        <li class="listright">
          <router-link class="Campusnews" to="/New">{{Campusnews}}</router-link>
        </li>
      </ul>
    </div>
    <div class="background">
      <div class="Bbsspecificcontent">
        <div id="topBanner" style="padding-top: 5px;" class="slide">
          <div
            v-for="imgUrl, index in bannerList"
            v-show="index===mark"
            :key="index"
            class="slideshow"
          >
            <img :src="imgUrl.url" class="i1">
          </div>
          <div class="bar">
            <span
              v-for="(item, index) in bannerList"
              :class="{ 'active':index===mark }"
              :key="index"
              @mouseenter="enter(index)"
            ></span>
          </div>
        </div>
      </div>
      <div class="BbsSpecificcontentii">
        <select class="textbox" name id>
          <option value="1">{{dropdownbox}}</option>
        </select>
        <video class="url" :src="url" controls="controls" autoplay="autoplay" muted="muted"></video>
        <div class="activity">
          <div class="activitytop">
            <p class="Recentactivities">{{Recentactivities}}</p>
          </div>
          <div class="activitybottom">
            <ul>
              <li v-for="item in list">
                <router-link to class="li">{{item}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="Hot">
          <div class="hottop">
            <p class="hot">{{hot}}</p>
          </div>
          <div class="hotbottom">
            <ul>
              <li v-for="item2 in list2">
                <span class="digital">{{item2.s}}</span>
                <router-link to class="li2">{{item2.activity}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bbscontent",
  data() {
    return {
      Campusactivities: "校园活动",
      Campusnews: "校园新闻",
      mark: 0, //比对图片索引的变量
      bannerList: [
        { url: require("../assets/images/6.jpg") },
        { url: require("../assets/images/7.jpg") },
        { url: require("../assets/images/8.jpg") }
      ],
      dropdownbox: "2018/05/20  王者荣耀校园争霸赛海鸥颁奖仪式",
      url: require("@/assets/qwe.mp4"),
      Recentactivities: "近期活动",
      hot: "热门",
      list: [
        '"职场竞争"比赛',
        "学生会招新",
        "春季运动会",
        "校活动踏青",
        "荣耀与闪耀",
        "备战！七月份暑假考",
        "项目部的管家"
      ],
      list2: [
        { s: "1", activity: '#"职场竞争"比赛#' },
        { s: "2", activity: "#王者荣耀比赛#" },
        { s: "3", activity: "#绝地求生比赛#" },
        { s: "4", activity: "#学生会招成员#" ,"color":"red"},
        { s: "5", activity: "#运动会#" },
        { s: "6", activity: "#吃西瓜比赛#" },
        { s: "7", activity: "#荣耀与闪耀#" }
      ],
    };
  },
  methods: {
    bgc() {
      this.color = {
        color: "#1576f9",
        "border-bottom": "2px solid #1576f9",
        "box-sizing": "border-box"
      };
    },
    enter(index) {
      this.url = require("../assets/images/6.jpg");
    },
    autoPlay() {
      this.mark++;
      if (this.mark === 3) {
        //当遍历到最后一张图片置零
        this.mark = 0;
      }
    },
    play() {
      setInterval(this.autoPlay, 2500);
    },
    change(i) {
      this.mark = i;
    }
  },
  created() {
    this.play();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Bbscontent {
  float: left;
  width: 91%;
  height: 95.3%;
}
.Bbscontent .list {
  float: left;
  width: 100%;
  height: 5%;
  border: 1px solid #cccccc;
    box-sizing: border-box;
}
.Bbscontent .list ul {
  width: 100%;
  height: 100%;
  line-height: 43.46px;
}
.Bbscontent .list ul li {
  float: left;
  width: 49.9%;
  height: 80%;
  text-align: center;
  line-height: 41px;
  list-style: none;
  margin-top: 0.5%;
}
.Bbscontent .list ul li a {
  float: left;
  text-decoration: none;
  height: 104%;
  line-height: 40px;
  margin-left: 46%;
}
.Bbscontent .list .Campusactivities {
  color: #1576f9;
  border-bottom: 2px solid #0662de;
  
}
.Bbscontent .list .listright {
  color: #b8b8b8;
  border-left: 1px solid black;
}
.Bbscontent .Greatcontent {
  float: left;
  width: 100%;
  height: 94.6%;
  background-color: #f2f2f2;
}
.Bbscontent .background {
  float: left;
  width: 100%;
  height: 95%;
  background-color: #f2f2f2;
}

.Bbsspecificcontent {
  width: 93%;
  height: 45%;
  background-color: white;
  margin-left: 3.8%;
  margin-top: 1%;
}
.slide {
  width: 98%;
  height: 96%;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.i1 {
  width: 100%;
  height: 100%;
}
.bar {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
}
.bar span {
  width: 20px;
  height: 5px;
  border: 1px solid;
  background: white;
  display: inline-block;
  margin-right: 10px;
}
.active {
  background: #bfd6b6 !important;
}



.BbsSpecificcontentii {
  float: left;
  width: 93%;
  height: 48%;
  background-color: white;
  margin-left: 3.8%;
}
.BbsSpecificcontentii .textbox {
  float: left;
  width: 47%;
  height: 11%;
  margin-left: 2%;
  padding-left: 4%;
  font-size: 15px;
  margin-top: 1.5%;
}
.BbsSpecificcontentii .url {
  float: left;
  clear: both;
  width: 47%;
  height: 74%;
  margin-left: 2%;
  margin-top: 1%;
}
.BbsSpecificcontentii .activity {
  float: left;
  width: 23.5%;
  height: 89%;
  margin-left: 0.7%;
  border: 1px solid #dcdcdc;
  margin-top: -4%;
}
.BbsSpecificcontentii .activity .activitytop {
  float: left;
  width: 65%;
  height: 13.5%;
  border-bottom: 1px solid #bababa;
  margin-left: 18%;
}
.BbsSpecificcontentii .activity .activitytop .Recentactivities {
  float: left;
  line-height: 57px;
  margin-left: 20%;
}
.BbsSpecificcontentii .activity .activitybottom {
  float: left;
  width: 100%;
  height: 86.5%;
}
.BbsSpecificcontentii .activity .activitybottom ul {
  float: left;
  width: 100%;
  height: 86.5%;
}
.BbsSpecificcontentii .activity .activitybottom ul li {
  float: left;
  width: 80%;
  height: 15%;
  border-bottom: 1px solid #bababa;
  margin-left: 10%;
  list-style: none;
  line-height: 46px;
  box-sizing: border-box;
}
.BbsSpecificcontentii .activity .activitybottom .li {
  float: left;
  text-decoration: none;
  color: #1a1a1a;
  margin-left: 10%;
}
.BbsSpecificcontentii .Hot {
  float: left;
  width: 23.5%;
  height: 89%;
  margin-left: 0.7%;
  border: 1px solid #dcdcdc;
  margin-top: -4%;
}
.BbsSpecificcontentii .Hot .hottop {
  float: left;
  width: 65%;
  height: 13.5%;
  border-bottom: 1px solid #bababa;
  margin-left: 18%;
}
.BbsSpecificcontentii .hottop .hot {
  float: left;
  line-height: 57px;
  margin-left: 40%;
}
.BbsSpecificcontentii .hotbottom {
  float: left;
  width: 100%;
  height: 86.5%;
}
.BbsSpecificcontentii .hotbottom ul {
  float: left;
  width: 100%;
  height: 86.5%;
}
.BbsSpecificcontentii .hotbottom ul li {
  float: left;
  width: 80%;
  height: 15%;
  border-bottom: 1px solid #bababa;
  margin-left: 10%;
  line-height: 46px;
  box-sizing: border-box;
}
.BbsSpecificcontentii .hotbottom ul li {
  float: left;
  margin-left: 10%;
  list-style: none;
}
.BbsSpecificcontentii .digital {
  float: left;
  margin-left: 10%;
}
.BbsSpecificcontentii .hotbottom .li2 {
  float: left;
  text-decoration: none;
  color: #1a1a1a;
  margin-left: 5%;
}
</style>
