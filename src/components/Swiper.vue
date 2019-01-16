<template>
  <div class="carousel-wrap">
    <transition-group tag="ul" class='slide-ul'>
      <li v-for="(list,index) in slideList" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" :key="list.desc">
        <a :href="list.clickUrl" >
          <img :src="list.image">
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Swiper",
    data () {
      return{
        currentIndex: 0,
        timer: ''
      }
    },
    props:{
      slideList: Array,
      required: true
    },
    methods: {
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 4000)
        })
    }
  }
</script>

<style scoped>
.carousel-wrap {
  position: relative;
  height: 270px;
  width: 100%;
  overflow: hidden;
}
.slide-ul {
  width: 100%;
  height: 100%;
}
.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;  
}
.slide-ul li img {
  width: 100%;
  height: 100%;
}
.carousel-items {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 30px;
  width: auto;
}
.carousel-items span {
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  margin: 0 6px;
}
.carousel-items  .active {
  width: 25px;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>