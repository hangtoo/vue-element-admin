<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">

            </el-breadcrumb>
        </div>
        <div class="ms-doc backActive">
           <h3>平台概况</h3>
            <p class="pMargin"><span class="spanLast">总用户数量： {{statistics.customercount}}</span><span class="spanLast">总交易量： {{statistics.totalmoney}}</span></p>
            <p class="pMargin"><span class="spanLast">今日注册人数： {{statistics.todayrecustomer}}</span></p>
        </div>

        <div class="ms-doc" style="margin-top:30px;">
         <h3>每日数据统计</h3>

           <div class="handle-box">
           	<span>&#12288</span>
           </div>

          <div class="handle-box" style="text-align:right">
           	<span>&#12288&#12288</span> <el-button type="primary" @click="exportTable()">导出表格</el-button>
           </div>

        <div class="schart">
        <schart canvasId="line" width="950"  height="400" :data="data1" type="line" :options="options1"></schart>
        </div>
        <div class="schart">
        <schart canvasId="line1" width="950" height="400" :data="data2" type="line" :options="options2"></schart>
        </div>
        <div class="schart">
        <schart canvasId="line2" width="950" height="400" :data="data3" type="line" :options="options3"></schart>
        </div>
        </div>


    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import http from '@/utils/http';
    export default {
         components: {
            Schart
        },
        data: () => ({
            data1:[],
            data2:[],
            data3:[],
            data4:[],
            options1: {
                title: '每日注册人数（人）',
                bgColor: '#fff',
                titleColor: '#222',
                fillColor: '#666',
                axisColor: '#222',
                contentColor: '#ccc'
            },
             options2: {
                title: '每日交易人数（人）',
                bgColor: '#fff',
                titleColor: '#222',
                fillColor: '#666',
                axisColor: '#222',
                contentColor: '#ccc'
            },
             options3: {
                title: '每日成交量（元）',
                bgColor: '#fff',
                titleColor: '#222',
                fillColor: '#666',
                axisColor: '#222',
                contentColor: '#ccc'
            },
            statistics: {
            	customercount: '',
            	todayrecustomer: '',
            	totalmoney: ''
            }
        }),
         created() {
            this.loadData();
        },
        methods:{
        	loadData(){
        		var self = this;
				http.post(process.env.BASE_API + 'tCustomer/readmedata.do',{},
				response => {
        			self.statistics.customercount = response.data.customercount;
        			self.statistics.todayrecustomer = response.data.todayrecustomer;
        			self.statistics.totalmoney = response.data.totalmoney;
         			self.data1= response.data.monthrecustomerlist;
         			self.data2= response.data.monthcountlist;
         			self.data3= response.data.monthmoenylist;
         			self.data4= response.data.exclist;
      				console.log(response.data);
				}).catch(err => {
    				console.log(err);
				});
        	},
        	exportTable() {
				require.ensure([], () => {
            	var myDate = new Date().toDateString();
	        	const { export_json_to_excel } = require('../../vendor/Export2Excel');
	            const tHeader = ['日期', '每日注册人数（人）', '每日交易人数（人）', '每日成交量（元）'];
	            const filterVal = ['date', 'customeritem', 'countitem', 'moenyitem'];
	            const list = this.data4;
	            const data = this.formatJson(filterVal, list);
	            export_json_to_excel(tHeader, data, '每日数据统计'+myDate);
	          })
			},
       		formatJson(filterVal, jsonData) {
				return jsonData.map(v => filterVal.map(j => v[j]))
       		}
        }




    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
    .ms-doc{
    	background:#fff;
    	padding: 10px 0 30px 0;
    }
    .ms-doc h3{
    	border:none;
    	background:#fff;
    	font-size:28px;
    }
    .backActive{
    	background:#efefef !important;
    	border-radius:10px;
    }
    .backActive h3{
    	background:#efefef !important;
    }
    .ms-doc>p{
    	font-size:20px;
    	width: 100%;
    	font-weight:600;
    	padding: 0 30px;
    }
    .ms-doc>p>.spanLast{
    	margin-left:100px;
    }
    .ms-doc>p.pMargin{
    	margin-top:20px;
    }
</style>
