<template>
    <div>
        <h6>基本信息</h6>
        <el-form :model="form1" ref="form">
            <el-form-item label="客户号" :label-width="formLabelWidth">
                <el-input v-model="form.number" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.gender" placeholder="请选择性别">
                    <el-option label="男" value="man"></el-option>
                    <el-option label="女" value="woman"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="教育程度" :label-width="formLabelWidth">
                <el-select v-model="form.education" placeholder="请选择">
                    <el-option label="大专" value="dazhuan"></el-option>
                    <el-option label="本科" value="benke"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="婚姻状态" :label-width="formLabelWidth">
                <el-select v-model="form.marriage" placeholder="请选择">
                    <el-option label="已婚" value="married"></el-option>
                    <el-option label="未婚" value="unmarried"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="住宅性质" :label-width="formLabelWidth">
                <el-input v-model="form.residence" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="现居住地" :label-width="formLabelWidth">
                <el-input v-model="form.address" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="证件类型" :label-width="formLabelWidth">
                <el-input v-model="form.documentType" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="证件号码" :label-width="formLabelWidth">
                <el-input v-model="form.documentNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="职业状态" :label-width="formLabelWidth">
                <el-input v-model="form.occupation" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="客户来源" :label-width="formLabelWidth">
                <el-select v-model="form.customer" placeholder="请选择">
                    <el-option label="学生" value="stu"></el-option>
                    <el-option label="成人" value="adult"></el-option>
                    <el-option label="老人" value="old"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data () {
            return{
                activeName: 'first',
                form1: {
                    number: '',
                    name: '',
                    gender: '',
                    education: '',
                    marriage: '',
                    residence: '',
                    address: '',
                    documentType: '',
                    documentNumber: '',
                    email: '',
                    occupation: '',
                    customer: '',
                    // region: '',
                    // date1: '',
                    // date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '80px'
            }
        },
        methods: {
            //  handleClick(tab, event) {
            //     console.log(tab, event);
            // }
        }
    }
</script>

