webpackJsonp([37],{"Roh+":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".handle-box[data-v-61ad9402]{margin-bottom:20px}.handle-select[data-v-61ad9402]{width:120px}.handle-input[data-v-61ad9402]{width:150px;display:inline-block}",""])},XTX7:function(e,t,a){"use strict";var i=a("woOf"),l=a.n(i),o=a("3pLw");t.a={data:function(){return{dataurl:process.env.BASE_API+"sysUser/dataList.do",saveurl:process.env.BASE_API+"sysUser/save.do",deleteurl:process.env.BASE_API+"sysUser/delete.do",getdataurl:process.env.BASE_API+"sysUser/getId.do",updatepwdurl:process.env.BASE_API+"sysUser/updatePwd.do",roledataurl:process.env.BASE_API+"sysRole/dataList.do",checkdataurl:process.env.BASE_API+"sysRole/dataList.do",departmentdataurl:process.env.BASE_API+"sysDepartment/dataList.do",departmenttreeurl:process.env.BASE_API+"sysDepartment/getDepartmentTable.do",dialogFormVisible:!1,dialogPwdFormVisible:!1,editLoading:!1,editForm:{email:"",multiple:{roleids:!0},abled:{email:!0}},editForm_checkids:[],editForm_roleids:[],editForm_sysDepartment_id:"",editForm_sysDepartment_ids:[],searchForm:{nickname:"",email:"",pageNum:1,totalRow:0,pageSize:10,is_search:!1,order:""},tableData:[],multipleSelection:[],stateoptions:[{value:0,label:"启用"},{value:1,label:"未启用"}],checkoptions:[],roleoptions:[],departmentoptions:[],idepartmenttree:0,editPwdForm:{abled:{email:!1,nickname:!1}},pwdRules:{newpwd:[{required:!0,message:"请输入新密码",trigger:"blur"}],pwdagain:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},created:function(){this.loadData(),this.loadRoleData(),this.loadCheckData(),this.loadDepartData()},computed:{data:function(){return this.tableData}},methods:{handleCheckChange:function(e,t){++this.idepartmenttree%2==0&&(this.$refs.departmenttree.setCheckedNodes([]),this.$refs.departmenttree.setCheckedNodes([e]))},handleCurrentChange:function(e){this.searchForm.pageNum=e,this.loadData()},loadData:function(){var e=this,t=this;o.a.post(t.dataurl,this.searchForm,function(a){t.tableData=a.data.list,t.searchForm.totalRow=a.data.totalRow,e.searchForm.is_search=!1,console.log(t.tableData)}).catch(function(t){e.$eventHub.$emit("error",t)})},loadDepartData:function(){var e=this,t=this;o.a.post(t.departmenttreeurl,{},function(e){t.departmentoptions=e.data}).catch(function(t){e.$eventHub.$emit("error",t)})},loadRoleData:function(){var e=this,t=this;o.a.post(t.roledataurl,{sysflag:0,pageSize:1e3},function(e){var a;for(var i in e.data.list)a=e.data.list[i],t.roleoptions[i]={value:a.id,label:a.rolename}}).catch(function(t){e.$eventHub.$emit("error",t)})},loadCheckData:function(){var e=this,t=this;o.a.post(t.checkdataurl,{sysflag:1,pageSize:1e3},function(e){var a;for(var i in e.data.list)a=e.data.list[i],t.checkoptions[i]={value:a.id,label:a.rolename}}).catch(function(t){e.$eventHub.$emit("error",t)})},handleSearch:function(){this.searchForm.is_search=!0,this.loadData()},handleSort:function(e){return console.log(e),this.searchForm.order=e.prop+" "+e.order.replace("ending",""),this.handleSearch(),!1},stateformatter:function(e,t){return"0"==e.state?"启用":"未启用"},departmentformatter:function(e,t){return console.log(e),e.sysDepartment?e.sysDepartment.name:""},handleAdd:function(){this.dialogFormVisible=!0,this.editForm={abled:{email:!0}},this.editForm_checkids=[],this.editForm_roleids=[]},handlePwdEdit:function(e,t){this.dialogPwdFormVisible=!0,this.editPwdForm={id:t.id,email:t.email,nickname:t.nickname},this.editPwdForm.abled={email:!1,nickname:!1}},handleEdit:function(e,t){var a=this;this.dialogFormVisible=!0,this.editForm=l()({},t),this.editForm.abled||(this.editForm.abled={}),this.editForm.abled.email=!1,o.a.post(this.getdataurl+"?id="+this.editForm.id,{},function(e){console.log(e.data.roleids),console.log(e.data.checkids),a.editForm_roleids=e.data.roleids,a.editForm_checkids=e.data.checkids,e.data.sysDepartment&&(a.editForm_sysDepartment_id=e.data.sysDepartment.id,a.editForm_sysDepartment_ids=[e.data.sysDepartment.id],a.$refs.departmenttree.setCheckedKeys(a.editForm_sysDepartment_ids))}).catch(function(e){a.$eventHub.$emit("error",e)})},handleDelete:function(e,t){var a=this,i=this;console.log(t),this.$confirm("确定删除这个用户？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.a.post(i.deleteurl,{id:t.id},function(e){a.loadData()}).catch(function(e){console.log(e),i.$alert(e,"告警",{confirmButtonText:"确定"})}).catch(function(e){a.$eventHub.$emit("error",e)})}).catch(function(){})},handlePwdSave:function(){var e=this,t=this;if(this.editPwdForm.newpwd!=this.editPwdForm.pwdagain)return void this.$message.error({title:"错误",message:"两次密码输入不正确"});t.$refs.editPwdForm.validate(function(a){a&&o.a.post(t.updatepwdurl,{id:t.editPwdForm.id,newpwd:t.editPwdForm.newpwd,pwd:t.editPwdForm.pwd},function(a){console.log(a),a.data.success?(e.loadData(),e.dialogPwdFormVisible=!1):t.$message.error({title:"错误",message:a.data.msg})}).catch(function(t){e.$eventHub.$emit("error",t)})})},handleSave:function(){var e,t=this,a=this,i=a.$refs.departmenttree.getCheckedKeys();i&&i.length>0&&(e=i[0]),o.a.post(a.saveurl,{id:a.editForm.id,email:a.editForm.email,nickname:a.editForm.nickname,state:a.editForm.state,checkids:a.editForm_checkids,roleids:a.editForm_roleids,sysDepartment:{id:e}},function(e){t.loadData(),t.dialogFormVisible=!1}).catch(function(e){t.$eventHub.$emit("error",e)})},handleSelectionChange:function(e){this.multipleSelection=e},handleReset:function(){this.searchForm.is_search=!1,this.searchForm={email:"",nickname:"",pageNum:1,totalRow:0,pageSize:10,is_search:!1,order:""}},handleFalse:function(){return!1}}}},XWXg:function(e,t,a){"use strict";function i(e){a("l7El")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("XTX7"),o=a("ilZ/"),r=a("VU/8"),d=i,n=r(l.a,o.a,!1,d,"data-v-61ad9402",null);t.default=n.exports},"ilZ/":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-add mr10",attrs:{type:"primary",icon:"add"},on:{click:e.handleAdd}},[e._v("新增")]),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"登录账户"},model:{value:e.searchForm.email,callback:function(t){e.$set(e.searchForm,"email",t)},expression:"searchForm.email"}}),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"姓名"},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handleSearch}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handleReset}},[e._v("重置")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:""},on:{"sort-change":e.handleSort,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"email",label:"登录账户",sortable:"","sort-method":e.handleFalse,width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"姓名",sortable:"",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"所属部门",width:"120",formatter:e.departmentformatter}}),e._v(" "),a("el-table-column",{attrs:{prop:"logincount",label:"登录次数",width:"95"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"80",formatter:e.stateformatter}}),e._v(" "),a("el-table-column",{attrs:{prop:"checknames",label:"审批权限"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rolenames",label:"功能权限",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handlePwdEdit(t.$index,t.row)}}},[e._v("修改密码")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:e.searchForm.totalRow},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"修改用户密码",visible:e.dialogPwdFormVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogPwdFormVisible=t}},model:{value:e.dialogPwdFormVisible,callback:function(t){e.dialogPwdFormVisible=t},expression:"dialogPwdFormVisible"}},[a("el-form",{ref:"editPwdForm",attrs:{rules:e.pwdRules,model:e.editPwdForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"登录账户"}},[a("el-input",{attrs:{disabled:!e.editPwdForm.abled.email},model:{value:e.editPwdForm.email,callback:function(t){e.$set(e.editPwdForm,"email",t)},expression:"editPwdForm.email"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editPwdForm.id,expression:"editPwdForm.id"}],attrs:{type:"hidden"},domProps:{value:e.editPwdForm.id},on:{input:function(t){t.target.composing||e.$set(e.editPwdForm,"id",t.target.value)}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{disabled:!e.editPwdForm.abled.nickname},model:{value:e.editPwdForm.nickname,callback:function(t){e.$set(e.editPwdForm,"nickname",t)},expression:"editPwdForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"旧密码(管理员可不填)"}},[a("el-input",{attrs:{type:"password"},model:{value:e.editPwdForm.pwd,callback:function(t){e.$set(e.editPwdForm,"pwd",t)},expression:"editPwdForm.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{attrs:{type:"password"},model:{value:e.editPwdForm.newpwd,callback:function(t){e.$set(e.editPwdForm,"newpwd",t)},expression:"editPwdForm.newpwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"再次输入"}},[a("el-input",{attrs:{type:"password"},model:{value:e.editPwdForm.pwdagain,callback:function(t){e.$set(e.editPwdForm,"pwdagain",t)},expression:"editPwdForm.pwdagain"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.handlePwdSave}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogPwdFormVisible=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑用户信息",visible:e.dialogFormVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogFormVisible=t}},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"登录账户"}},[a("el-input",{attrs:{disabled:!e.editForm.abled.email},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.id,expression:"editForm.id"}],attrs:{type:"hidden"},domProps:{value:e.editForm.id},on:{input:function(t){t.target.composing||e.$set(e.editForm,"id",t.target.value)}}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.editForm.nickname,callback:function(t){e.$set(e.editForm,"nickname",t)},expression:"editForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.state,callback:function(t){e.$set(e.editForm,"state",t)},expression:"editForm.state"}},e._l(e.stateoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属部门"}},[a("el-tree",{ref:"departmenttree",attrs:{data:e.departmentoptions,"show-checkbox":"","default-expand-all":"","node-key":"id","check-strictly":"","default-checked-keys":e.editForm_sysDepartment_ids},on:{"check-change":e.handleCheckChange}})],1),e._v(" "),a("el-form-item",{attrs:{label:"审批权限"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.editForm_checkids,callback:function(t){e.editForm_checkids=t},expression:"editForm_checkids"}},e._l(e.checkoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"功能权限"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.editForm_roleids,callback:function(t){e.editForm_roleids=t},expression:"editForm_roleids"}},e._l(e.roleoptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.editLoading},on:{click:e.handleSave}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},l=[],o={render:i,staticRenderFns:l};t.a=o},l7El:function(e,t,a){var i=a("Roh+");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("4a70f68e",i,!0)}});