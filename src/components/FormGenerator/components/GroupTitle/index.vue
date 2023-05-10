<template functional>
  <el-col>
    <h1 :style="{'text-align': props.textAlign, 'font-size': props.fontSize + 'em', 'line-height': props.lineHeight }" :class="{bottomBorder: props.bottomBorder}">
      <slot v-if="$slots.default"/>
      <span v-else>请输入标题内容</span>
    </h1>
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
