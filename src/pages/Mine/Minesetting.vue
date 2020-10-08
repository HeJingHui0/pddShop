<template>
  <div class="mine_setting">
    <div class="setting_item">
      <minecell leftTitle="免密支付设置" leftIcon="itlike-1"></minecell>
      <minecell leftTitle="免拼单设置" leftIcon="itlike-1"></minecell>
      <minecell leftTitle="消息接受设置" leftIcon="itlike-1"></minecell>
      <minecell leftTitle="常见问题" leftIcon="itlike-1"></minecell>
      <minecell leftTitle="意见反馈" leftIcon="itlike-1"></minecell>
      <minecell leftTitle="商家入驻" leftIcon="itlike-1"></minecell>
    </div>
    <div class="logout" @click="logout">退出登录</div>
  </div>
</template>

<script>
import Minecell from "./Minecell";
import { MessageBox } from "mint-ui";
import {mapActions} from 'vuex';
export default {
  data() {
    return {};
  },
  components: {
    Minecell
  },
  methods: {
    ...mapActions(['logout']),
    logout() {
      MessageBox.confirm("确定退出").then(action => {
        if (action === "confirm") {
          this.logout({})
          this.$router.replace('/home')
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.mine_setting {
  .setting_item {
    border-bottom: 1px solid #ccc;
  }
  .logout {
    width: 100%;
    margin-top: 20px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f0f0;
  }
}
</style>