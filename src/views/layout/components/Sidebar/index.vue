<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import http from '@/utils/http';
import { asyncRouterMap, constantRouterMap } from '@/router'

export default {
  data () {
    return {
        permission_routers: constantRouterMap
    }
  },
  components: { SidebarItem, ScrollBar },
  mounted(){
    console.log('---------');
    console.log(process.env);

    this.loading = true;
    http.post('http://wx.sunfintech.com.cn/sunvue-gateway-webapp/sysMenu/getMenus.do',{},response => {
      console.log(response);
      this.loading = false
    }).catch(err => {
       this.loading = false
    });
  },
  computed: {
    ...mapGetters([
      //'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
