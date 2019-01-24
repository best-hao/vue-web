<template>
  <footer class="flex-row footer-guide">
    <div class="flex-item" :class="home.id==guide?'active':''" @click="goTo(home.path)">
    	<div><span class="iconfont" :class="home.font"></span></div>
      <span>{{home.name}}</span>
    </div>
    <div class="flex-item" :class="near.id==guide?'active':''" @click="goTo(near.path)">
    	<div><span class="iconfont" :class="near.font"></span></div>
      <span>{{near.name}}</span>
    </div>
    <div class="flex-item" :class="fabu.id==guide?'active':''" @click="goTo(fabu.path)">
    	<div><span class="iconfont" :class="fabu.font"></span></div>
      <span>{{fabu.name}}</span>
      <div class="fabu-btn">
      	<span class="iconfont" :class="fabu.font"></span>
      </div>
    </div>
    <div class="flex-item" :class="task.id==guide?'active':''" @click="goTo(task.path)">
    	<div><span class="iconfont" :class="task.font"></span></div>
      <span>{{task.name}}</span>
    </div>
    <div class="flex-item" :class="user.id==guide?'active':''" @click="goTo(user.path)">
    	<div><span class="iconfont" :class="user.font"></span></div>
      <span>{{user.name}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
    	home:{name:"首页",font:"icon-shouye",path:"/home",id:"0"},
    	near:{name:"附近",font:"icon-fujin",path:"/near",id:"1"},
    	fabu:{name:"发布",font:"icon-icon-test",path:"/fabu",id:"2"},
    	task:{name:"任务",font:"icon-renwu",path:"/task",id:"3"},
    	user:{name:"我的",font:"icon-geren",path:"/user",id:"4"}
    }
  },
  props:{
    guide: String,
    required: true
  },
  methods: {
    goTo(path){
    	this.$router.push(path)
  	} 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-guide{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 128px;
    width: 100%;
    font-size: 26px;
    color: #666;
    background-color: #efefef;
    z-index: 999;
  }
  .footer-guide .iconfont{
    font-size: 60px;
  }
  .flex-item.active{
    color: #3cb333;
  }
  .top{
    position: relative;
    font-size: 80px;
    color: #3cb333;
  }
  .fabu-btn{
  	position: absolute;
  	width: 120px;
  	height: 120px;
  	background: #efefef;
  	border-radius: 50%;
  	bottom: 44px;
  }
  .fabu-btn .iconfont{
  	display: block;
  	height: 96px;
  	width: 96px;
  	border-radius: 50%;
  	background: #ffffff;
  	margin-top: 20px;
  	margin-left: 12px;
  	color: #3cb333;
  }
</style>
