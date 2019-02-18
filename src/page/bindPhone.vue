<template>
	<div class="page">
		<head-top :headTitle="headTitle"></head-top>
		<div class="zhanwei"></div>
		<div class="input-line between">
			<input type="text" :placeholder="holder1"/>
		</div>
		<div class="input-line between">
			<input type="text" :placeholder="holder2"/>
		</div>
		<div class="input-line between">
			<input type="text" :placeholder="holder3"/>
			<div class="get-code">获取验证码</div>
		</div>
		<div class="input-line between">
			<input type="text" :placeholder="holder4"/>
			<div>推荐人ID（可选）</div>
		</div>
	</div>
</template>

<script>
	import HeadTop from '../components/Head'
	
	export default {
		name:"bindPhone",
		data(){
			return{
				holder1:"请输入手机号",
				holder2:"请输入图片上的数字",
				holder3:"请输入短信验证码",
				holder4:"请输入推荐人ID",
				headTitle:"绑定手机号"
			}
		},
		components:{
			HeadTop
		}
	}
</script>

<style scoped>
	.page{
		padding-top: 80px;
	}
	input{
		border: 0;
		margin: 0;
		padding: 0;
		height: 100%;
		line-height: 100%;
		flex: 1;
	}
	.zhanwei{
		height: 150px;
	}
	.input-line{
		height: 70px;
		line-height: 70px;
		box-sizing: border-box;
		margin: 0 40px;
		position:relative;
		margin-bottom: 2px;
	}
	.input-line:after{
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		background: #f2f2f2;
		bottom: 0;
		left: 0;		
	}
	.get-code{
		line-height: 60px;
		padding: 0 15px;
		margin: 0 10px;
		border: 1px solid #ff4800;
		color: #ff4800;
		border-radius: 10px;
	}
</style>