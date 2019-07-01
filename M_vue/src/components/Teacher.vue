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
          <img class="pic" @click="add(index)" :src="tj" alt>
          <ul class="block">
            <li class="bj_one">{{bj_one}}</li>
            <template  >
            <el-button  type="text" @click="open">
            <li class="sc">{{sc}}</li>
            </el-button>
            </template>
            <template>
           <el-button  type="text" @click="open">
           <li  class="tjjs">{{tjjs}}</li>
          </el-button>
          </template>
          </ul>
        </li>
      </ul>
      <hr class="xhx">
    </div>
  </div>
</template>
<script>
export default {
  name: "Teacher",
  methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
  methods: {    
    open() {
        this.$alert('', '请输入添加教师', {
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
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
      tj: require("../assets/添加.jpg")
    };
  }
};
</script>
<style scoped>
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
  height: 10%;
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
  /* border: 1px solid white; */
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
  top:50%;
  border: 1px solid #848484;
  /* margin-top: 123%; */
}

.div .teacher ul .tj .block .bj_one {
  float: left;
  margin-left: 16%;
  margin-top: 15px;
  width: 70px;
  height: 25px;
  border-bottom: 1px solid #d4d4d4;
}
.div .teacher ul .tj .block .sc {
  float: left;
  margin-left: -1%;
  margin-top:3px;
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
</style>
