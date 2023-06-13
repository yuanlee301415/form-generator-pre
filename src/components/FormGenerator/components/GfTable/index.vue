<template>
  <el-col>
    <el-table
        :data="tableData"
        border
        stripe
    >
      <el-table-column v-for="(item,idx) of columns" :label="item.label" :key="idx">

      </el-table-column>
    </el-table>
  </el-col>
</template>

<script>
import {TEXT_ALIGN} from "@/components/FormGenerator/constants";

export default {
  name: "GfTable",
  props: {
    columns: {
      type: Array,
      default: () => ['列名1','列名2','列名3']
    }
  },
  data() {
    return {
      tableData: null
    }
  }
}
</script>

<style scoped>

</style>
