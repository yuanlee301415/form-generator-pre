<template>
  <div>
    <h1>表格</h1>
    <hr>
    <details open>
      <summary>Basic</summary>
      <GfTable :columns="columns" v-model="value"/>
    </details>

    <details open>
      <summary>Test</summary>
      <el-table
          :data="tableData"
          style="width: 100%"
          @cell-click="cellClick"
      >
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
      </el-table>
    </details>

  </div>
</template>

<script>
import GfTable from "@/components/FormGenerator/components/GfTable/index.vue";

export default {
  name: "GfTitleDemo",
  components: {
    GfTable
  },
  data() {
    return {
      config: {
        fontSize: 2,
        lineHeight: 2,
        textAlign: 'center',
        bottomBorder: true,
      },
      columns: [
        { label: 'ID' },
        { label: '姓名'},
        { label: '省' },
        { label: '市' }
      ],
      value: [
          [0, 'ZS', 'SH', 'SH'],
          [1, 'LS', 'SH', 'SH'],
          [2, 'WW', 'SH', 'SH'],
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },

  methods: {
    cellClick(row, column, cell, event) {
      console.log('cellClick:', arguments)
    }
  }
}
</script>

<style scoped>

</style>
