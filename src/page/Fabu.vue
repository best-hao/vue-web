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
			<div>填写副标题</div>
		</div>
		<div>
			<textarea class="secend-title" maxlength="50" placeholder="请在此输入内容，最多不能超过50 个字" v-model="secendTitle"></textarea>
		</div>
		
		<div class="upload-img">
			<div v-for="(item, index) in list" @click="show(index)">
			    <img class="previewer-demo-img" :src="item.src" width="100">			    
			</div>
			<div v-transfer-dom>
		      	<previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
		    </div>
			<div>				
				<label class="iconfont icon-web-icon-" for="upload"></label>
				<input type="file" @change="getFile($event)" name="upload" id="upload" multiple="multiple" accept="image/jpg,image/png,image/gif,image/jpeg,image/bmp" style="display: none;" >
			</div>					
		</div>
		
		<div class="nav flex-row">
			<div><span class="iconfont icon-fujin"></span></div>
			<div class="address">{{addr}}</div>
		</div>
		
		<div class="nav between">
			<div>编辑正文</div>
		</div>
		<div>
			<textarea class="contant" maxlength="50" placeholder="请在此编辑正文" v-model="contant"></textarea>
		</div>
		
		<div class="nav between">
			<div>包红包</div>
			<div><inline-x-switch v-model="isRed"></inline-x-switch></div>
		</div>
		
		<div class="nav between check-d" v-if="isRed">
			<div class="check-d-t">总金额</div>
			<checker v-model="moneyDe" default-item-class="demo-item" selected-item-class="demo-item-active">
  				<checker-item v-for="(item,index) in money" :key="index" :value="item" @on-item-click="checkMoney">{{item}}元</checker-item>
			</checker>		
		</div>
		
		<div class="nav between check-d" v-if="isRed">
			<div class="check-d-t">红包个数</div>
			<checker v-model="numDe" default-item-class="demo-item" selected-item-class="demo-item-active">
  				<checker-item v-for="(item,index) in num" :key="index" :value="item">{{item}}个</checker-item>
			</checker>
		</div>
		
	</div>
	<toast v-model="toast">{{toastTitle}}</toast>
	<div class="fabu-footer" @click="send">{{footerTitle}}</div>
</div>
</template>


<script>
import { XSwitch , Checker , CheckerItem , InlineXSwitch , Previewer, TransferDom , Toast } from 'vux'
import HeadTop from '../components/Head'
import { sendPosts ,sendPost} from '../api/http'
import qs from 'qs';
export default {
	name:'Fabu',
	data(){
		return{
			typeId:"1",
			lat:"",
			lng:"",
			city:"",
			addr:"",
			toast:false,
			toastType:"warn",
			toastTitle:"",
			guide:"2",
			title:"发布广告",
			footerTitle:"确认发布",
			placeholder:"",
			fabuTitle:"",
			isRed:true,
			secendTitle:"",
			money:[10,20,50,100],
			num:[20,50,100],
			moneyDe:10,
			numDe:20,
			contant:"",
			file:"",
			list:[],
			imgList:[],
			options: {
		        getThumbBoundsFn (index) {		          
		          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]		          
		          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop		         
		          let rect = thumbnail.getBoundingClientRect()		          
		          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
		        }
		    }
		}
	},
	mounted(){
     	this.getAddr()
  	},
  	directives: {
    	TransferDom
  	},
	components:{
		XSwitch,
		Checker, 
		CheckerItem,
		InlineXSwitch,
		HeadTop,
		Previewer,
		Toast
	},
	methods:{
		checkMoney:function(itemValue, itemDisabled){
		
		},
		checkNum:function(itemValue, itemDisabled){
		
		},
		send:function(){
			let data = {
				type_id:this.typeId,
				city:this.city,
				lat:this.lat,
				lng:this.lng,
				title:this.fabuTitle,
				sub_title:this.secendTitle,
				content:this.contant,
				red_packet_num:this.isRed?this.numDe:"0",
				red_packet_limit:this.isRed?this.moneyDe:"0",
				resources:this.imgList,
				addr:this.addr,
				has_red_packet:this.isRed?"1":"0"
			}
		    this.$http.post("index/posts/send_posts",qs.stringify(data))
		    .then(res=>{
		    	console.log(res.data)
		    	alert(res.data.msg)
		    	
		    })
		},
		getFile(event) {
		  event.preventDefault();//取消默认行为
		  this.file = event.target.files[0];
		  console.log(this.file);		  
		  //创建 formData 对象
		  let formData = new FormData();
		  // 向 formData 对象中添加文件
		  formData.append('file',this.file);
		  this.$http.post("/index/uploads/up_single_img",formData)
		    .then(res=>{
		    	console.log(res)
		    	let obj = {
		    		msrc:res.data.url,
		    		src:res.data.url
		    	}
		    	let imgObj = {
		    		res_type : "1",
		    		res_url:res.data.url
		    	}
		    	if(res.data.code !=100){
		    		alert(res.data.msg)
		    	}else{
		    		this.list.push(obj)
		    		this.imgList.push(imgObj)
		    		alert(res.data.msg)
		    	}	    	
		    })
		},
		logIndexChange (arg) {
	      console.log(arg)
	    },
	    show (index) {
	      this.$refs.previewer.show(index)
	    },
	    getAddr(){
	    	this.addr = localStorage.getItem("addr")
	    	this.lat = localStorage.getItem("lat")
	    	this.lng = localStorage.getItem("lng")
	    	this.city = localStorage.getItem("city")
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
	height: auto;
	background: #fff;
	border-top: 1px solid #efefef;
	overflow: hidden;
	padding: 20px 0;
}
.upload-img div{
	width: 160px;
	height: 160px;
	float: left;
	text-align: center;
	line-height: 160px;
	border: 3px dashed #efefef;
	border-radius: 10px;
	margin-left: 40px;
	overflow: hidden;
}
.icon-web-icon-{
	font-size: 60px;
	color: #333333;
}
.contant{
	height: 190px;
}
.icon-fujin{
	font-size: 35px;
	color: #3cb333;
}
.address{
	font-size: 26px;
	flex: 1;
	min-width: 0;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
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