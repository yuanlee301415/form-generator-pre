<template>
  <el-col>
    <el-table
        :data="tableData"
        border
        stripe
    >
      <el-table-column v-for="(label,idx) of columns" :label="label" :key="label+idx" :prop="[idx, label].join('_')">

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
