<template functional>
  <el-col>
    <h1 :style="{'text-align': props.textAlign}"><slot/></h1>
  </el-col>
</template>

<script>
export default {
  name: "GroupTitle"
}
</script>

<style scoped>

</style>
