<template>
  <li class="shop_list_item">
    <img src="../../pages/Home/imgs/shop_list/shop_item.png" alt />
    <div class="list_item_title">我是推荐模块商品的标题我是推荐模块商品的标题</div>
    <div class="list_item_bottom">
      <span class="item_bottom_price">￥99</span>
      <span class="item_bottom_count">已拼999件</span>
      <button class="item_botton_btn">找相关</button>
    </div>
  </li>
</template>

<script>
export default {};
</script>
<style scoped lang="less">
.shop_list_item:nth-child(2n-1) {
  margin-right: 2%;
}
.shop_list_item {
  width: 49%;
  padding-bottom: 15px;
  img {
    width: 100%;
    height: 100px;
  }
  .list_item_title {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 8px 5px;
  }
  .list_item_bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    .item_bottom_price {
      flex: 1;
      font-size: 16px;
      font-weight: bold;
      color: red;
    }
    .item_bottom_count {
      flex: 2;
      font-size: 12px;
      color: #666;
      margin-left: 3px;
    }
    .item_botton_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 12px;
      border: 1px solid red;
      border-radius: 5px;
      color: red;
      background: transparent;
      margin-right: 5px;
    }
  }
}
</style>