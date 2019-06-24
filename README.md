# 任务分配
* 张天庆 功能介绍的md格式
* 周宏政 功能介绍的流程图
* 刘轩睿 暂无
* 王子建 暂无
# 学生管理系统
### 1.前端网页掌握技能
    前端vue + vue-router + element-ui + axios
### 2.需要掌握工具
* vscode
* photoshop
* github
* postman
* xmind
### 3.网页尺寸1920px*1080px
    前端使用自适应写网页

### 4.全局安装vue-cli
* npm install -g vue-cli
### 5.创建一个vue项目
* vue init webpack <project-name>
### 6.进入项目目录
* cd <project-name>

### 7.下载依赖
* npm install
#### axios
* npm install --save axios ----安装依赖
#### element-u
* npm i element-ui -S ----安装依赖
* 配置文件
在main.js声明
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
#### vue-router
* 设置路由
* vue-cli自带的路由文件
* 单页面应用
* 带参数的路由
* 子路由
### 8.运行项目
npm run dev
### 9.项目命令
#### 上面已经说过的运行项目
* npm run dev
* npm run start

#### 测试项目 
* npm run unit
* npm run e2e
* npm run test

#### 编码规范校验
* npm run lint

#### 构建项目
* npm run build