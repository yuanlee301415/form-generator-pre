<template>
  <el-col>
    <el-button size="small" @click="handleAddRow">新增</el-button>
    <el-button size="small" @click="handleRemoveRow">删除</el-button>
    <el-table
        ref="gfTable"
        :data="value"
        border
        stripe
        @cell-click="handleCellClick"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40"/>
      <el-table-column v-for="(item,idx) of columns" :label="item.label" :prop="String(idx)" :key="idx">
        <template slot-scope="scope">
          <el-input
              v-if="row && column && (row === scope.row && column.property === String(idx))"
              v-model="row[idx]"
              size="mini"
              v-focus
              @blur="handleCellEnter($event, idx)"
              @keydown.enter.native="handleCellEnter($event, idx)"
          />
          <div v-else>{{ scope.row[idx] }}</div>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
export default {
  name: "GfTable",
  props: {
    /**
     * 表格所有单元格数据
     * @type string[]
     */
    value: {
      type: Array,
      default: () => []
    },
    /**
     * 列配置
     * @type {label: string}[]
     */
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      row: null,
      column: null,
      multipleSelection: []
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.children[0].focus()
      }
    }
  },
  created() {
    console.log('GfTable>this:', this)
  },
  methods: {
    handleAddRow() {
      console.log('addRow>multipleSelection:', this.multipleSelection)
      if (!this.multipleSelection.length) {
        this.addRow(this.value.length - 1)
        return
      }
      for (let i = 0; i < this.multipleSelection.length; i++) {
        this.addRow(this.value.indexOf(this.multipleSelection[i]))
      }
    },
    addRow(idx) {
      this.value.splice(idx + 1, 0, new Array(this.columns.length))
    },
    handleRemoveRow() {
      for (let i = 0; i < this.multipleSelection.length; i++) {
        const idx = this.value.indexOf(this.multipleSelection[i])
        this.value.splice(idx, 1)
      }
      this.$refs['gfTable'].clearSelection()
    },
    handleCellClick(row, column, cell, event) {
      console.log('handleCellClick>args:', arguments)
      this.row = row
      this.column = column
    },
    handleCellEnter(event, idx) {
      if (!this.row) return
      const {value} = event.target
      this.row[idx] = value
      // console.log('handleCellEnter:', { value: this.value, idx, row: this.row})
      this.$emit('input', this.value)
      this.row = null
      this.column = null
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>

</style>
