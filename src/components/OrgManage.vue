<template>
  <div id="app">
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
            <orgTree></orgTree>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import OrgTree from './OrgTree'
export default {
  components: { OrgTree }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
