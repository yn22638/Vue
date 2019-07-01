<template>
<div class="mapbox">
<baidu-map id="qqa" :center="center" :zoom="zoom" @ready="handler" style="height:700px;width:1250px;border:1px solid" @click="getClickInfo">
</baidu-map>
</div>
</template>
<script>
export default {

name:'mapbox',

data () {

return {

center: {lng:0, lat:0},

zoom:13,

}
}, 
mounted () {
//创建和初始化地图函数：
function initMap(){
createMap();//创建地图
setMapEvent();//设置地图事件
// addMapControl();//向地图添加控件
addMarker();//向地图中添加marker
}
//创建地图函数：
function createMap(){
//创建Map实例
var map = new BMap.Map("qqa");
// 初始化地图,设置中心点坐标
var point = new BMap.Point(119.762057,39.993097);// 创建点坐标
map.centerAndZoom(point,17);
//添加鼠标滚动缩放
map.enableScrollWheelZoom();
window.map = map;
}

//地图事件设置函数：
function setMapEvent(){
map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
map.enableScrollWheelZoom();//启用地图滚轮放大缩小
map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
map.enableKeyboard();//启用键盘上下左右键移动地图
}
//地图控件添加函数：
function addMapControl(){
//向地图中添加缩放控件
var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(ctrl_nav);
//向地图中添加缩略图控件
var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
map.addControl(ctrl_ove);
//向地图中添加比例尺控件
var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
map.addControl(ctrl_sca);
}


//标注点数组
var markerArr =
[
{
title: "山海关铁路技师学院",
content: "我的备注1",
point: "119.762978|39.993294",
isOpen: 0,
icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}
},
];
//创建marker
function addMarker(){
for(var i=0;i<markerArr.length;i++){
var json = markerArr[i];
var p0 = json.point.split("|")[0];
var p1 = json.point.split("|")[1];
var point = new BMap.Point(p0,p1);
var iconImg = createIcon(json.icon);
var marker = new BMap.Marker(point,{icon:iconImg});
var iw = createInfoWindow(i);
var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+5,-20)});
marker.setLabel(label);
map.addOverlay(marker);
label.setStyle({
borderColor:"#808080",
color:"#333",
cursor:"pointer"
});

(function(){
var index = i;
var _iw = createInfoWindow(i);
var _marker = marker;
_marker.addEventListener("click",function(){
this.openInfoWindow(_iw);
});
_iw.addEventListener("open",function(){
_marker.getLabel().hide();
})
_iw.addEventListener("close",function(){
_marker.getLabel().show();
})
label.addEventListener("click",function(){
_marker.openInfoWindow(_iw);
})
if(!!json.isOpen){
label.hide();
_marker.openInfoWindow(_iw);
}
})()
}
}
//创建InfoWindow
function createInfoWindow(i){
var json = markerArr[i];
var iw = new
BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
return iw;
}
//创建一个Icon
function createIcon(json){
var icon = new
BMap.Icon("http://webmap0.map.bdstatic.com/wolfman/static/common/images/us_cursor_9517a2b.png",
new BMap.Size(10,json.h),
{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),
offset:new BMap.Size(json.x,json.h)})
}
initMap();//创建和初始化地图


}
}
</script>
<style>
    .mapbox{
        width: 90%;
        height: 90%;
        margin: 0 auto;
        margin-top: 5%;
    }
</style>
