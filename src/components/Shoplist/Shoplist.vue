<template>
  <li class="shop_list_item">
    <img :src="item.image_url" alt />
    <div class="list_item_title">{{item.short_name}}</div>
    <div class="list_item_bottom">
      <span class="item_bottom_price">￥{{item.price / 100}}</span>
      <span class="item_bottom_count">{{item.sales_tip}}</span>
      <button class="item_botton_btn">找相关</button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    item: Object
  }
};
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
    height: 90px;
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