<template>
<div>
	<head-top :head-title='title'></head-top>
	<div class="page">
		<div class="nav between">
			<div>分类</div>
			<div class="last">请选择</div>
		</div>
		
		<div class="nav between">
			<div>标题</div>
			<div class="title"><input class="title-input" v-model="fabuTitle" placeholder="请填写主题或公司名称"/></div>
		</div>
		
		<div class="nav between">
			<div>{{secendTitle}}</div>
		</div>
		<div>
			<textarea class="secend-title" maxlength="50" placeholder="请在此输入内容，最多不能超过50 个字"></textarea>
		</div>
		
		<div class="upload-img">
			<div>
				<span class="iconfont icon-web-icon-"></span>
			</div>
		</div>
		
		<div class="nav between">
			<div><span class="iconfont icon-fujin"></span> <span class="address">陕西省西安市碑林区南稍门中贸广场</span></div>
		</div>
		
		<div class="nav between">
			<div>编辑正文</div>
		</div>
		<div>
			<textarea class="contant" maxlength="50" placeholder="请在此编辑正文"></textarea>
		</div>
		
		<div class="nav between">
			<div>包红包</div>
			<div><inline-x-switch v-model="value"></inline-x-switch></div>
		</div>
		
		<div class="nav between check-d">
			<div class="check-d-t">总金额</div>
			<checker v-model="moneyDe" default-item-class="demo-item" selected-item-class="demo-item-active">
  				<checker-item v-for="(item,index) in money" :key="index" :value="item" @on-item-click="checkMoney">{{item}}</checker-item>
			</checker>		
		</div>
		
		<div class="nav between check-d">
			<div class="check-d-t">红包个数</div>
			<checker v-model="numDe" default-item-class="demo-item" selected-item-class="demo-item-active">
  				<checker-item v-for="(item,index) in num" :key="index" :value="item">{{item}}</checker-item>
			</checker>
		</div>
		
	</div>
	<div class="fabu-footer">{{footerTitle}}</div>
</div>
</template>


<script>
import { XSwitch , Checker , CheckerItem , InlineXSwitch } from 'vux'
import HeadTop from '../components/Head'
export default {
	name:'Fabu',
	data(){
		return{
			guide:"2",
			title:"发布广告",
			footerTitle:"确认发布",
			placeholder:"",
			fabuTitle:"",
			value:"",
			secendTitle:"填写副标题",
			money:["10元","20元","50元","100元"],
			num:["20个","50个","100个"],
			moneyDe:"10元",
			numDe:"20个"
		}
	},
	components:{
		XSwitch,
		Checker, 
		CheckerItem,
		InlineXSwitch,
		HeadTop
	},
	methods:{
		checkMoney:function(itemValue, itemDisabled){
		
		},
		checkNum:function(itemValue, itemDisabled){
		
		}
		
	}
}
</script>

<style scoped>
.demo-item{
	width: 100px;
	height: 56px;
	line-height: 58px;
	text-align: center;
	border-radius: 30px;
	border:1px solid #efefef;
	color: #333333;
	margin-right: 20px;
}
.demo-item-active{	
	background-color: #3cb333;
	color: #ffffff;
}
.page{
	padding: 80px 0 90px 0;
	background: #EFEFEF;
}
.fabu-footer{
	position: fixed;
	width: 100%;
	height: 90px;
	line-height: 90px;
	left: 0;
	bottom: 0;
	background: #3cb333;
	color: #fff;
	font-size: 30px;
}
.nav{
	height: 90px;
	width: 100%;
	background: #fff;
	margin-top: 5px;
}
.nav > div{
	margin: 0 20px;
	font-size: 26px;
	color: #333333;
}
.nav .last{
	color: #666666;
	font-size: 26px;
}
.title{
	flex: 1;
	height: 100%;
}
.title-input{
	width: 100%;
	height: 100%;
	border: 0;
	margin: 0;
	padding: 0;
	line-height: 100%;
}
textarea{
	display: block;
	width: 100%;
	height: auto;
	border: 0;
	margin: 0;
	padding: 20px;
	box-sizing: border-box;
	border-top: 1px solid #efefef;
}
input:focus, textarea:focus {
    outline: none;
}
.secend-title{
	height: 110px;
}
.upload-img{
	height: 160px;
	background: #fff;
	border-top: 1px solid #efefef;
}
.upload-img div{
	width: 160px;
	height: 120px;
	text-align: center;
	line-height: 120px;
	border: 3px dashed #efefef;
	border-radius: 10px;
	margin-top: 20px;
	margin-left: 40px;
}
.icon-web-icon-{
	font-size: 60px;
	color: #333333;
}
.contant{
	height: 190px;
}
.icon-fujin{
	margin-right: 20px;
	font-size: 35px;
	color: #3cb333;
}
.address{
	font-size: 26px;
}
.check-d{
	margin: 0;
	border-top: 1px solid #efefef;	
}
.check-d > div{
	font-size: 24px;
}
.check-d-t{
	width: 4em;
	text-align: left;
}
.vux-checker-box{
	flex: 1;
	text-align: left;
}
</style>