<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
    	<keep-alive>
    		<router-view/>
    	</keep-alive> 
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../static/css/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-fade-enter-active, .router-fade-leave-active {
  	transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  	opacity: 0;
}
</style>
