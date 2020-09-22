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
export default {
  components: {
    Shoplist
  },
  computed: {
    ...mapState(['recommendShopList'])
  },
  mounted() {
    this.$store.dispatch('reqRecommendShopList')
  }
};
</script>
<style scoped lang="less">
.recommend {
  width: 100%;
  height: 100%;
  .recommned_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
}
</style>