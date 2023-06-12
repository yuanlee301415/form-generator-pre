<template>
  <div>
    <h1>表格</h1>
    <hr>
    <details open>
      <summary>Test</summary>
      <GfTable />
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
        'ID', '姓名', '性别', '地址'
      ]
    }
  }
}
</script>

<style scoped>

</style>
