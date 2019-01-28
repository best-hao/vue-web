<template>
<div>
	<head-top :head-title='topTitle'></head-top>
	<div class="page">
		<div class="nav between">
			<div>{{title}}</div>
		</div>
		<div class="sub-title">
			{{subTitle}}
		</div>
		<div class="imgs">
			<img :src="item.res_url" alt="" v-for="(item,index) in imgs" :key="index"/>
		</div>
		<div class="content">
			{{content}}
		</div>
	</div>
	<div class="detail-footer"><span class="iconfont icon-fujin"></span>距离您1.6km,去瞧瞧</div>
</div>
</template>

<script>
import headTop from '../components/Head'

export default {
	name:"Detail",
	data (){
		return {
			topTitle:"详情",
			title:"",
			subTitle:"",
			imgs:[],
			lat:"",
			lng:"",
			content:""
		}
	},
	components:{
		headTop
	},
	mounted(){
		console.log(this.$route.query)
		this.$http.get("index/posts/post_detail",{params:this.$route.query})
		.then(res=>{
			console.log(res)
			if(res.data.code===100){
				this.title = res.data.data.post.title
				this.subTitle = res.data.data.post.sub_title
				this.imgs = res.data.data.imgs
				this.lat = res.data.data.post.lat
				this.lng = res.data.data.post.lng
				this.content = res.data.data.content
			}else{
				alert(res.data.msg)
			}
		})
	},
	methods:{
		
	}
	
}
</script>

<style scoped>
.page{
	padding: 80px 0 90px 0;
	background: #EFEFEF;
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
.sub-title{
	padding: 20px;
	padding-bottom: 40px;
	color: #999;
	box-sizing: border-box;
	border-top: 1px solid #efefef;
	background: #ffffff;
	text-align: left;
}
.imgs{
	margin-top: 10px;
}
.imgs img{
	width: 100%;
}
.content{
	padding: 25px 20px 50px 20px;
	box-sizing: border-box;
	color: #666666;
	font-size: 26px;
	background: #fff;
}
.detail-footer{
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
.icon-fujin{
	font-size: 35px;
	margin-right: 10px;
}
</style>