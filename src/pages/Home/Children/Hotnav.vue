<template>
  <div class="hot_nav" v-if="homeNav.length > 0">
    <div class="hot_nav_content">
      <div class="nav_content_inner">
        <a class="inner_item" v-for="(item, index) in homeNav" :key="index">
          <img :src="item.iconurl" alt />
          <span>{{item.icontitle}}</span>
        </a>
      </div>
    </div>
    <div class="hot_nav_bottom">
      <div class="nav_bottom_inner" :style="innerScrollWidth"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      //获取屏幕宽度
      screenWidth:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      screenContentWidth: 720,
      screenScrollWidth: 100,
      scrollWidth: 0,
      scrollStart: 0,
      scrolFlag: 0,
      scrollEnd: 0
    };
  },
  computed: {
    ...mapState(['homeNav']),
    innerScrollWidth() {
      return {
        width: `${this.scrollWidth}px`,
        left: `${this.scrollEnd}px`
      };
    }
  },
  methods: {
    //动态计算滚动条宽度
    getScrollWidth() {
      this.scrollWidth =
        (this.screenScrollWidth * this.screenWidth) / this.screenContentWidth;
    },
    //移动端事件监听
    bindEvent() {
      this.$el.addEventListener("touchstart", this.handleTouchStart, false);
      this.$el.addEventListener("touchmove", this.handleTouchMove, false);
      this.$el.addEventListener("touchend", this.handleTouchEnd, false);
    },
    handleTouchStart(event) {
      this.scrollStart = Number(event.touches[0].pageX);
    },
    handleTouchMove(event) {
      let moveWidth = Number(event.touches[0].pageX) - this.scrollStart;
      this.scrollEnd = -(
        (moveWidth * this.screenScrollWidth) / this.screenContentWidth -
        this.scrolFlag
      );
      if (this.scrollEnd <= 0) {
        this.scrollEnd = 0;
      } else if (this.scrollEnd >= this.screenScrollWidth - this.scrollWidth) {
        this.scrollEnd = this.screenScrollWidth - this.scrollWidth;
      }
    },
    handleTouchEnd(event) {
      this.scrolFlag = this.scrollEnd;
    }
  },
  mounted() {
    this.getScrollWidth();
    this.bindEvent();
  }
};
</script>
<style scoped lang="less">
.hot_nav {
  width: 100%;
  height: 140px;
  position: relative;
  padding-bottom: 5px;
  .hot_nav_content {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 10px;
    .nav_content_inner {
      width: 720px;
      height: 140px;
      display: flex;
      flex-wrap: wrap;
      .inner_item {
        width: 90px;
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666;
        img {
          width: 40%;
          margin-bottom: 5px;
        }
      }
    }
  }
  .hot_nav_content::-webkit-scrollbar {
    display: none;
  }
  .hot_nav_bottom {
    width: 100px;
    height: 2px;
    background-color: #ccc;
    position: relative;
    left: 50%;
    margin-left: -50px;
    bottom: 5px;
    .nav_bottom_inner {
      position: relative;
      left: 0;
      height: 100%;
      background-color: red;
    }
  }
}
</style>