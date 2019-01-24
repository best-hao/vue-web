<template>
	<div class="head-top">
		<span @click="back" class="iconfont icon-fanhui"></span>
		{{headTitle}}
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'HeadTop',
		data(){
			return{
				
			}
		},
		props:['headTitle'],
		methods:{
			back: function () {
				this.$router.back(-1)
			},
		}
	}
</script>

<style scoped>
.head-top{
	position: fixed;
	width: 100%;
	height: 80px;
	line-height: 80px;
	left: 0;
	top: 0;
	background: #ffffff;
	font-size: 30px;
}
.icon-fanhui{
	position: absolute;
	left: 20px;
	top:0;
	bottom: 0;
	margin: auto;
	font-size: 30px;
}
</style>