<template>
  <div :style="styleObj" class="gfDescription">
    <slot v-if="$slots.default"/>
    <span v-else>请输入描述说明内容</span>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    fontSize: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  computed: {
    styleObj() {
      return {
        fontSize: this.fontSize + 'em',
        color: this.color
      }
    }
  }
}
</script>

<style scoped>
.gfDescription {
  border: 1px solid #DCDFE6;
  border-radius: 5px;
  padding: 0.5rem;
  word-break: break-all;
}
</style>
