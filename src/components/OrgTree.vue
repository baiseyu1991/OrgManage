<template>
<div>
    <el-input  placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
    class="filter-tree"
    :data="data2"
    :props="defaultProps"
    default-expand-all
    :filter-node-method="filterNode"
    ref="tree2">
    </el-tree>
</div>
</template>
<script>
export default {
  name: 'orgtree',
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  },
  data () {
    return {
      filterText: '',
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  mounted: function () {
    this.$ajax({
      method: 'get',
      url: '../../static/tree.json'
    })
      .then(response => {
        if (response.status) {
          this.data2 = response.data.data
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>
