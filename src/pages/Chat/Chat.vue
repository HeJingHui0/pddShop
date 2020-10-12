<template>
  <div class="chat">
    <div v-if="userInfo.id">
      <div class="header">
        <a href="" class="icon_back"></a>
        <h3>购物车</h3>
        <a href="" class="icon_menu"></a>
      </div>
      <div class="jd_safe_tip">
        <p class="tip_word">
          您正在安全购物环境中，请放心购物
        </p>
      </div>
      <main class="jd_shopCart_list">
        <section>
          <div class="shopCart_list_con" v-for="(goods, index) in cartgoods" :key="index">
            <div class="list_con_left">
              <a href="javascript:;" class="cart_check_box" checked></a>
            </div>
            <div class="list_con_right">
              <div class="shop_img">
                <img :src="goods.thumb_url" alt="">
              </div>
              <div class="shop_con">
                <a href="">{{goods.goods_name}}</a>
                <p class="shop_price">&yen;{{goods.price / 100}}</p>
                <div class="shop_deal">
                  <div class="shop_deal_left">
                    <span>-</span>
                    <input type="tel" value="1" v-model="goods.buy_count">
                    <span>+</span>
                  </div>
                  <div class="shop_deal_right">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="tab_bar">
        <div class="tab_bar_left">
          <a href="javascript:;" class="cart_check_box" checked></a>
          <span style="font-size: 16px;">全选</span>
          <div class="select_all">
            合计：<span class="total-price">&yen;999.00</span>
          </div>
        </div>
        <div class="tab_bar_right">
          <a href="#" class="pay">去结算</a>
        </div>
      </div>
    </div>
    <selectlogin v-else></selectlogin>
  </div>
</template>

<script>
import Selectlogin from '../../components/Login/Selectlogin'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo', 'cartgoods'])
  },
  components: {
    Selectlogin
  },
  mounted() {
    this.$store.dispatch('reqCartsGoods')
  }
}

</script>
<style scoped lang="less">
.chat {
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  .header {
    width: 100%;
    height: 45px;
    background-color: #ececec;
    border-bottom: 1px solid #e0e0e0;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #e9232c;
    z-index: 999;
  }
  .jd_safe_tip {
    margin-top: 45px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
    .tip_word {
      display: inline-block;
      font-size: 14px;
      padding-left: 20px;
      position: relative;
    }
  }
  .jd_shopCart_list {
    margin-bottom: 64px;
    background-color: #e0e0e0;
    selection {
      margin-top: 15px;
      border-top: 1px solid #e0e0e0;
      background-color: #fff;
      .shopCart_list_con {
        padding: 10px 0;
        border-bottom: 1px solid #e0e0e0;
        .list_con_left {
          .cart_check_box {
            float: left;
            background: url('./images/shop-icon.png');
            width: 20px;
            height: 20px;
            margin-top: 16px;
            margin-left: 8px;
          }
          .cart_check_box[checked] {
            background-position: -25px 0;
          }
        }
        .list_con_right {
          overflow: hidden;
          padding: 0 8px;
          .shop_img {
            float: left;
            img {
              width: 80px;
              height: 80px;
              display: block;
            }
          }
          .shop_con {
            overflow: hidden;
            padding-left: 8px;
            a {
              font-size: 14px;
              color: #666;
              line-height: 20px;
              height: 40px;
              overflow: hidden;
              display: block;
              text-decoration: none;
            }
            .shop_price {
              color: #e9232c;
              margin-top: 5px;
            }
            .shop_deal {
              margin-top: 5px;
              .shop_deal_left {
                float: left;
                span {
                  border: 1px solid #e0e0e0;
                  display: inline-block;
                  width: 30px;
                  height: 25px;
                  line-height: 25px;
                  text-align: center;
                  float: left;
                }
                input {
                  border: none;
                  border-top: 1px solid #e0e0e0;
                  border-bottom: 1px solid #e0e0e0;
                  float: left;
                  width: 50px;
                  height: 24px;
                  text-align: center;
                }
              }
              .shop_deal_left:first-child {
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
              }
              .shop_deal_left:last-child {
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
              }
              .shop_deal_right {
                float: right;
              }
              .shop_deal_right:first-child {
                background: url('./images/delete_up.png');
                width: 18px;
                height: 4px;
                display: block;
              }
              .shop_deal_right:last-child {
                background: url('./images/delete_down.png');
                height: 18px;
                height: 18px;
                display: block;
                margin-top: -3px;
              }
            }
          }
        }
      }
    }
  }
  #tab_bar {
    position: fixed;
    left: 0;
    bottom: 50px;
    width: 100%;
    height: 45px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -5px -5px #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .tab_bar_left {
      display: flex;
      align-items: center;
      margin-left: 8px;
      .cart_check_box {
        float: left;
        background: url('./images/shop-icon.png') no-repeat;
        width: 20px;
        height: 20px;
        margin-top: 4px;
        margin-left: 4px;
      }
      .cart_check_box[checked] {
        background-position: -25px 0;
      }
      .select_all {
        margin-left: 8px;
        font-size: 16px;
      }
    }
    .tab_bar_right {
      .pay {
        width: 90px;
        height: 45px;
        background-color: #e9232c;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>