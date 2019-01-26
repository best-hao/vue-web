<template>
<div>
	<head-top :head-title='title'></head-top>
	<div>eiee </div>
</div>
</template>

<script>
import headTop from '../components/Head'

export default {
	name:"Detail",
	data (){
		return {
			title:"详情"
		}
	},
	components:{
		headTop
	}
}
</script>

<style scoped>
	
</style>