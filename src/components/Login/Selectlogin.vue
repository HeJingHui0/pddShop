<template>
  <div class="select_login">
      <div class="select_login_title">选择登录方式</div>
      <router-link class="select_login_btn" tag="botton" to="/login">手机登录</router-link>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
.select_login {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    display: flex;
    flex-direction: column;
    align-items: center;
    .select_login_title {
        font-size: 24px;
        margin-top: 200px;
        margin-bottom: 50px;
    }
    .select_login_btn {
        font-size: 24px;
        background-color: #d87777;
        color: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>