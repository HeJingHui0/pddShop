<template>
  <div class="hot_shop">
      <ul class="shop_list">
          <li class="shop_list_item">
              <img src="../imgs/shop_list/shop_item.png" alt="" class="list_item_img">
              <span class="list_item_title">我是首页热门板块商品列表的标题我是首页热门板块商品列表的标题我是首页热门板块商品列表的标题</span>
              <div class="list_item_bottom">
                  <span class="item_bottom_price">￥99.9</span>
                  <span class="item_bottom_count">已拼999件</span>
                  <div class="item_bottom_user">
                      <img src="../imgs/shop_list/user1.jpg" alt="">
                      <img src="../imgs/shop_list/user2.jpg" alt="">
                  </div>
                  <div class="item_bottom_btn">
                      <button>去拼单></button>
                  </div>
              </div>
          </li>
          <li class="shop_list_item">
              <img src="../imgs/shop_list/shop_item.png" alt="" class="list_item_img">
              <span class="list_item_title">我是首页热门板块商品列表的标题我是首页热门板块商品列表的标题我是首页热门板块商品列表的标题</span>
              <div class="list_item_bottom">
                  <span class="item_bottom_price">￥99.9</span>
                  <span class="item_bottom_count">已拼999件</span>
                  <div class="item_bottom_user">
                      <img src="../imgs/shop_list/user1.jpg" alt="">
                      <img src="../imgs/shop_list/user2.jpg" alt="">
                  </div>
                  <div class="item_bottom_btn">
                      <button>去拼单></button>
                  </div>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
.hot_shop {
    margin-bottom: 50px;
    .shop_list {
        .shop_list_item {
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
            .list_item_img {
                width: 100%;
                margin: 0 5px;
            }
            .list_item_title {
                font-size: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 12px 10px;
            }
            .list_item_bottom {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 5px;
                .item_bottom_price {
                    flex: 1;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                    color: red;
                }
                .item_bottom_count {
                    flex: 2;
                    font-size: 12px;
                    color: #666;
                    margin-left: 3px;
                }
                .item_bottom_user {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 30px;
                        border-radius: 50%;
                    }
                    img:nth-child(2){
                        margin-left: -5px;
                    }
                }
                .item_bottom_btn{
                     flex: 2;
                     button {
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         height: 30px;
                         width: 80%;
                         margin-left: 10px;
                         color: #fff;
                         background-color: #e82e24;
                         font-size: 18px;
                         border: none;
                         border-radius: 5px;
                     }
                }
            }
        }
    }
}
</style>