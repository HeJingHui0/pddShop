<template>
  <div class="me_top">
    <router-link tag="div" class="user" to="/detail">
      <img src="./images/me_icon.png" alt />
      <p>{{userInfo.userPhone | phoneFormat}}</p>
      <i class="itlike-3"></i>
    </router-link>
    <div class="my_older">
      <div class="older_top">
        <h3>我的订单</h3>
        <span>查看全部 ></span>
      </div>
      <div class="older_bottom">
        <div class="bottom_item">
          <i class="itlike-1"></i>
          <span>待付款</span>
        </div>
        <div class="bottom_item">
          <i class="itlike-2"></i>
          <span>待分享</span>
        </div>
        <div class="bottom_item">
          <i class="itlike-3"></i>
          <span>待发货</span>
        </div>
        <div class="bottom_item">
          <i class="itlike-4"></i>
          <span>待收货</span>
        </div>
        <div class="bottom_item">
          <i class="itlike-5"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="setting_item">
        <i class="itlike-1"></i>
        <span>新人红包</span>
      </div>
      <div class="setting_item">
        <i class="itlike-2"></i>
        <span>多多果园</span>
      </div>
      <div class="setting_item">
        <i class="itlike-3"></i>
        <span>砍价免费拿</span>
      </div>
      <div class="setting_item">
        <i class="itlike-4"></i>
        <span>边逛边赚</span>
      </div>
      <div class="setting_item">
        <i class="itlike-5"></i>
        <span>天天领红包</span>
      </div>
      <div class="setting_item">
        <i class="itlike-uniE902"></i>
        <span>收货地址</span>
      </div>
      <div class="setting_item">
        <i class="itlike-1"></i>
        <span>我的评价</span>
      </div>
      <div class="setting_item">
        <i class="itlike-3"></i>
        <span>官方客服</span>
      </div>
      <router-link tag="div" class="setting_item" to="/minesetting">
        <i class="itlike-4"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  filters: {
    phoneFormat(phone) {
      let replaceStr = phone.substring(3, 7)
      return phone.replace(replaceStr, '****')
    }
  }
};
</script>
<style scoped lang="less">
.me_top {
  font-size: 14px;
  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    p {
      margin: 0 10px;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    i {
      font-size: 24px;
    }
  }
  .my_older {
    .older_top {
      display: flex;
      flex-direction: row;
      padding: 0 10px;
      justify-content: space-between;
      height: 44px;
      line-height: 44px;
    }
    .older_bottom {
      display: flex;
      .bottom_item {
        flex: 1;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i {
          font-size: 30px;
          color: #e9232c;
          margin-bottom: 10px;
        }
      }
    }
  }
  .setting {
    margin-top: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .setting_item {
      width: 90px;
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        font-size: 30px;
        color: orange;
        margin-bottom: 10px;
      }
    }
  }
}
</style>