<template>
	<div class="page">
		<head-top :headTitle='headTitle'></head-top>
	</div>
</template>

<script>
	import HeadTop from '../components/Head'
	export default {
		name:'Order',
		data () {
			return {
				headTitle:'我的订单'
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
</style>