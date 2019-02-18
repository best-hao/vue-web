<template>
<div>
	<header class="user-head between">
		<span class="iconfont icon-settings"></span>
		<span>{{title}}</span>
		<span class="iconfont icon-mail"></span>
	</header>
	<div class="page">
		<div class="user-info flex-row">
			<img src="" alt="" class="user-header"/>
			<div>
				<div class="phone" @click="bindPhone">{{phone}}</div>
				<div class="flex-row"><span class="row-item">我的账户</span><span class="row-item">已签到</span></div>
			</div>
		</div>
		
		<div class="collect flex-row">
			<div class="collect-item flex-clum" @click="link(collect.path)">
				<span class="iconfont" :class="collect.font"></span>
				<span>{{collect.name}}</span>
			</div>
			<div class="collect-item flex-clum" @click="link(like.path)">
				<span class="iconfont" :class="like.font"></span>
				<span>{{like.name}}</span>
			</div>
			<div class="collect-item flex-clum" @click="link(pay.path)">
				<span class="iconfont" :class="pay.font"></span>
				<span>{{pay.name}}</span>
			</div>
		</div>
		<nav class="nav-order between" @click="link(orderPath)">
			<div>我的订单</div>
			<div class="last">全部订单</div>
		</nav>
		<div class="collect flex-row" @click="link(orderPath)">
			<div class="collect-item flex-clum" v-for="(item,index) in order" :key="index">
				<span class="iconfont" :class="item.font"></span>
				<span>{{item.name}}</span>
			</div>			
		</div>
		
		<nav class="nav-order between">
			<div>我的</div>
		</nav>
		<ul class="my-list">
			<li class="list-item between" v-for="(item,index) in list" :key="index">
				<span class="list-name">{{item.name}}</span>
				<span class="iconfont icon-fanhui"></span>
			</li>
		</ul>
		
		<nav class="nav-order between">
			<div>更多</div>
		</nav>
		<ul>
			<li class="list-item between" v-for="(item,index) in more" :key="index">
				<span class="list-name">{{item.name}}</span>
				<span class="iconfont icon-fanhui"></span>
			</li>
		</ul>
	</div>
	<FooterGuide :guide='guide'></FooterGuide>
</div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
export default {
	name:'UserCenter',
	data(){
		return{
			guide:"4",
			title:"个人中心",
			phone:"188******47",
			collect:{name:"我的收藏",font:"icon-favor",path:'/collect'},
			like:{name:"我的点赞",font:"icon-appreciate",path:'/like'},
			pay:{name:"消费中心",font:"icon-send",path:'/pay'},
			order:[
				{name:"待付款",font:"icon-pay"},
				{name:"待使用",font:"icon-send"},
				{name:"退货退款",font:"icon-deliver"},
				{name:"评价晒单",font:"icon-like"}
			],
			orderPath:"/order",
			list:[
				{name:"我的资产"},
				{name:"我的好友"},
				{name:"我的发布"}
			],
			more:[
				{name:"安全中心"},
				{name:"系统信息"},
				{name:"关于我们"},
				{name:"关于我们"}
			]
		}
	},
	components:{
		FooterGuide
	},
	methods:{
		bindPhone(){
			this.$router.push('/bind')
		},
		link(path){
			this.$router.push(path)		
		}
	}
}
</script>

<style scoped>
.user-head{
	height: 80px;
	width: 100%;
	background: #3cb333;
	color: #fff;
	font-size: 30px;
	position: fixed;
	top:0;
	left: 0;
}
.iconfont{
	margin: 0 20px;
	font-size: 45px;
}
.page{
  padding: 80px 0 128px 0;
  background: #efefef;
}
.user-info{
	width: 100%;
	height: 215px;
	background: #3cb333;
	justify-content: flex-start;
}
.user-header{
	display: block;
	height: 122px;
	width: 122px;
	border-radius: 50%;
	margin-left: 40px;
	margin-right: 30px;
}
.phone{
	color: #fff;
	font-size: 30px;
	text-align: left;
	margin-bottom: 12px;
}
.row-item{
	padding: 6px 15px;
	display: block;
	font-size: 20px;
	color: #666666;
	background: #ffffff;
	margin-right: 16px;
	border-radius: 10px;
}
.collect{
	height: 135px;
	width: 100%;
	background: #fff;
	color: #666666;
	margin-bottom: 20px;
}
.collect .iconfont{
	color: #a3a3a3;
}
.collect-item{
	flex: 1;
}
.nav-order{
	height: 90px;
	width: 100%;
	background: #fff;
	margin-bottom: 3px;
}
.nav-order div{
	margin: 0 40px;
	font-size: 30px;
	color: #333333;
}
.nav-order .last{
	color: #666666;
	font-size: 26px;
}
.icon-fanhui{
	transform: rotateY(180deg);
	font-size: 30px;
	margin-right: 40px;
}
.list-item{
	line-height: 80px;
	color: #666;
	background: #fff;
}
.list-name{
	margin-left: 40px;
}
.my-list{
	margin-bottom: 20px;
}
</style>