<template>
  <div class="search_nav">
    <div class="search_nav_btn" @click="showPage(true)">
      <img src="../images/search.png" alt class="nav_btn_img" />
      <span class="nav_btn_title">点击此处搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showPage(flag) {
      this.$emit("showPage", flag);
    }
  }
};
</script>
<style scoped lang="less">
.search_nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .search_nav_btn {
    width: 80%;
    height: 80%;
    background-color: #e8e2e2;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav_btn_img {
      width: 25px;
    }
    .nav_btn_title {
      color: #aaa;
      margin-left: 10px;
      font-size: 18px;
    }
  }
}
</style>