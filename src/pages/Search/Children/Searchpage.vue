<template>
  <div class="search_page">
    <div class="search_page_nav">
      <div class="page_nav_input">
        <img src="../images/search.png" alt />
        <input type="search" placeholder="点击此处搜索" ref="searchBtn" />
      </div>
      <button @click="showPage(false)" class="page_nav_btn">取消</button>
    </div>
    <div class="search_page_content">
      <div class="page_content_title">
        <img src="../images/hot.png" alt />
        <span>热门搜索</span>
      </div>
      <ul class="page_content_list">
        <li class="page_content_item">热门搜索1</li>
        <li class="page_content_item">热门搜索2</li>
        <li class="page_content_item">热门搜索3</li>
        <li class="page_content_item">热门搜索4</li>
        <li class="page_content_item">热门搜索5</li>
        <li class="page_content_item">热门搜索6</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showPage(flag) {
      this.$emit("showPage", flag);
    }
  },
  mounted() {
    this.$refs.searchBtn.focus();
  }
};
</script>
<style scoped lang="less">
.search_page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  .search_page_nav {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .page_nav_input {
      display: flex;
      align-items: center;
      width: 70%;
      height: 35px;
      background-color: #ededed;
      border-radius: 10px;
      padding: 0 15px;

      img {
        width: 25px;
      }
      input {
        border: none;
        background-color: #ededed;
        padding-left: 10px;
        width: 90%;
        height: 80%;
        outline: none;
      }
    }
    .page_nav_btn {
      background-color: #fff;
      color: #aaa;
      font-size: 16px;
      margin-right: 30px;
      border: none;
    }
  }
  .search_page_content {
    padding: 10px 15px;
    .page_content_title {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #aaa;
      margin-bottom: 10px;
      img {
        width: 25px;
      }
    }
    .page_content_list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .page_content_item {
            background-color: #ededed;
            color: #aaa;
            margin: 5px 10px;
            padding: 8px;
            border-radius: 8px;
            font-size: 14px;
        }
    }
  }
}
</style>