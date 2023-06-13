<template>
  <div>
    <h1>表格</h1>
    <hr>
    <details open>
      <summary>Test</summary>
      <GfTable :columns="columns" v-model="value"/>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
