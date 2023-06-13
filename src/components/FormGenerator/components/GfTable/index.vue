<template>
  <el-col>
    <el-button @click="addRow">新增行</el-button>
    <el-button @click="removeRow">删除行</el-button>
    <el-table
        :data="value"
        border
        stripe
    >
      <el-table-column v-for="(item,idx) of columns" :label="item.label" :key="idx">
        <template slot-scope="scope">
          {{ scope.row[idx] }}
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
export default {
  name: "GfTable",
  props: {
    columns: {
      type: Array,
      default: () => ['列名1','列名2','列名3']
    },
    value: {
      type: Array,
      default: null
    }
  },
  created() {
    console.log('GfTable>this:', this)
  },
  methods: {
    addRow() {
      const value = this.value.concat([[]])
      this.$emit('input', value)
    },
    removeRow() {

    }
  }
}
</script>

<style scoped>

</style>
