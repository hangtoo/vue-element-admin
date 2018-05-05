<style scoped>

.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 150px;
    display: inline-block;
}

</style>

<template>
<div class="table">
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i> 报表管理</el-breadcrumb-item>
            <el-breadcrumb-item>数据埋点统计</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
	<div class="handle-box">
		<span>&#12288</span>
    </div>


    <el-table :data="trackData" border fit highlight-current-row style="width: 100%" ref="singleTable" @sort-change="handleSort">



        <el-table-column prop="value" label="第三方统计" width="120" align="center">
        </el-table-column>


        <el-table-column prop="label" label="地址">
        </el-table-column>


 	</el-table>
</div>

</template>

<script>
import http from '../../util/http';
export default {
    data() {
            return {
                trackData:[{
                  value:'腾讯',
                  label:'http://mta.qq.com/'
                }],
                flag_options:[{
                  value:'',
                  label:'全部'
                },{
                  value:'0',
                  label:'未开户'
                },{
                  value:'1',
                  label:'已开户未购买'
                },{
                  value:'2',
                  label:'已开户已购买'
                }],
                risk_options:[{
                  value:'',
                  label:'全部'
                },{
                  value:'1',
                  label:'保守型'
                },{
                  value:'2',
                  label:'谨慎型'
                },{
                  value:'3',
                  label:'稳健型'
                },{
                  value:'4',
                  label:'积极型'
                },{
                  value:'5',
                  label:'激进型'
                }],
            }
        },
        created() {
            this.loadData();
        },
        computed: {
            data() {
                const self = this;
                return self.tableData;
            }
        },
        methods: {

        }
}

</script>
