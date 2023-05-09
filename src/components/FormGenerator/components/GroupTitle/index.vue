<template functional>
  <el-col>
    <h1 :style="{'text-align': props.textAlign, 'font-size': props.fontSize + 'rem', 'line-height': props.lineHeight }" :class="{bottomBorder: props.bottomBorder}"><slot/></h1>
  </el-col>
</template>

<script>
export default {
  name: "GroupTitle"
}
</script>

<style scoped>
h1 {
  color: #444;
}
.bottomBorder {
  border-bottom: 1px solid #ccc;
}
</style>
