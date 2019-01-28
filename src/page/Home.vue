<template>
  <div>
    <header class="index-head fixed-head">
      <div class="address">{{address}}</div>
      <div class="flex-item">{{title}}</div>
    </header>
    
    <div class="page">
      <swiper :slideList="swiperList"></swiper>
      <div class="categry">
        <div class="categry-item" v-for="(item,index) in categry" :key='index'>
          <a :href="item.href">
            <img :src="item.type_img" alt=""/>
            <span v-text="item.type_name"></span>
          </a>
        </div>
      </div>
      <div class="group-list">
        <nav class="between nav-between">
          <div>{{nav.title}}</div>
          <ul class="flex-row nav-list">
            <li v-for='(item,index) in nav.list' :key='index'>{{item}}</li>
          </ul>
        </nav>
        <div class="group-cont">
        	<div class="loading" v-if="loading">
        		<inline-loading class="load"></inline-loading><span>加载中</span>
        	</div>
          <ul v-else>
            <li v-for="(item,index) in group" :key="index">
              <router-link class="between" :to="{name:'detail',query:{tid:item.id}}">
                <div class="info flex-row">
                  <img :src="item.main_img" alt="" class="group-img"/>
                  <div>
                    <div class="group-name over-1">{{item.title}}</div>
                    <div class="group-title over-1">{{item.sub_title}}</div>
                    <div class="group-dic over-1">{{Number(item.lat).toFixed(2)}}km</div>
                  </div>
                </div>
                <div class="red-num" v-if="item.red_packet_num">
                  <img :src="red" alt=""/>
                  <div>
                    <div v-if="item.overplus_packet === 0" class="none-red">已抢光</div>
                    <div v-else>{{item.overplus_packet}}/{{item.red_packet_num}}</div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-map" v-if="mapShow"></div>
    <footer-guide :guide='guide'></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
import Swiper from '../components/Swiper'
import { InlineLoading } from 'vux'
//import { getIndexBanner , getCategory } from '../api/http'
import AMap from 'AMap'
/*import AMapUI from 'AMapUI'*/


export default {
  name: 'Home',
  data () {
    return {
    	loading:true,
    	page:0,
    	limit:10,
    	mapShow:false,
    	map: null,
  	  guide:"0",
      title:"榴莲网",
      address:"西安",
      swiperList:[],
      red:'../../static/images/hongbao01.png',
      categry:
        [{img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},
        {img:'../../static/images/cate01.png',name:'美食',href:'##'},],
      nav:{title:'推荐',list:['全部','商家','个人']},
      group:[]
  	}
  },
  components:{
    FooterGuide,
    Swiper,
    InlineLoading
  },
  mounted(){
     this.$http.get('index/index/getIndexBanner')
     .then(res=>{
     		this.swiperList = res.data.data.advs
     })
     this.$http.get('index/index/post_cate')
     .then(res=>{
     		this.categry = res.data.data.l_type
     })     
     this.map = new AMap.Map('container-map', {
	      resizeEnable: true,
	      zoom: 15,
	      viewMode: '2D',
	      zooms: [4, 18]
     })
     this.thisLocation()
  },
  methods:{
  	goTo(path){
    	this.$router.push(path)
  	},
    thisLocation () {
      this.map.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: false,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        this.map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          console.log(data)
          this.citycode = data.addressComponent.cityCode
          this.thisPosition = data.position
          this.thisPosition.message = data.formattedAddress
          this.chosePosition = this.thisPosition
          localStorage.setItem("city",data.addressComponent.city)
          localStorage.setItem("addr",data.position.message)
          localStorage.setItem("lat",data.position.lat)
          localStorage.setItem("lng",data.position.lng)
          let promas ={
          		lat:data.position.lat,
          		lng:data.position.lat,
          		page:this.page,
          		limit:this.limit
          }
          this.$http.get('index/index/getIndexPosts',promas)
			    .then(res=>{
			    		if(res.data.code === 100){
			    			 this.group = res.data.data.post_list
			    		}else{
			    			 alert(res.data.msg)
			    		}
			    		this.loading = false
			     		console.log(res)
			    })
          /* 画圆 */
          //this.cancelLocation()
          //this.addCircle()
          /* 拖拽选址 */
          //this.positionPicker()
        })
        AMap.event.addListener(geolocation, 'error', function (data) {
          alert('定位失败')
        })
      })
  	}     
  }
}
</script>

<style scoped>
.loading{
	line-height: 100px;
	font-size: 28px;
}
.load{
	margin-right: 10px;
	width: 40px;
	height: 40px;
}
.index-head{
  height: 80px;
  width: 100%;
  background: #fff;
  color: #666;
  line-height: 80px;
  text-align: center;
  position: relative;
  font-size: 36px;
}
.fixed-head{
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;
}
.page{
  padding: 80px 0 128px 0;
}
.address{
  position: absolute;
  top:0;
  left: 0;
  height: 100%;
  width: 140px;
  text-align: center;
  font-size: 30px;
}
.categry{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  flex-wrap: wrap;
}
.categry-item{
  width: 20%;
}
.categry-item>a{
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 26px;
  margin-bottom: 40px;
}
.categry-item img{
  width: 82px;
  height: 82px;
}
.categry-item span{
  display: block;
  margin-top: 10px;
}

.group-list{
  background: #efefef;
  padding-top: 12px;
}
.nav-between{
  font-size: 26px;
  height: 70px;
  line-height: 70px;
  color: #666;
  background: #fff;
  margin-bottom: 5px;
  padding: 0 40px;
}
.nav-list li{
  width: 95px;
  height: 100%;
  text-align: center;
  position: relative;
}
.group-cont{
  background: #fff;
  padding: 0 40px;
  box-sizing: border-box;
  width: 100%;
}
.group-cont a{
  padding: 25px 0;
  width: 100%;
}
.red-num{
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff6a48;
}
.red-num img{
  width: 85px;
  margin-bottom: 5px;
}
.group-img{
  height: 120px;
  width: 120px;
  display: block;
  margin-right: 30px;
}
.group-name{
  color: #666;
  font-size: 26px;
}
.group-title{
  color: #999;
  font-size: 24px;
}
.over-1{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.info{
  flex: 1;
  min-width: 0;
}
.group-dic{
  color: #cccccc;
  font-size: 22px;
}
.info>div{
  text-align: left;
  flex: 1;
  min-width: 0;
}
.none-red{
  color: #999;
}
</style>