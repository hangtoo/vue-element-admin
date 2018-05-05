<template>
    <div class="login-wrap">
        <div class="ms-title">直销银行对接服务平台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">欢迎使用直销银行对接服务平台。</p>
            </el-form>
        </div>
    </div>
</template>

<script>

import http from '../../util/http';
    export default {
        data: function(){
            return {
                loginurl: this.GLOBAL.baseurl + 'sysUser/login.do',
                fullscreenLoading: false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
          submitForm(formName) {
              console.log(formName);
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.fullscreenLoading = true;
                        localStorage.setItem('ms_username',self.ruleForm.username);
                        http.post(self.loginurl, {
                          email : self.ruleForm.username,
                          pwd : self.ruleForm.password
                        },response => {
                          this.fullscreenLoading = false;
                          console.log(response);
                          if(response.status==200&&!!response.data&&response.data.statusCode==200){
                              self.$router.push('/readme');
                              return;
                          }
                          else{
                              // self.$alert(response.data.msg, '告警', {
                              //   confirmButtonText: '确定'
                              // });

                              this.$message.error({
                                  title: '错误',
                                  message: response.data.msg
                              });
                          }
                        }).catch(err => {
                           this.fullscreenLoading = false;
                           self.$eventHub.$emit('error', err);
                        });

                        // this.$axios.post(self.loginurl,{
                        //   email : self.ruleForm.username,
                        //   pwd : self.ruleForm.password
                        // }).then(response => {
                        //   console.log(response);
                        //   if(response.data.statusCode==200){
                        //     self.$router.push('/readme');
                        //     return;
                        //   }else{
                        //     self.$alert(response.data.msg, '告警', {
                        //       confirmButtonText: '确定'
                        //     });
                        //   }
                        //
                        // }).catch(err => {
                        //   self.$eventHub.$emit('error', err);
                        // })



                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
