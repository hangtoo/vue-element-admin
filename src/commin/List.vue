<template>
    <div>
        <template>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="30%">
                </el-table-column>
                <el-table-column prop="number" label="序号" width="50%">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="100%">
                </el-table-column>
                <el-table-column prop="idNumber" label="身份证号" width="170%">
                </el-table-column>
                <el-table-column prop="loanAmount" label="借款金额" sortable show-overflow-tooltip width="110%">
                </el-table-column>
                <el-table-column prop="loanTime" label="借款时间" sortable show-overflow-tooltip width="100%">
                </el-table-column>
                <el-table-column prop="loanPrincipal" label="放款本金" sortable show-overflow-tooltip width="130%">
                </el-table-column>
                <el-table-column prop="interest" label="利息" show-overflow-tooltip width="100%">
                </el-table-column>
                <el-table-column prop="score" label="风险评分" sortable show-overflow-tooltip width="130%">
                </el-table-column>
                <el-table-column prop="state" label="审批状态" show-overflow-tooltip width="90%">
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="100">
                </el-pagination>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: {
        baseUrl: 'http://localhost:3003',
        tableData: [],
        form: {
            name: '',
            iDcard: '',
            region: '',
            date1: '',
            date2: '',
            fundSide: '',
            fundProducing: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        }
    },
    methods: {
        // 和具体显示的列表有关
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    props:['listData']
}
</script>

<style>
     /* 列表展示 */

    .middle {
        width: 99%;
        height: 350px;
        background-color: #fff;
        padding-top: 10px;
        padding-left: 10px;
        border-radius: 8px;
        margin-bottom:5px;
    }


    /* 功能列表的设置*/

    .el-tag {
        background-color: #fff !important;
        padding: 0 25px !important;
        margin-right: 6px;
        height: 30px !important;
        line-height: 30px !important;
        font-size: 14px !important;
        font-family: "微软雅黑";
        color: #333 !important;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid rgba(64, 158, 255, .2);
    }

    .middle .list {
        width: 100%;
        margin-top: 10px;
    }


    /* 表头居中*/

    .el-table th {
        text-align: center;
    }

    .el-table td,
    .el-table th.is-leaf {
        background-color: #f5f7fa;
        text-align: center;
    }


    /* 列表100%显示*/

    .el-table__body,
    .el-table__footer,
    .el-table__header {
        width: 100% !important;
    }


    /* 列表共东条的设置 */

    .el-table__body-wrapper {
        height: 270px;
        overflow: auto;
    }

    .el-table td,
    .el-table th {
        padding: 7px 0 !important;
    }


    /* 给table  的td加背景色 */

    .el-table__body>tr:nth-child(even)>td {
        background-color: #fff !important;
    }


    /*（奇数行）*/

    .el-table__body>tr:nth-child(odd)>td {
        background-color: #EFF7FF !important;
    }


    /* 分页 */

    .block {
        text-align: center;
    }

</style>

