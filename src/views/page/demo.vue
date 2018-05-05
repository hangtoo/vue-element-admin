<template>
  <div>
  <div id="_PassWordWidget" onselectstart="return false;" style="position: fixed; left: 0px; bottom: 0px; z-index: 9003; width: 100%; height: 201px; background-color: rgb(217, 218, 223); user-select: none;">
      <div style="position:relative;top:0px;left:0px;width: 100%;height: 100%;z-index: 9003;">

      </div>
  </div>
  <div id="vPasswordWidget"
  password-widget="http://localhost:9999/api/pwd/getTrsPassword.do"
  password-widget1="http://10.0.1.152:9999/sunvue-gateway-app/api/pwd/getTrsPassword.do"
  modulus-hex="9c4ebeacd2f30283df44853e59b1c825f1a95760c44f48db786560806431faccc8b54e19bc5f37ba54ffc2b138ba336b545e51a51e1b5b297e84e4149e4440f845f6d2ac44829aa301b742a30e28efa619bcd7d148a5ec819808ae3974b5fd7672a2df0fce835031f45b897cb82887de57a5247f1989d24ac79cbb1df678918b"
  maxlength="20" name="Password"
  style="width: 70%; height: 45px; line-height: 45px; text-align: left; display: inline-block; margin:0 auto;vertical-align: middle; font-size: 14px; color:#999999; margin-left: 4%;">


  </div>

  <el-button type="primary" @click="test()">登录</el-button>
  <el-input v-model="password" placeholder="password"></el-input>
</div>
</template>

<script>
import {JSEncrypt} from 'jsencrypt';
import public_key from '../../config/rsa_public_key';
import http from '../../util/http';
import jspwd from '../../statics/js/pwd/js-password-widget.min';
//import password from '../../statics/js/pwd/js-password-widget.min.js';

  export default {
    data() {
      return {
        password:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: ['选项1','选项2']
      }
    },

    mounted() {
      console.log("demo mounted");
      //jspwd.init(window,{fn:$("#vPasswordWidget")});
      jspwd.PasswordWidget(window,window.jQuery);
    },

    methods: {
      test(){
        console.log(111);
        var e = new JSEncrypt();
    		e.setPublicKey(public_key);
        console.log(e.encrypt('admin'));
      }
    }


  }
</script>
