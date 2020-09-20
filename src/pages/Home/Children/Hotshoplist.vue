<template>
  <div class="hot_shop" v-if="homeShopList.length > 0">
      <ul class="shop_list">
          <li class="shop_list_item" v-for="(item, index) in homeShopList" :key="index">
              <img :src="item.image_url" alt="" class="list_item_img">
              <span class="list_item_title">{{item.goods_name}}</span>
              <div class="list_item_bottom">
                  <span class="item_bottom_price">￥{{item.normal_price / 100}}</span>
                  <span class="item_bottom_count">{{item.sales_tip}}</span>
                  <div class="item_bottom_user">
                      <img :src="subItem.avatar" alt="" v-for="(subItem, subIndex) in item.bubble" :key="subIndex">
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
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['homeShopList'])
    }
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