<template>
    <el-form ref="form" :model="queryObj" :inline="true">
        <el-form-item label="资源名称">
            <el-input v-model="queryObj.name"></el-input>
        </el-form-item>
        <el-form-item label="资源类型">
            <el-select v-model="queryObj.region" placeholder="资源类型">
            <el-option label="数据库表" value="1"></el-option>
            <el-option label="服务接口" value="2"></el-option>
            <el-option label="文件" value="3"></el-option>
            <el-option label="文件夹" value="4"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
            <el-date-picker
                v-model="queryObj.time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
        </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

    </el-form>
</template>
<script>
export default {
    methods: {
        onsubmit: function (){
            this.$emit('queryList',queryObj);
        }
    }
}
</script>

