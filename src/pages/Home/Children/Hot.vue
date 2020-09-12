<template>
  <div class="hot">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../imgs/rowing/s1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s3.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s4.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s5.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s6.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s7.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s8.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s9.png" alt />
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
export default {
  components: {
    Hotnav,
    Hotshoplist
  },
  mounted() {
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