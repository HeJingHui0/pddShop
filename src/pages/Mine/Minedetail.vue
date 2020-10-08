<template>
  <div class="user-detail">
    <div class="user-detail-top">基本信息</div>
    <div class="user-detail-group">
      <div class="user-icon">
        <span>头像</span>
        <img src="./images/me_icon.png" alt />
      </div>
      <div class="user-item">
        <span>手机</span>
        <span>{{userPhone}}</span>
      </div>
      <div class="user-item">
        <span>昵称</span>
        <span>
          <input type="text" v-model="userName" />
        </span>
      </div>
      <div class="user-item">
        <span>性别</span>
        <input type="text" v-model="userSex" />
      </div>
      <div class="user-item">
        <span>常住地</span>
        <span>
          <input type="text" v-model="userAddress" />
        </span>
      </div>
      <div class="user-item">
        <span>生日</span>
        <input type="text" v-model="userBirthday" />
      </div>
      <div class="user-item">
        <span>个性签名</span>
        <span>
          <input type="text" v-model="userSign" />
        </span>
      </div>

      <button @click="changeUserInfo">修改</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { changeUserInfo } from "../../api/index";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userPhone: "",
      userName: "",
      userSex: "",
      userAddress: "",
      userBirthday: "",
      userSign: ""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    async changeUserInfo() {
      let result = await changeUserInfo(
        this.userInfo.id,
        this.userName,
        this.userSex,
        this.userAddress,
        this.userBirthday,
        this.userSign
      );
      Toast({
        message: result.message,
        position: "bottom",
        duration: 2000
      });
      if(result.success_code === 200) {
          this.$store.dispatch('getUserInfo')
          setTimeout(() => {
              this.$router.replace('/mine')
          }, 2000)
      }
    }
  },
  mounted() {
    this.userPhone = this.userInfo.userPhone;
    this.userName = this.userInfo.userName || "未填写";
    this.userSex = this.userInfo.userSex || "未填写";
    this.userAddress = this.userInfo.userAddress || "未填写";
    this.userBirthday = this.userInfo.userBirthday || "未填写";
    this.userSign = this.userInfo.userSign || "未填写";
  }
};
</script>
<style scoped lang="less">
.user-detail {
  width: 100%;
  height: 100%;
  .user-detail-top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    font-weight: bold;
  }
  .user-detail-group {
    .user-icon {
      height: 60px;
      padding: 0 10px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 50px;
        border-radius: 50%;
      }
    }
    .user-item {
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        border: none;
        outline: none;
        text-align: right;
      }
    }
    button {
      width: 90%;
      height: 40px;
      line-height: 40px;
      background-color: #e8e6e6;
      text-align: center;
      margin: 20px 5%;
      border: none;
      font-size: 16px;
      border-radius: 10px;
    }
  }
  .right-title-color {
    color: #999;
    font-size: 14px;
  }
}
</style>