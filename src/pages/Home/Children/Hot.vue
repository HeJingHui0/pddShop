<template>
  <div class="hot">
    <div class="swiper-container" v-if="homeSwiper.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in homeSwiper" :key="index">
          <img :src="item.imgurl" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <hotnav></hotnav>
    <div class="hot_advertising">
      <img src="../imgs/hot_ad/home_ad.gif" alt />
    </div>
    <hotshoplist></hotshoplist>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../../node_modules/swiper/swiper.less";
import Hotnav from "./Hotnav";
import Hotshoplist from "./Hotshoplist";
import { mapState } from "vuex";
export default {
  components: {
    Hotnav,
    Hotshoplist
  },
  computed: {
    ...mapState(["homeSwiper"])
  },
  watch: {
    homeSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          autoplay: true,
          autoplay: {
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("reqHomeSwiper")
    this.$store.dispatch('reqHomeNav')
    this.$store.dispatch('reqHomeShopList')
  }
};
</script>
<style scoped lang="less">
.hot {
  width: 100%;
  height: 100%;
  .swiper-container {
    .swiper-wrapper {
      img {
        width: 100%;
      }
    }
  }
  .hot_advertising {
    margin-top: 2px;
    padding: 10px;
    img {
      width: 100%;
    }
  }
}
</style>