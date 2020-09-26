<template>
  <div class="login">
    <div class="login-inner">
      <div class="login-header">
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginMode}" @click="dealLoginMode(true)">验证码登录</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="dealLoginMode(false)">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form>
          <div :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                class="get-verification"
                v-if="!countDown"
                :class="{phone_right: phoneRight}"
                @click.prevent="getVerifyCode()"
              >获取验证码</button>
              <button v-else disabled="disabled" class="get-verification">已发送({{countDown}}s)</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code" />
            </section>
            <section class="login-hint">
              温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <div :class="{current: !loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名" v-model="user_name" />
              </section>
              <section class="login-verification">
                <input type="password" maxlength="20" placeholder="密码" v-if="pwdMode" v-model="pwd" />
                <input type="text" maxlength="20" placeholder="密码" v-else v-model="pwd" />
                <div class="switch-show">
                  <img
                    @click.prevent="dealPwdMode(false)"
                    :class="{on: pwdMode}"
                    src="./images/hide_pwd.png"
                    alt
                    width="20"
                  />
                  <img
                    @click.prevent="dealPwdMode(true)"
                    :class="{on: !pwdMode}"
                    src="./images/show_pwd.png"
                    alt
                    width="20"
                  />
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="4" placeholder="验证码" v-model="captcha" />
                <img
                  class="get-verification"
                  src="http://localhost:1688/api/captcha"
                  alt="captcha"
                  @click.prevent="getCaptcha()"
                  ref="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            loginMode: true
        }
    },
    methods: {
        dealLoginMode(flag) {
            this.loginMode = flag
        }
    }
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  .login-inner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
    .login-header {
      .login-header-title {
        padding-top: 40px;
        padding-bottom: 10px;
        text-align: center;
        a,
        a:link,
        a:visited,
        a:hover,
        a:active {
          text-decoration: none;
        }
        a {
          color: #333;
          padding-bottom: 4px;
        }
        a:first-child {
            margin-right: 10px;
        }
        .current {
          color: mediumpurple;
          font-weight: bold;
          border-bottom: 1px solid mediumpurple;
        }
      }
    }
    .login-content {
      form {
        div {
          display: none;
          input {
            width: 100%;
            height: 100%;
            padding-left: 8px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;
          }
          input:focus {
            border: 1px solid mediumpurple;
          }
          .login-message {
            position: relative;
            margin-top: 15px;
            height: 50px;
            .get-verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              background: transparent;
            }
            .phone_right {
              color: purple;
            }
          }
          .login-verification {
            position: relative;
            margin-top: 15px;
            height: 50px;
            .switch-show {
              position: absolute;
              right: 10px;
              top: 12px;
              img {
                display: none;
              }
              .on {
                display: block;
              }
            }
          }
          .login-hint {
            margin-top: 12px;
            color: #999;
            font-size: 12px;
            line-height: 20px;
            a,
            a:link,
            a:visited,
            a:hover,
            a:active {
              text-decoration: none;
            }
            a {
              color: mediumpurple;
            }
          }
        }
        .current {
          display: block;
        }
        .login-submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: mediumpurple;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }
      .login-back {
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 15px;
        border-radius: 4px;
        background: transparent;
        border: 1px solid mediumpurple;
        color: mediumpurple;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
      }
    }
  }
}
</style>