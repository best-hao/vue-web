<template>
  <footer class="flex-row footer-guide">
    <div class="flex-item" :class="index==guide?'active':''" v-for="(item,index) in footerList" :key="index" @click="goTo(index)">
      <span class="iconfont" :class="item.font"></span>
      <span>{{item.name}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      footerList: [
      {name:"首页",font:"icon-shouye"},
      {name:"附近",font:"icon-fujin"},
      {name:"发布",font:"icon-fabu"},
      {name:"任务",font:"icon-xinxing"},
      {name:"我的",font:"icon-mine-blue"}]
    }
  },
  props:{
    guide: String,
    required: true
  },
  methods: {
    goTo(index){
      switch(index)
      {
      case 0:
        this.$router.push('/home')
        break;
      case 1:
        this.$router.push('/near')
        break;
      default:
        this.$router.push('/home')
      }
      
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
</style>
