<template>
	<div class="page">
		<head-top :headTitle='headTitle'></head-top>
	</div>
</template>

<script>
	import HeadTop from '../components/Head'
	export default {
		name:'Pay',
		data () {
			return {
				headTitle:'消费中心'
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