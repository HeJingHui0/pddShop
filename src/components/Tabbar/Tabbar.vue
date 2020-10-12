<template>
  <div class="tabbar">
    <div class="tabbar_item" @click="routeTo('/home')">
    <img src="../../common/img/icon_home_selected.png" v-if="$route.path.includes('/home')" alt />
      <img src="../../common/img/icon_home.png" v-else alt />
      <span :class="{isactive: $route.path.includes('/home')}">首页</span>
    </div>
    <div class="tabbar_item" @click="routeTo('/recommend')">
    <img src="../../common/img/icon_intro_selected.png" v-if="$route.path === '/recommend'" alt />
      <img src="../../common/img/icon_intro.png" v-else alt />
      <span :class="{isactive: $route.path === '/recommend'}">推荐</span>
    </div>
    <div class="tabbar_item" @click="routeTo('/search')">
    <img src="../../common/img/icon_search_selected.png" v-if="$route.path === '/search'" alt />
      <img src="../../common/img/icon_search.png" v-else alt />
      <span :class="{isactive: $route.path === '/search'}">搜索</span>
    </div>
    <div class="tabbar_item" @click="routeTo('/chat')">
    <img src="../../common/img/icon_chat_selected.png" v-if="$route.path === '/chat'" alt />
      <img src="../../common/img/icon_chat.png" v-else alt />
      <span :class="{isactive: $route.path === '/chat'}">购物车</span>
    </div>
    <div class="tabbar_item" @click="routeTo('/mine')">
    <img src="../../common/img/icon_mine_selected.png" v-if="$route.path === '/mine'" alt />
      <img src="../../common/img/icon_mine.png" v-else alt />
      <span :class="{isactive: $route.path === '/mine'}">我的</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routeTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style scoped lang="less">
.tabbar {
  width: 100%;
  height: 50px;
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
  .tabbar_item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    img {
      width: 30%;
      margin-bottom: 5px;
    }
    .isactive {
        color: red;
    }
  }
}
</style>