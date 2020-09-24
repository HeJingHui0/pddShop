<template>
  <div class="recommend" v-if="recommendShopList.length > 0">
    <ul class="recommned_list">
      <shoplist v-for="(item, index) in recommendShopList" :key="index" :item="item"></shoplist>
    </ul>
  </div>
</template>

<script>
import Shoplist from "../../components/Shoplist/Shoplist";
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10
    }
  },
  components: {
    Shoplist
  },
  computed: {
    ...mapState(['recommendShopList'])
  },
  watch: {
    recommendShopList() {
      this.$nextTick(() => {
        this.pageIndex += 1
        this.initBScroll()
      })
    }
  },
  methods: {
    initBScroll() {
      this.shopBScroll = new BScroll('.recommend', {
        scrollY: true,
        probeType: 3,
        click: true
      })
      this.shopBScroll.on('touchEnd', pos => {
        if(pos.y > 100) {
          this.$store.dispatch('reqRecommendShopList', {pageIndex: this.pageIndex, pageSize: this.pageSize})
        }
        if(this.shopBScroll.maxScrollY > pos.y + 100) {
          this.$store.dispatch('reqRecommendShopList', {pageIndex: this.pageIndex, pageSize: this.pageSize})
        }
      })
      this.shopBScroll.on('scrollEnd', () => {
        this.shopBScroll.refresh()
      })
    }
  },
  mounted() {
    this.$store.dispatch('reqRecommendShopList', {pageIndex: this.pageIndex, pageSize: this.pageSize})
  }
};
</script>
<style scoped lang="less">
.recommend {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .recommned_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
}
</style>