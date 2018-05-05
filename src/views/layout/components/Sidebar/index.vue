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

export default {
  components: { SidebarItem, ScrollBar },
  mounted(){
    console.log('---------');
    this.loading = true;
    http.post(process.env.BASE_API+'/sysMenu/getMenus.do',{},response => {

      console.log(response);
      this.loading = false
    }).catch(err => {
       this.loading = false
    });
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
