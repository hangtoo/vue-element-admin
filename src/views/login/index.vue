<template>
  <div class="login-container">
    <div class="title-container">
      <h3 class="title">{{$t('login.title')}}</h3>
      <lang-select class="set-language"></lang-select>
    </div>
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" :placeholder="$t('login.username')" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input name="password" :type="passwordType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" :placeholder="$t('login.password')" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:5px;" :disabled="disabled" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>

      <div class="tips">
        <span style="margin-right:18px;">{{$t('login.welcome')}} </span>
      </div>

    </el-form>


  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'
import http from '@/utils/http';
import { setToken } from '@/utils/auth' // getToken from cookie
export default {
  components: { LangSelect },
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error(this.$t('login.tip.username')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error(this.$t('login.tip.password')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      disabled: false,
      showDialog: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      console.log('handleLogin');
      let self=this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.disabled = true;

          http.post(process.env.BASE_API+'sysUser/login.do',{
            email : self.loginForm.username,
            pwd : self.loginForm.password
          },response => {

            if(!response.data){
              self.$message.error({
                  message: 'timeout error'
              });
              this.loading = false;
              this.disabled = false;
              return;
            }

            if(!response.data.success){
              self.$message.error({
                  message: response.data.msg
              });
              this.loading = false;
              this.disabled = false;
              return;
            }

            //commit('SET_TOKEN', response.data)
            setToken(self.loginForm.username)
            this.loading = false
            this.disabled = false;
            this.$router.push({ path: '/' })

          }).catch(err => {
             this.loading = false
             this.disabled = false;
          });

          // this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
          //   this.loading = false
          //   this.$router.push({ path: '/' })
          // }).catch(() => {
          //   this.loading = false
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
$gray:#000;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 25px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $gray;
      height: 25px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: $bg !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid #bfcbd9;
    height: 43px;
    background: #fff;
    border-radius: 5px;
    color: #1f2d3d;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 450px;
    height:260px;
    padding: 35px 35px 15px 35px;
    margin: 180px auto;
    background: #fff;
    border-radius:5px;
  }
  .tips {
    font-size: 12px;
    margin-bottom: 15px;
    color: $bg;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 2px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: absolute;
    width:100%;
    margin: 100px auto;
    text-align: center;
    .title {
      font-size: 30px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
