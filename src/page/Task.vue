<template>
<div>
	<div>renwu</div>
	<FooterGuide :guide='guide'></FooterGuide>
</div>
</template>

<script>
import FooterGuide from '../components/FooterGuide'
export default {
	name:'Task',
	data(){
		return{
			guide:"3"
		}
	},
	components:{
		FooterGuide
	}
}
</script>

<style>
</style>