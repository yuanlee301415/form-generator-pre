<template>
  <el-col>
    <h1 :style="styleObj">
      <slot v-if="$slots.default"/>
      <span v-else>请输入标题内容</span>
    </h1>
  </el-col>
</template>

<script>
import {TEXT_ALIGN} from "@/components/FormGenerator/constants";

export default {
  name: "GroupTitle",
  props: {
    textAlign: {
      type: String,
      default: TEXT_ALIGN.CENTER,
      validator(val) {
        return Object.values(TEXT_ALIGN).includes(val)
      }
    },
    fontSize: {
      type: Number,
      default: 1
    },
    lineHeight: {
      type: Number,
      default: 1
    },
    bottomBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    styleObj() {
      return {
        textAlign: this.textAlign,
        fontSize: this.fontSize + 'em',
        lineHeight: this.lineHeight,
        borderBottomColor: this.bottomBorder ? '#ccc' : 'transparent'
      }
    }
  }
}
</script>

<style scoped>
h1 {
  color: #444;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
</style>
