<template>
  <div class="page">
    <div>
       <tab :line-width=3 active-color='#3cb333' v-model="first">
        <tab-item class="vux-center" :selected="defult === item" v-for="(item, index) in topNav" @click="defult = item" :key="index">{{item.tit}}</tab-item>
      </tab>
      <swiper v-model="first" :show-dots="false" class="contant" height="100%">
        <swiper-item v-for="(item, index) in topNav" :key="index">
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
                  <a href="##" class="between">
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </swiper-item>
      </swiper>
    </div>
    <footer-guide :guide='guide'></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
import { Tab, TabItem, Swiper, SwiperItem} from 'vux'
export default {
  name: 'Near',
  data () {
    return {
      first:0,
      defult:'全部',
      guide:"1",
      title:"榴莲网",
      address:"西安",
      nav:{title:'推荐',list:['全部','商家','个人']},
      group:
      [{name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等各类烟酒零食饮料',dic:'距您3.3km',max:"100",use:'30',red:'../../static/images/hongbao01.png'},
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您1.3km',max:"100",use:'30',red:'../../static/images/hongbao01.png'},
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您3.2km',max:"100",use:'100',red:'../../static/images/hongbao01.png'},
      {name:'绿城烟酒商行',img:'../../static/images/shop01.png',tit:'各类烟酒零食饮料、办公用品等',dic:'距您3.2km'}],
      topNav:[{tit:'全部'},{tit:'美食'},{tit:'电影'},{tit:'娱乐'},{tit:'KTV'},{tit:'周边游'}]
    }
  },
  components:{
    FooterGuide,
    Tab, 
    TabItem,
    Swiper, 
    SwiperItem
  }
}
</script>

<style scoped>
.page{
  background: #efefef;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: auto;
}
.contant{
  background: #fff;
  position: absolute;
  top:80px;
  left: 0;
  bottom: 128px;
  width: 100%;
  margin: auto;
}
.vux-tab-container{
  height: 100% !important;
  width: 100% !important;
}
.fixed-head .item{
  height: 100%;
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
.swiper{
  height: 270px;
  width: 100%;
  overflow: hidden;
}
.swiper img{
  height: 270px;
  width: 100%;
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