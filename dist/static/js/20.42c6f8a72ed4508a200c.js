webpackJsonp([20],{"/yaY":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".vue-datasource *{box-sizing:border-box;font-size:14px}.vue-datasource .panel{margin-bottom:22px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.vue-datasource .panel-default{border-color:#d3e0e9}.vue-datasource .panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-right-radius:3px;border-top-left-radius:3px}.vue-datasource .panel-default>.panel-heading{height:56px;color:#333;background-color:#fff;border-color:#d3e0e9}.vue-datasource .pull-left{float:left!important}.vue-datasource .pull-right{float:right!important}.vue-datasource .form-group{margin-bottom:15px}.vue-datasource label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}.vue-datasource .form-control{display:block;width:100%;height:36px;color:#555;background-color:#fff;border:1px solid #ccd0d2;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.vue-datasource .btn,.vue-datasource .form-control{padding:6px 12px;font-size:14px;line-height:1.6;background-image:none}.vue-datasource .btn{display:inline-block;margin-bottom:0;font-weight:400;text-align:center;vertical-align:middle;touch-action:manipulation;cursor:pointer;border:1px solid transparent;white-space:nowrap;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-datasource .btn-primary{color:#fff;background-color:#3097d1;border-color:#2a88bd}.vue-datasource .table{width:100%;max-width:100%;margin-bottom:22px;border-collapse:collapse;border-spacing:0;text-align:center}.vue-datasource .table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.vue-datasource .table td,.vue-datasource .table th{padding:8px;line-height:1.6;vertical-align:top;border-top:1px solid #ddd}.vue-datasource .table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.vue-datasource .success td,.vue-datasource .success th{background-color:#dff0d8}.vue-datasource .pagination{display:inline-block;padding-left:0;margin:22px 0;border-radius:4px}.vue-datasource .pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;line-height:1.6;text-decoration:none;color:#3097d1;background-color:#fff;border:1px solid #ddd;margin-left:-1px}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;background-color:#fff;border-color:#ddd;cursor:not-allowed}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;background-color:#3097d1;border-color:#3097d1;cursor:default}.vue-datasource .pagination>li:first-child>a,.vue-datasource .pagination>li:first-child>span{margin-left:0;border-bottom-left-radius:4px;border-top-left-radius:4px}.vue-datasource .text-center{text-align:center}@media (min-width:768px){.form-inline .form-group{display:inline-block}.form-inline .control-label,.form-inline .form-group{margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}}",""])},DRI8:function(e,t,a){var n=a("/yaY");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("7a061774",n,!0)},bhGV:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-menu"}),e._v(" 表格")]),e._v(" "),a("el-breadcrumb-item",[e._v("Vue表格组件")])],1)],1),e._v(" "),e._m(0),e._v(" "),a("datasource",{attrs:{language:"zh-CN","table-data":e.getData,columns:e.columns,pagination:e.information.pagination,actions:e.actions},on:{change:e.changePage,searching:e.onSearch}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"plugins-tips"},[e._v("\n        vue-datasource：一个用于动态创建表格的vue.js服务端组件。\n        访问地址："),a("a",{attrs:{href:"https://github.com/coderdiaz/vue-datasource",target:"_blank"}},[e._v("vue-datasource")])])}]}},nYDz:function(e,t,a){a("DRI8");var n=a("VU/8")(a("y9Xs"),a("bhGV"),null,null);e.exports=n.exports},uPNd:function(e,t,a){!function(t,a){e.exports=a()}(0,function(){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="/dist/",t(0)}([function(e,t,a){"use strict";e.exports=a(9)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(a&&!o[2]?o[2]=a:a&&(o[2]="("+o[2]+") and ("+a+")"),e.push(o))}},e}},function(e,t,a){function n(e,t){for(var a=0;a<e.length;a++){var n=e[a],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(l(n.parts[i],t))}else{for(var o=[],i=0;i<n.parts.length;i++)o.push(l(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:o}}}}function r(e){for(var t=[],a={},n=0;n<e.length;n++){var r=e[n],i=r[0],o=r[1],s=r[2],l=r[3],c={css:o,media:s,sourceMap:l};a[i]?a[i].parts.push(c):t.push(a[i]={id:i,parts:[c]})}return t}function i(e,t){var a=g(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e,t){var a,n,r;if(t.singleton){var i=b++;a=h||(h=s(t)),n=c.bind(null,a,i,!1),r=c.bind(null,a,i,!0)}else a=s(t),n=u.bind(null,a),r=function(){o(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function c(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function u(e,t){var a=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var d={},p=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,b=0,v=[];e.exports=function(e,t){t=t||{},void 0===t.singleton&&(t.singleton=f()),void 0===t.insertAt&&(t.insertAt="bottom");var a=r(e);return n(a,t),function(e){for(var i=[],o=0;o<a.length;o++){var s=a[o],l=d[s.id];l.refs--,i.push(l)}if(e){n(r(e),t)}for(var o=0;o<i.length;o++){var l=i[o];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete d[l.id]}}}};var _=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),i=n(r),o=a(5),s=n(o),l=a(10),c=n(l);t.default={components:{Pagination:c.default},props:{tableData:{type:Array,required:!0},language:{type:String,default:"es"},columns:{type:Array,required:!0},pagination:{type:Object,default:function(){return{total:0,to:0,from:0,per_page:15}}},actions:{type:Array,default:function(){return[]}}},data:function(){return{limits:[1,5,10,15,20],perpage:15,selected:null,indexSelected:-1,search:""}},computed:{translation:function(){return s.default.translations[this.language]},tableInfo:i.default.tableInfo},methods:{fetchFromObject:i.default.fetchFromObject,changePage:i.default.changePage,selectRow:i.default.selectRow,searching:function(){this.selected=null,this.indexSelected=-1,this.$emit("searching",this.search)}},watch:{perpage:function(){this.selected=null,this.indexSelected=-1,this.$emit("change",{perpage:this.perpage,page:1})},tableData:function(){this.selected=null,this.indexSelected=-1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["pages","translation"],computed:{items:function(){var e=[],t=this.pages.current_page-2,a=this.pages.current_page+2,n=5;t<=0&&(t=1,a=5),a>=this.pages.last_page&&(t=this.pages.last_page-4,a=this.pages.last_page),this.pages.last_page<5&&(n=this.pages.last_page),t<=0&&(t=1),0!=this.pages.last_page&&1!=this.pages.last_page||(n=1);for(var r=0;r<n;r++)e[r]=r+t;return e}},methods:{firstPage:function(){1!=this.pages.current_page&&this.change(1)},previous:function(){1!=this.pages.current_page&&this.change(--this.pages.current_page)},change:function(e){this.$emit("change",e)},next:function(){this.pages.current_page!=this.pages.last_page&&this.change(++this.pages.current_page)},lastPage:function(e){this.pages.current_page!=this.pages.last_page&&this.change(e)},changePageWithKeyBoard:function(e){"ArrowLeft"===e?this.previous():"ArrowRight"===e&&this.next()}},created:function(){var e=this;window.addEventListener("keyup",function(t){var a=t.key;return e.changePageWithKeyBoard(a)})}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={translations:{en:{table:{label_limits:"Show",label_search:"Search",placeholder_search:"Type to search..",records_not_found:"No records found"},pagination:{label_show:"Showing",label_to:"to",label_of:"of",label_entries:"entries",btn_first:"First",btn_last:"Latest"}},es:{table:{label_limits:"Mostrar",label_search:"Buscar",placeholder_search:"Buscar ..",records_not_found:"No se encontraron registros."},pagination:{label_show:"Mostrando",label_to:"a",label_of:"de",label_entries:"registros",btn_first:"Primero",btn_last:"Último"}},fr:{table:{label_limits:"Afficher",label_search:"Recherche",placeholder_search:"Recherche par mot-clé..",records_not_found:"Aucun enregistrements trouvés"},pagination:{label_show:"Affichage de",label_to:"à",label_of:"de",label_entries:"entrées",btn_first:"Première",btn_last:"Dernière"}},"zh-CN":{table:{label_limits:"显示",label_search:"搜索",placeholder_search:"输入搜索..",records_not_found:"记录未找到"},pagination:{label_show:"正在显示",label_to:"到",label_of:"总共",label_entries:"条目",btn_first:"首页",btn_last:"未页"}},ca:{table:{label_limits:"Mostrar",label_search:"Buscar",placeholder_search:"Buscar ..",records_not_found:"No s'han trobat registres."},pagination:{label_show:"Mostrant",label_to:"a",label_of:"de",label_entries:"registres",btn_first:"Primer",btn_last:"Últim"}}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={fetchFromObject:function(e,t,a){if(void 0===e)return!1;var n=t.indexOf(".");return n>-1?this.fetchFromObject(e[t.substring(0,n)],t.substr(n+1)):void 0!==a?a(e[t]):e[t]},changePage:function(e){this.selected=null,this.indexSelected=-1,this.$emit("change",{perpage:this.perpage,page:e})},selectRow:function(e,t){this.indexSelected==t?(this.indexSelected=-1,this.selected=null):(this.indexSelected=t,this.selected={row:e,index:t})},tableInfo:function(){return this.translation.pagination.label_show+" "+(null==this.pagination.from?0:this.pagination.from)+" "+this.translation.pagination.label_to+" "+(null==this.pagination.to?0:this.pagination.to)+" "+this.translation.pagination.label_of+" "+this.pagination.total+" "+this.translation.pagination.label_entries}}},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"\n.vue-datasource .Vue__panel-body[data-v-0747af48] {\n  padding: 0;\n}\n.vue-datasource .Vue__panel-body .Vue__table[data-v-0747af48] {\n    margin-bottom: 0;\n}\n.vue-datasource .Vue__panel-footer .Vue__datasource_actions[data-v-0747af48] {\n  margin: 10px 0;\n}\n",""])},function(e,t,a){t=e.exports=a(1)(),t.push([e.id,"\n.Vue__pagination nav .pagination[data-v-741f57a8] {\n  margin: 10px 0 !important;\n}\n",""])},function(e,t,a){var n,r;a(13),n=a(3);var i=a(11);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-0747af48",e.exports=n},function(e,t,a){var n,r;a(14),n=a(4);var i=a(12);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-741f57a8",e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-datasource"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"form-inline"},[a("div",{staticClass:"form-group pull-left"},[a("label",{staticClass:"control-label pr2"},[e._v(e._s(e.translation.table.label_limits))]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.perpage,expression:"perpage"}],staticClass:"form-control",attrs:{number:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.perpage=t.target.multiple?a:a[0]}}},e._l(e.limits,function(t){return a("option",{domProps:{value:t}},[e._v(e._s(t))])}))]),e._v(" "),a("div",{staticClass:"form-group pull-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:e.translation.table.placeholder_search},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.searching(t)}}},[e._v(e._s(e.translation.table.label_search)+"\n          ")])]),e._v(" "),a("div",{staticClass:"clearfix"})])]),e._v(" "),a("div",{staticClass:"panel-body Vue__panel-body"},[a("table",{staticClass:"table table-striped Vue__table"},[a("thead",[a("tr",e._l(e.columns,function(t){return a("th",[e._v(e._s(t.name))])}))]),e._v(" "),a("tbody",[0==e.pagination.total?a("tr",[a("td",{attrs:{colspan:e.columns.length}},[e._v(e._s(e.translation.table.records_not_found))])]):e._l(e.tableData,function(t,n){return a("tr",{class:{success:n==e.indexSelected},on:{click:function(a){a.preventDefault(),e.selectRow(t,n)}}},e._l(e.columns,function(n){return a("td",{domProps:{innerHTML:e._s(e.fetchFromObject(t,n.key,n.render))}})}))}),e._v(" "),a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:e.columns.length}},[e._v("\n            "+e._s(e.tableInfo)+"\n          ")])])],2)])]),e._v(" "),a("div",{staticClass:"panel-footer Vue__panel-footer"},[a("div",{staticClass:"pull-left"},[a("div",{staticClass:"btn-group Vue__datasource_actions"},e._l(e.actions,function(t){return a("button",{staticClass:"btn btn-default",class:t.class,attrs:{type:"button"},on:{click:function(a){t.event(a,e.selected)}}},[t.icon?a("i",{staticClass:"pr1",class:t.icon}):e._e(),e._v("\n            "+e._s(t.text)+"\n          ")])}))]),e._v(" "),a("div",{staticClass:"pull-right"},[a("pagination",{attrs:{pages:e.pagination,translation:e.translation.pagination},on:{change:e.changePage}})],1),e._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Vue__pagination"},[a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",{class:1==e.pages.current_page?"disabled":""},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.firstPage(t)}}},[e._v(e._s(e.translation.btn_first))])]),e._v(" "),a("li",{class:1==e.pages.current_page?"disabled":""},[a("a",{attrs:{href:"#","aria-label":"Previous"},on:{click:function(t){t.preventDefault(),e.previous(t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])]),e._v(" "),e._l(e.items,function(t){return a("li",{class:e.pages.current_page==t?"active":""},[a("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.change(t)}}},[e._v(e._s(t))])])}),e._v(" "),a("li",{class:e.pages.current_page==e.pages.last_page?"disabled":""},[a("a",{attrs:{href:"#","aria-label":"Next"},on:{click:function(t){t.preventDefault(),e.next(t)}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])]),e._v(" "),a("li",{class:e.pages.current_page==e.pages.last_page?"disabled":""},[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.lastPage(e.pages.last_page)}}},[e._v(e._s(e.translation.btn_last))])])],2)])])},staticRenderFns:[]}},function(e,t,a){var n=a(7);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,a){var n=a(8);"string"==typeof n&&(n=[[e.id,n,""]]);a(2)(n,{});n.locals&&(e.exports=n.locals)}])})},y9Xs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mtWM"),r=a.n(n),i=a("uPNd"),o=a.n(i);t.default={data:function(){var e=this;return{url:"./static/datasource.json",information:{pagination:{},data:[]},columns:[{name:"Id",key:"id"},{name:"Name",key:"name"},{name:"email",key:"email"},{name:"ip",key:"ip"}],actions:[{text:"选择",class:"btn-primary",event:function(t,a){e.$message("选中的行数： "+a.row.id)}}],query:""}},components:{Datasource:o.a},methods:{changePage:function(e){this.information.pagination.per_page=e.perpage,this.information.data=this.information.data},onSearch:function(e){this.query=e}},computed:{getData:function(){var e=this;return e.information.data.filter(function(t){if(t.name.indexOf(e.query)>-1)return t})}},beforeMount:function(){var e=this;r.a.get(this.url).then(function(t){e.information=t.data})}}}});