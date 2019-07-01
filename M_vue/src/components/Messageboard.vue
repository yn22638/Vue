<template>
  <div class="Messageboard">
    <div class="Content">
      <div class="Editbox">
        <ul>
          <li v-for="message,index in list">
            {{message}}
          </li>
        </ul>

        <form action @submit.prevent="insertData">
          <img :src="expression" class="expression">
          <img :src="gif" class="gif">
          <img :src="img" class="img">
          <textarea class="textarea" v-model="name"></textarea>
          <button class="fasong">{{fasong}}</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      expression: require("../assets/expression.png"),
      gif: require("../assets/gif.png"),
      img: require("../assets/img.png"),
      fasong: "发送",
      color: "",
      liuyancolor: { color: "white" },
      libgc: { "background-color": "#171746" },
      list: [],
      name: ""
    };
  },
    methods:{
        getList(){
            axios.post("http://127.0.0.1:7001/Messageboard")
            .then(res => {
                console.log(res);
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        del(index){
            axios.delete(`http://127.0.0.1:7001/Messageboard/${index}`)
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        insertData(){
            axios.post("http://127.0.0.1:7001/Messageboard",{
                name:this.name
            })
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        this.getList();
    }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.Messageboard {
  float: left;
  width: 91.1%;
  height: 95%;
}
.Content {
  float: left;
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
}
.Editbox {
  width: 96.6%;
  height: 38.1%;
  background-color: white;
  margin-left: 1.91%;
  margin-top: 36%;
}
.expression {
  margin-left: 1.187%;
  margin-top: 0.791%;
}
.gif {
  margin-left: 0.792%;
}
.img {
  margin-left: 0.792%;
}
.textarea {
  width: 84.5%;
  height: 28%;
  margin-left: -4.98%;
  margin-top: 2%;
  outline: none;
  outline: medium;
  border: 0;
  text-align: left;
  padding: 10px 0;
  font-size: 20px;
  position: absolute;
}
.fasong {
    width: 8.981%;
    height: 4.538%;
    background-color: #a3a3a3;
    color: #fffefe;
    float: right;
    margin-left: 71%;
    margin-top: 17.5%;
    position: absolute;
}
</style>


