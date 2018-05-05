import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../views/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../views/page/Readme.vue'], resolve)
                },
                {
                    path: '/sysMenu',
                    component: resolve => require(['../views/page/SysMenu.vue'], resolve)
                },
                {
                		path: '/sysUser',
                		component: resolve => require(['../views/page/SysUser.vue'], resolve)
                },
                {
                		path: '/sysRole',
                		component: resolve => require(['../views/page/SysRole.vue'], resolve)
                },
                {
                		path: '/sysDepartment',
                		component: resolve => require(['../views/page/SysDepartment.vue'], resolve)
                },
                {
                		path: '/tBankFacade',
                		component: resolve => require(['../views/page/TBankFacade.vue'], resolve)
                },
                {
            		path: '/extConfigparam',
            		component: resolve => require(['../views/page/ExtConfigparam.vue'], resolve)
                },
                {
            		path: '/tCustomer',
            		meta: {
          		      keepAlive: true
            		},
            		component: resolve => require(['../views/page/TCustomer.vue'], resolve)
                },
                {
                		path: '/demo',
                		component: resolve => require(['../views/page/demo.vue'], resolve)
                },
                {
            		path: '/Contract',
            		name: 'Contract',
            		component: resolve => require(['../views/page/Contract.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../views/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../views/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../views/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../views/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../views/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../views/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../views/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../views/page/DragList.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/tCustomerInvest',
                    meta: {
            		      keepAlive: true
                     },
                    component: resolve => require(['../views/page/TCustomerInvest.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/tInvestInfo',
                    component: resolve => require(['../views/page/tInvestInfo.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/tPromotion',
                    component: resolve => require(['../views/page/tPromotion.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/trackStatistics',
                    component: resolve => require(['../views/page/TrackStatistics.vue'], resolve)    // 拖拽列表组件
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../views/page/Login.vue'], resolve)
        },
    ]
})
