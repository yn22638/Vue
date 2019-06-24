<template>
  <div class="catalog">
    <ul class="Catalog">
      <router-link class="sy" to="/SchoolInformation">
        <li>
          <span>{{sy}}</span>
        </li>
      </router-link>
      <li>
        <span>{{xsgl}}</span>
      </li>
      <router-link class="jsjj" to="/Teachermanagement" >
        <li>
          <span>{{jsjj}}</span>
        </li>
      </router-link>
      <li>
        <span>{{lybk}}</span>
      </li>
      <li>
        <span>{{xylt}}</span>
      </li>
      <li>
        <span>{{sz}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sy: "首页",
      xsgl: "学生管理",
      jsjj: "教师简介",
      lybk: "留言板块",
      xylt: "校园论坛",
      sz: "设置"
    };
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.catalog {
  position: absolute;
  float: left;
  width: 10%;
  height: 100%;
  background-color: #0a0919;
}
.catalog .Catalog {
  color: #98979c;
  text-align: center;
  margin-top: 20%;
  width: 100%;
  height: 50%;
}
.catalog .Catalog li {
  width: 100%;
  height: 15%;
  line-height: 10px;
}
.catalog .Catalog li span {
  line-height: 55px;
  font-family: "黑体";
}
.catalog .Catalog .sy {
  color: #98979c;
  text-decoration: none;
}
.catalog .Catalog .jsjj {
  color: #98979c;
  text-decoration: none;
}

.catalog .Catalog li:hover {
  background-color: #161745;
  color: white;
}
</style>
