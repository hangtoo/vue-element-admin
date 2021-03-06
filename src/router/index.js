import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
*   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
**/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name:'dashboard',
    hidden: false,
    children: [{
      path: 'dashboard',
      component: _import('page/Readme'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'Readme', noCache: true },
    }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'sysmanager',
    meta: {
      title: 'sysmanager',
      icon: 'component'
    },
    children: [
      { path: 'sysuser', component: _import('page/SysUser'), name: 'sysuser', meta: { title: 'sysuser',icon: 'component' }},
      { path: 'sysmenu', component: _import('page/SysMenu'), name: 'sysmenu', meta: { title: 'sysmenu',icon: 'component' }},
      { path: 'sysrole', component: _import('page/SysRole'), name: 'sysRole', meta: { title: 'sysrole',icon: 'component' }},
      { path: 'sysdepartment', component: _import('page/SysDepartment'), name: 'sysDepartment', meta: { title: 'sysdepartment',icon: 'component' }},
      { path: 'tapilog', component: _import('page/TApiLog'), name: 'tapilog', meta: { title: 'tapilog',icon: 'component' }},
      { path: 'tbankfacade', component: _import('page/TBankFacade'), name: 'tbankfacade', meta: { title: 'tbankfacade',icon: 'component' }},
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'sysmanager1',
    meta: {
      title: 'sysmanager1',
      icon: 'component'
    },
    children: [
      { path: 'tinymce', component: _import('components-demo/tinymce'), name: 'tinymce-demo', meta: { title: 'tinymce',icon: 'component' }},
      { path: 'markdown', component: _import('components-demo/markdown'), name: 'markdown-demo', meta: { title: 'markdown' }},
      { path: 'json-editor', component: _import('components-demo/jsonEditor'), name: 'jsonEditor-demo', meta: { title: 'jsonEditor' }},
      { path: 'dnd-list', component: _import('components-demo/dndList'), name: 'dndList-demo', meta: { title: 'dndList' }},
      { path: 'splitpane', component: _import('components-demo/splitpane'), name: 'splitpane-demo', meta: { title: 'splitPane' }},
      { path: 'avatar-upload', component: _import('components-demo/avatarUpload'), name: 'avatarUpload-demo', meta: { title: 'avatarUpload' }},
      { path: 'dropzone', component: _import('components-demo/dropzone'), name: 'dropzone-demo', meta: { title: 'dropzone' }},
      { path: 'sticky', component: _import('components-demo/sticky'), name: 'sticky-demo', meta: { title: 'sticky' }},
      { path: 'count-to', component: _import('components-demo/countTo'), name: 'countTo-demo', meta: { title: 'countTo' }},
      { path: 'mixin', component: _import('components-demo/mixin'), name: 'componentMixin-demo', meta: { title: 'componentMixin' }},
      { path: 'back-to-top', component: _import('components-demo/backToTop'), name: 'backToTop-demo', meta: { title: 'backToTop' }},
      { path: 'drag-dialog', component: _import('components-demo/dragDialog'), name: 'dragDialog-demo', meta: { title: 'dragDialog' }},
      { path: 'drag-kanban', component: _import('components-demo/dragKanban'), name: 'dragKanban-demo', meta: { title: 'dragKanban' }}
    ]
  },
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [

  { path: '*', redirect: '/404', hidden: true }
]
