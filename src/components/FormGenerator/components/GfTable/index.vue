<template>
  <el-col>
    <el-button @click="addRow">新增行</el-button>
    <el-button @click="removeRow">删除行</el-button>
    <el-table
        :data="tableData"
        border
        stripe
        @cell-click="handleCellClick"
    >
      <el-table-column v-for="(item,idx) of columns" :label="item.label" :prop="[idx, item.label].join('_')" :key="idx">
        <template slot-scope="scope">
          <el-input
              v-if="row === scope.row && column.property === [idx, item.label].join('_')"
              v-model="scope.row[[idx, item.label].join('_')]"
              autofocus
              @blur="handleEnter"
          />
          <span v-else>{{ scope.row[[idx, item.label].join('_')] }}</span>
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
  computed: {
    tableData() {
      const ret = this.value && this.value.map((row) => {
        const item = {}
        this.columns && this.columns.forEach((col, index) => {
          item[[index, col.label].join('_')] = row[index]
        })
        return item
      })
      console.log('computed>tableData>ret:', ret)
      return ret
    }
  },
  data() {
    return {
      row: null,
      column: void 0
    }
  },
  created() {
    console.log('GfTable>this:', this)
  },
  methods: {
    addRow() {
      const newRow = {}
      this.columns && this.columns.forEach((_, idx) => {
        newRow[[idx, _.label].join('_')] = undefined
      })
      this.$set(this.tableData, this.tableData.length, newRow)
    },
    removeRow() {

    },
    handleCellClick(row, column, cell, event) {
      console.log('handleCellClick>args:', arguments)
      this.row = row
      this.column = column
    },
    handleEnter() {
      // const { value } = e.target
      console.log('handleBlur>args:', arguments)
      console.log('handleBlur>value:', this.value)
      console.log('handleBlur>tableData:', this.tableData)
      const value = this.tableData.map((row) => {
        const rowValues = []
        this.columns.forEach((col, idx) => {
          rowValues.push(row[[idx, col.label].join('_')])
        })
        console.log('handleBlur>rowValues:', rowValues)
        return rowValues
      })
      this.$emit('input', value)
      this.row = null
      this.column = null
    }
  }
}
</script>

<style scoped>

</style>
