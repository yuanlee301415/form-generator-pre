<template>
  <el-col>
    <el-button @click="addRow">新增行</el-button>
    <el-button @click="removeRow">删除行</el-button>
    <el-table
        :data="value"
        border
        stripe
        @cell-click="handleCellClick"
    >
      <el-table-column v-for="(item,idx) of columns" :label="item.label" :key="idx">
        <template slot-scope="scope">
          <el-input
              v-if="row === scope.row && columnLabel === item.label"
              v-model="scope.row[idx]"
              autofocus
              @blur="handleEnter"
          />
          <span v-else>{{ scope.row[idx] }}</span>
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
  data() {
    return {
      row: null,
      columnLabel: void 0
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

    },
    handleCellClick(row, column, cell, event) {
      console.log('handleCellClick>args:', arguments)
      this.row = row
      this.columnLabel = column.label
    },
    handleEnter(e) {
      // const { value } = e.target
      console.log('handleBlur>args:', arguments)
      this.$emit('input', this.value)
      this.row = null
      this.columnLabel = void 0
    }
  }
}
</script>

<style scoped>

</style>
