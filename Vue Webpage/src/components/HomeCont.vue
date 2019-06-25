  <template>
  <div class="HomeCont">
    <div class="tab">
      <ul>
        <li @click="bgc">
          <router-link to="/Home" :style="[color]" class="a1">{{School_Information}}</router-link>
          <div class="shu"></div>
        </li>

        <li>
          <router-link to="/ditu">{{School_location}}</router-link>
        </li>
      </ul>
    </div>
    <div class="banner">
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

      <!-- <div class="block">
        <span class="demonstration" style>默认 Hover 指示器触发</span>
        <el-carousel height="462px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>-->
    </div>
    <div class="footer">
      <div class="left">
        <h5>{{jianjie}}</h5>
        <hr>
        <p>
          <strong>重庆市江津中学创建于1906年（清光绪32年）1953年即为四川省重点中学，重庆直辖后</strong>
        </p>
        <p>
          <strong>首批确认的重点中学。学校位于渝西鼎山之麓，长江之滨。</strong>
        </p>
        <p class="p2">
          <strong>江津中学夙富革命传统，文化底蕴深厚，治学严谨、校风淳朴。百年来，辉煌的业绩</strong>
        </p>
        <p>
          <strong>享誉巴蜀，播名八方。以校友聂荣臻为代表的老一辈革命家从这里起步，以“ 白屋诗人”</strong>
        </p>
        <p>
          <strong>吴芳吉为代表的名师荟萃于此。“桃李芬芳，母校荣光”，这是江津中学百年历史的写照。</strong>
        </p>
        <p>
          <strong>吴芳吉为代表的名师荟萃于此。“桃李芬芳，母校荣光”，这是江津中学百年历史的写照。</strong>
        </p>
        <p class="p2">
          <strong>校园占地近300亩，分本部和分部。其中本部是重庆市重点文物单位，分部现为学校</strong>
        </p>
        <p>
          <strong>的主要教学、生活、运动区。学校宽阔恢弘，环境幽雅。亭榭楼阁，流水小桥，绿树繁花，</strong>
        </p>
        <p>
          <strong>荷风送爽，琅琅书声，鹿洞俨然。学校拥有多媒体校园网、闭路电视教学系统、后勤IC管</strong>
        </p>
        <p>
          <strong>理服务系统； 400M跑道的标准田径运动场、足球场、排球场、乒乓球场、体育馆、标准</strong>
        </p>
        <p>
          <strong>游泳池、网球场，国家一类标准的理、化、生实验设备，通用技术教室和数字化探究实验</strong>
        </p>
        <p>
          <strong>室。</strong>
        </p>
        <p class="p2">
          <strong>学校现有教学班级106个，学生7000余人。现有教职工420余人，其中研究员2人，</strong>
        </p>
        <p>
          <strong>特级教师8人，高级教师112人，国家和市级学科带头人、骨干教师36人，江津区骨干教</strong>
        </p>
        <p>
          <strong>师及学科带头人140余人，研究生及完成研究生课业学习的教师160余人。教学质量一年</strong>
        </p>
        <p>
          <strong>上一个新台阶，每年学校高考重点本科上线率超过50%，本科上线率超过90%。近十年，</strong>
        </p>
        <p>
          <strong>上清华、北大录取线70余人。</strong>
        </p>
        <p class="p2">
          <strong>全面贯彻党的教育方针，大力推进素质教育。一年一度的艺术节、运动会、夏令营、</strong>
        </p>
        <p>
          <strong>科技活动周频添特色，形式多样的兴趣活动异彩纷呈。1997年开始，学校开展“学聂荣臻</strong>
        </p>
        <p>
          <strong>事迹、走聂荣臻道路、创聂荣臻业绩、做聂荣臻传人”的“五地六校东风行动”。</strong>
        </p>
      </div>
      <div class="pic">
        <img :src="pic" alt>
      </div>
      <div class="right">
        <h5>{{jianjie}}</h5>
        <hr>
        <p>
          <strong>重庆市江津中学创建于1906年（清光绪32年）1953年即为四川省重点中学，重庆直辖后</strong>
        </p>
        <p>
          <strong>首批确认的重点中学。学校位于渝西鼎山之麓，长江之滨。</strong>
        </p>
        <p class="p2">
          <strong>江津中学夙富革命传统，文化底蕴深厚，治学严谨、校风淳朴。百年来，辉煌的业绩</strong>
        </p>
        <p>
          <strong>享誉巴蜀，播名八方。以校友聂荣臻为代表的老一辈革命家从这里起步，以“ 白屋诗人”</strong>
        </p>
        <p>
          <strong>吴芳吉为代表的名师荟萃于此。“桃李芬芳，母校荣光”，这是江津中学百年历史的写照。</strong>
        </p>
        <p>
          <strong>吴芳吉为代表的名师荟萃于此。“桃李芬芳，母校荣光”，这是江津中学百年历史的写照。</strong>
        </p>
        <p class="p2">
          <strong>校园占地近300亩，分本部和分部。其中本部是重庆市重点文物单位，分部现为学校</strong>
        </p>
        <p>
          <strong>的主要教学、生活、运动区。学校宽阔恢弘，环境幽雅。亭榭楼阁，流水小桥，绿树繁花，</strong>
        </p>
        <p>
          <strong>荷风送爽，琅琅书声，鹿洞俨然。学校拥有多媒体校园网、闭路电视教学系统、后勤IC管</strong>
        </p>
        <p>
          <strong>理服务系统； 400M跑道的标准田径运动场、足球场、排球场、乒乓球场、体育馆、标准</strong>
        </p>
        <p>
          <strong>游泳池、网球场，国家一类标准的理、化、生实验设备，通用技术教室和数字化探究实验</strong>
        </p>
        <p>
          <strong>室。</strong>
        </p>
        <p class="p2">
          <strong>学校现有教学班级106个，学生7000余人。现有教职工420余人，其中研究员2人，</strong>
        </p>
        <p>
          <strong>特级教师8人，高级教师112人，国家和市级学科带头人、骨干教师36人，江津区骨干教</strong>
        </p>
        <p>
          <strong>师及学科带头人140余人，研究生及完成研究生课业学习的教师160余人。教学质量一年</strong>
        </p>
        <p>
          <strong>上一个新台阶，每年学校高考重点本科上线率超过50%，本科上线率超过90%。近十年，</strong>
        </p>
        <p>
          <strong>上清华、北大录取线70余人。</strong>
        </p>
        <p class="p2">
          <strong>全面贯彻党的教育方针，大力推进素质教育。一年一度的艺术节、运动会、夏令营、</strong>
        </p>
        <p>
          <strong>科技活动周频添特色，形式多样的兴趣活动异彩纷呈。1997年开始，学校开展“学聂荣臻</strong>
        </p>
        <p>
          <strong>事迹、走聂荣臻道路、创聂荣臻业绩、做聂荣臻传人”的“五地六校东风行动”。</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCont",
  data() {
    return {
      School_Information: "学校信息",
      School_location: "学校位置",
      jianjie: "学校简介",
      pic: require("../assets/banner.png"),
      color: "",
      mark: 0, //比对图片索引的变量
      bannerList: [
        { url: require("../assets/images/6.jpg") },
        { url: require("../assets/images/7.jpg") },
        { url: require("../assets/images/8.jpg") }
      ]
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

<style>
.HomeCont {
  float: left;
  height: 95.4%;
  width: 91.1%;
}
.HomeCont .tab {
  width: 100%;
  height: 4.9%;
}
.HomeCont .tab ul {
  list-style: none;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;
}
.HomeCont .tab ul li {
  width: 50%;
  text-align: center;
  line-height: 50px;
  float: left;
  font-size: 15px;
}
.HomeCont .tab ul li .shu {
  transform: rotate(90deg);
  width: 30px;
  float: right;
  border: 1px solid #cccccc;
  position: relative;
  top: 24px;
  margin-right: -15px;
}
.HomeCont .tab ul li a {
  width: 10%;
  height: 50px;
  color: #b8b8b8;
  text-decoration: none;
  display: inline-block;
}
/* .HomeCont .tab ul li a:hover {
  color: #1576f9;
  border-bottom: 2px solid #1576f9;
  box-sizing: border-box;
} */
.HomeCont .tab ul li .a1 {
  color: #1576f9;
  border-bottom: 2px solid #1576f9;
  box-sizing: border-box;
}
.HomeCont .banner {
  width: 100%;
  height: 44%;
  margin-top: -3%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 462px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.HomeCont .footer {
  width: 100%;
  height: 47.4%;
  margin-top: 4%;
}
.HomeCont .footer .left {
  float: left;
  width: 29.4%;
  height: 100%;
  margin-left: 30px;
}
.HomeCont .footer .left hr {
  background-color: #3d50ad;
  width: 86%;
  height: 1.6%;
  margin-top: 1%;
}
.HomeCont .footer .left p {
  font-size: 11px;
  margin-top: 7px;
}
.HomeCont .footer .left .p2 {
  text-indent: 20px;
}
.HomeCont .footer .pic {
  float: left;
  width: 35%;
  height: 78%;
  margin-left: 26px;
  margin-top: 30px;
}
.HomeCont .footer .pic img {
  width: 100%;
  height: 100%;
}
.HomeCont .footer .right {
  float: left;
  width: 29.4%;
  height: 100%;
  margin-left: 30px;
}
.HomeCont .footer .right hr {
  background-color: #3d50ad;
  width: 86%;
  height: 1.6%;
  margin-top: 1%;
}
.HomeCont .footer .right p {
  font-size: 11px;
  margin-top: 7px;
}
.HomeCont .footer .right .p2 {
  text-indent: 20px;
}

.slide {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
}
.slideshow {
  width: 90%;
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
</style>

