<template>
  <div class="div">
    <div class="teacher">
      <ul>
        <li>{{xm}}</li>
        <li>{{xb}}</li>
        <li>{{bm}}</li>
        <li>{{bj}}</li>
        <li>{{jz}}</li>
        <li class="tj">
          <img class="pic" :src="tj" alt>
          <ul class="block">
            <template>
              <el-button type="text" @click="open">
                <li class="bj_one">{{bj_one}}</li>
              </el-button>
              <el-button type="text" @click="del"> 
                <li class="sc">{{sc}}</li>
              </el-button>
              <el-button type="text" @click="add">
                <li class="tjjs">{{tjjs}}</li>
              </el-button>
            </template>
          </ul>
        </li>
      </ul>
      <hr class="xhx">
      <ul class="ziliao">
        <li>{{enh}}</li>
        <li>{{nv}}</li>
        <li>{{xgb}}</li>
        <li>{{yb}}</li>
        <li>{{jy}}</li>
        <router-link to="/TeacherMore">
          <li class="gd_one">{{gd}}</li>
        </router-link>
      </ul>
      <hr class="xhx_one">

      <ul class="ziliao_one">
        <li>{{ydt}}</li>
        <li>{{n}}</li>
        <li>{{xsb}}</li>
        <li>{{yb}}</li>
        <li>{{bzr}}</li>
        <li class="gd_two">{{gd}}</li>
      </ul>
      <hr class="xhx_two">
      <ul class="ziliao_two">
        <li>{{ywt}}</li>
        <li>{{nv}}</li>
        <li>{{xsb}}</li>
        <li>{{yb}}</li>
        <li>{{jy}}</li>
        <li class="gd_three">{{gd}}</li>
      </ul>
      <hr class="xhx_three">
      <ul class="ziliao_three">
        <li>{{yxt}}</li>
        <li>{{n}}</li>
        <li>{{xgb}}</li>
        <li>{{eb}}</li>
        <li>{{bzr}}</li>
        <li class="gd_fore">{{gd}}</li>
      </ul>
      <hr class="xhx_fore">
      <ul class="ziliao_fore">
        <li>{{tff}}</li>
        <li>{{n}}</li>
        <li>{{xsb}}</li>
        <li>{{sb}}</li>
        <li>{{bzr}}</li>
        <li class="gd_five">{{gd}}</li>
      </ul>
      <hr class="xhx_five">
      <ul class="ziliao_fore">
        <li>{{cww}}</li>
        <li>{{nv}}</li>
        <li>{{xsb}}</li>
        <li>{{wb}}</li>
        <li>{{bzr}}</li>
        <li class="gd_six">{{gd}}</li>
      </ul>
      <hr class="xhx_six">
      <ul class="ziliao_five">
        <li>{{jnn}}</li>
        <li>{{n}}</li>
        <li>{{xgb}}</li>
        <li>{{eb}}</li>
        <li>{{jy}}</li>
        <li class="gd_seven">{{gd}}</li>
      </ul>
      <hr class="xhx_seven">
      <ul class="ziliao_six">
        <li>{{jnn}}</li>
        <li>{{n}}</li>
        <li>{{xgb}}</li>
        <li>{{eb}}</li>
        <li>{{jy}}</li>
        <li class="gd_eight">{{gd}}</li>
      </ul>
      <hr class="xhx_eight">
      <ul class="ziliao_seven">
        <li>{{hyy}}</li>
        <li>{{n}}</li>
        <li>{{xgb}}</li>
        <li>{{eb}}</li>
        <li>{{jy}}</li>
        <li class="gd_nine">{{gd}}</li>
      </ul>
      <hr class="xhx_nine">
    </div>
  </div>
</template>
<script>
export default {
  name: "Teacher",
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    add() {
      this.$alert("", "请输入添加教师", {
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  },

  data() {
    return {
      xm: "姓名",
      xb: "性别",
      bm: "部门",
      bj: "班级",
      jz: "教职",
      bj_one: "编辑",
      sc: "删除",
      tjjs: "添加教师",
      tj: require("../assets/添加.jpg"),
      enh: "恩年华",
      nv: "女",
      xgb: "学工部",
      yb: "一班",
      jy: "教员",
      gd: "更多...",
      ydt: "云帝天",
      n: "男",
      xsb: "学术部",
      yb: "一班",
      bzr: "班主任",
      gd: "更多...",
      ywt: "云舞天",
      nv: "女",
      xsb: "学术部",
      yb: "一班",
      jy: "教员",
      gd: "更多...",
      yxt: "月晓天",
      n: "男",
      xgb: "学工部",
      bzr: "班主任",
      gd: "更多...",
      tff: "唐非非",
      n: "男",
      xsb: "学术部",
      sb: "四班",
      bzr: "班主任",
      gd: "更多...",
      cww: "瓷娃娃",
      nv: "女",
      xsb: "学术部",
      wb: "五班",
      bzr: "班主任",
      gd: "更多...",
      jnn: "江楠楠",
      n: "男",
      xgb: "学工部",
      eb: "二班",
      jy: "教员",
      gd: "更多...",
      hyy: "花衣衣",
      nv: "女",
      xgb: "学工部",
      eb: "二班",
      jy: "教员",
      gd: "更多..."
    };
  }
};
</script>
<style>
.div {
  float: left;
  width: 91.1%;
  height: 95.37%;
  background-color: #f0f0f0;
}
.div .teacher {
  width: 54.5%;
  height: 94%;
  background-color: #ffffff;
  /* position: absolute; */
  margin-top: 2%;
  margin-left: 24%;
}
.div .teacher ul {
  /* float: left; */
  list-style: none;
  width: 86%;
  height: 4%;
  margin-left: 14%;
  margin-top: 2%;
}
.div .teacher ul li {
  float: left;
  margin-top: 15px;
  font-size: 18px;
  margin-left: 6%;
  color: #000000;
  font-family: "楷体";
  font-weight: 900;
}
.div .teacher ul .tj {
  margin-left: 32%;
  margin-top: 1.5%;
  border: 1px solid white;
  overflow: hidden;
  position: relative;
  display: block;
}
.div .teacher ul .tj:hover {
  overflow: visible;
}
.div .teacher ul .tj .block {
  width: 110px;
  overflow: hidden;
  height: 128px;
  text-align: center;
  position: absolute;
  left: -580%;
  top: 50%;
  border: 1px solid #848484;
  /* margin-top: 123%; */
}

.div .teacher ul .tj .block .bj_one {
  float: left;
  margin-left: -3%;
  margin-top: -1px;
  width: 70px;
  height: 25px;
  border-bottom: 1px solid #d4d4d4;
}
.div .teacher ul .tj .block .sc {
  float: left;
  margin-left: -8%;
  margin-top: -13px;
  width: 70px;
  border-bottom: 1px solid #d4d4d4;
  height: 25px;
}
.div .teacher ul .tj .block .tjjs {
  float: left;
  margin-left: -3%;
  margin-top: -5px;
  width: 70px;
  height: 25px;
}
.div .teacher ul .tj {
  border: 1px solid white;
}
.div .teacher .xhx {
  width: 30%;
  position: absolute;
  left: 38%;
  top: 16%;
  background-color: #d1d1d1;
}
.div .teacher el-button {
  border: 1px solid white;
}
.div .teacher .ziliao {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: 3%;
}
.div .teacher .ziliao li {
  color: #a1a1a1;
}
.div .teacher .xhx_one {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 27%;
  background-color: #d1d1d1;
}
.div .teacher .xhx_two {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 39%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_one {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: -1%;
}
.div .teacher .ziliao_one li {
  color: #a1a1a1;
}

.div .teacher .xhx_three {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 51%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_two {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: -1%;
}
.div .teacher .ziliao_two li {
  color: #a1a1a1;
}
.div .teacher .xhx_fore {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 62%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_three {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: -1%;
}
.div .teacher .ziliao_three li {
  color: #a1a1a1;
}
.div .teacher .xhx_five {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 75%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_fore {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: -1%;
}
.div .teacher .ziliao_fore li {
  color: #a1a1a1;
}
.div .teacher .xhx_six {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 87%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_five {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: 0%;
}
.div .teacher .ziliao_five li {
  color: #a1a1a1;
}
.div .teacher .xhx_seven {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 126%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_six {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: 0%;
}
.div .teacher .ziliao_six li {
  color: #a1a1a1;
}
.div .teacher .xhx_eight {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 99%;
  background-color: #d1d1d1;
}
.div .teacher .ziliao_seven {
  list-style: none;
  width: 86%;
  height: 10%;
  margin-left: 13%;
  margin-top: 0%;
}
.div .teacher .ziliao_seven li {
  color: #a1a1a1;
}
.div .teacher .xhx_nine {
  width: 35%;
  position: absolute;
  left: 38%;
  top: 113%;
  background-color: #d1d1d1;
}
.div .teacher ul .gd_one {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_two {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_three {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_fore {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_five {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_six {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_seven {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_eight {
  position: absolute;
  right: 28%;
}
.div .teacher ul .gd_nine {
  position: absolute;
  right: 28%;
}
</style>
