<template>
  <el-col>
    <h1><slot/></h1>
  </el-col>
</template>

<script>
export default {
  name: "GroupTitle",
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
