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
        permission_routers: []
    }
  },
  components: { SidebarItem, ScrollBar },
  mounted(){
    console.log(process.env);

    this.loading = true;
    http.post(process.env.BASE_API + 'sysMenu/getMenus.do',{},response => {

      if(!response||!response.data){
          this.$router.push('/login');
          return;
      }

      let tmp=constantRouterMap;
      for(let i in tmp){
        if(tmp[i].name=='dashboard'){
          tmp[i].hidden=true;
        }
        let children=tmp[i].children;
        if(children&&children.length>0){

          for(let j in children){
            if(children[j].name=='tinymce-demo'){
              children[j].hidden=true;
            }
          }

        }

      }
      this.permission_routers=tmp;

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
