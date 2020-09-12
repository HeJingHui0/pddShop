<template>
  <div class="home">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="handleChange" class="ly_tab"></ly-tab>
      <router-view class="router_view"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 0,
      items: [
        {label: '热门'},
        {label: '服饰'},
        {label: '鞋包'},
        {label: '母婴'},
        {label: '百货'},
        {label: '食品'},
        {label: '内衣'},
        {label: '男装'},
        {label: '电器'}
      ],
      options: {
        activeColor: '#e9232c'
      },
      subRouteUrl: ['/home/hot', '/home/dress', '/home/box', '/home/mbaby', '/home/general', '/home/food', '/home/shirt', '/home/man', '/home/ele']
    }
  },
  methods: {
    handleChange(item, index) {
      this.$router.replace(this.subRouteUrl[index])
    }
  }
}

</script>
<style scoped lang="less">
.home {
  .ly_tab {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
  }
  .router_view {
    margin-top: 50px;
  }
}
</style>