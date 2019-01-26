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
          <ul>
            <li v-for="(item,index) in group" :key="index">
              <router-link class="between" to='/detail'>
                <div class="info flex-row">
                  <img :src="item.img" alt="" class="group-img"/>
                  <div>
                    <div class="group-name over-1">{{item.name}}</div>
                    <div class="group-title over-1">{{item.tit}}</div>
                    <div class="group-dic over-1">{{item.dic}}</div>
                  </div>
                </div>
                <div class="red-num" v-if="item.max">
                  <img :src="item.red" alt="" />
                  <div>
                    <div v-if="item.use==item.max" class="none-red">已抢光</div>
                    <div v-else>{{item.use}}/{{item.max}}</div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <footer-guide :guide='guide'></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
import Swiper from '../components/Swiper'
import { getIndexBanner , getCategory } from '../api/http'

export default {
  name: 'Home',
  data () {
    return {
  	  guide:"0",
      title:"榴莲网",
      address:"西安",
      swiperList:[],
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
      group:
      [{name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等各类烟酒零食饮料',dic:'距您3.3km',max:"100",use:'30',red:'../../static/images/hongbao01.png'},  
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您3.2km',max:"100",use:'100',red:'../../static/images/hongbao01.png'},
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您3.2km'},
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您1.3km',max:"100",use:'30',red:'../../static/images/hongbao01.png'}]
  	}
  },
  components:{
    FooterGuide,
    Swiper
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
  },
  methods:{
  	goTo(path){
    	this.$router.push(path)
  	}
  }
}
</script>

<style scoped>
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