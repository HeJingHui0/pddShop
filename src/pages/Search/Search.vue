<template>
  <div class="search">
    <searchnav @showPage="showPage"></searchnav>
    <div class="search_main">
      <div class="search_menu">
        <ul>
          <li ref="menuList" class="search_menu_list" :class="{isactive: 0 === activeIndex}" @click="handleItemClick(1)">
            <span class="search_menu_title">女装</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">鞋包</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">男装</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">内衣</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">食品</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">百货</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">美装</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">手机</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">电器</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">水果</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">服饰</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">母婴</span>
          </li>
          <li class="search_menu_list">
            <span class="search_menu_title">儿童</span>
          </li>
        </ul>
      </div>
      <div class="search_shop">
        <ul ref="shopList">
          <li class="search_shop_list">
            <div class="shop_list_header">
              <span>女装1</span>
              <a href>查看更多></a>
            </div>
            <ul class="shop_list_content">
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="search_shop_list">
            <div class="shop_list_header">
              <span>鞋包</span>
              <a href>查看更多></a>
            </div>
            <ul class="shop_list_content">
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="search_shop_list">
            <div class="shop_list_header">
              <span>男装</span>
              <a href>查看更多></a>
            </div>
            <ul class="shop_list_content">
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="search_shop_list">
            <div class="shop_list_header">
              <span>内衣</span>
              <a href>查看更多></a>
            </div>
            <ul class="shop_list_content">
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
            </ul>
          </li>
          <li class="search_shop_list">
            <div class="shop_list_header">
              <span>食品</span>
              <a href>查看更多></a>
            </div>
            <ul class="shop_list_content">
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
              <li class="shop_list_item">
                <img src="./images/s1.png" alt />
                <span>女装</span>
              </li>
            </ul>
          </li>  
        </ul>
      </div>
    </div>
    <searchpage v-if="isShowPage" @showPage="showPage"></searchpage>
  </div>
</template>

<script>
import Searchnav from "./Children/Searchnav";
import Searchpage from './Children/Searchpage'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scrollY: 0,
      rightListTop: [],
      isShowPage: false
    }
  },
  components: {
    Searchnav,
    Searchpage
  },
  computed: {
    activeIndex() {
      return this.rightListTop.findIndex((item, index) => {
        this.handleItemScroll(index)
        return item <= this.scrollY < this.rightListTop[index + 1]
      })
    }
  },
  methods: {
    initBScroll() {
      this.leftBScroll = new BScroll('.search_menu', {
        scrollY: true,
        click: true
      })
      this.rightBScroll = new BScroll('.search_shop', {
        scrollY: true,
        click: true,
        probeType: 3
      })
      this.rightBScroll.on('scroll', pos => {
        this.scrollY = Math.abs(pos.y)
      })
    },
    getRightListTop() {
      let top = 0
      this.rightListTop.push(top)
      let allList = this.$refs.shopList.getElementsByClassName('search_shop_list')
      let tempArr = Array.from(allList)
      tempArr.forEach(item => {
        top += item.clientHeight
        this.rightListTop.push(top)
      })
    },
    handleItemClick(index) {
      this.scrollY = this.rightListTop[index]
      this.rightBScroll.scrollTo(0, -this.scrollY, 300)
    },
    handleItemScroll(index) {
      // let itemScroll = this.$refs.menuList[index]
      let itemScroll = [this.$refs.menuList][index]
      this.leftBScroll.scrollToElement(itemScroll, 300, 0, -100)
    },
    showPage(flag) {
      this.isShowPage = flag
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initBScroll()
      this.getRightListTop()
    })
  }
};
</script>
<style scoped lang="less">
.search {
  width: 100%;
  height: 100%;
  .search_main {
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
    .search_menu {
      width: 20%;
      flex: 0 0 20%;
      background-color: #f7f7f7;
      .search_menu_list {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        position: relative;
      }
      .isactive {
        color: #e02e24;
        background-color: #fff;
      }
      .isactive::before {
        content: "";
        background-color: #e02e24;
        width: 3px;
        height: 30px;
        position: absolute;
        left: 0;
      }
    }
    .search_shop {
      flex: 1;
      .search_shop_list {
        .shop_list_header {
          a,
          a:link,
          a:visited,
          a:hover,
          a:active {
            text-decoration: none;
            color: #aaa;
            font-size: 14px;
          }
          display: flex;
          justify-content: space-between;
          margin: 15px;
          color: #666;
        }
        .shop_list_content {
          display: flex;
          flex-wrap: wrap;
          .shop_list_item {
            display: flex;
            flex-direction: column;
            width: 33%;
            justify-content: center;
            align-items: center;
            img {
              width: 60%;
              height: 60%;
              margin-bottom: 5px;
            }
            span {
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>