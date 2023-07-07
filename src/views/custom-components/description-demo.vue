<template>
    <div>
      <h1>描述</h1>
      <pre>支持输入描述说明内容
        支持对文字大小、颜色的修改
        支持对显示标签控制
        描述说明内容为只读（不可修改）。</pre>
      <hr>

      <details open>
        <summary>Config</summary>
        <el-form :model="config" size="mini" label-width="100px">
          <el-form-item label="字体大小">
            <el-input-number v-model="config.fontSize" :step="0.1" :precision="1"/>
          </el-form-item>

          <el-form-item label="字体颜色">
            <el-color-picker v-model="config.color"></el-color-picker>
          </el-form-item>

        </el-form>
      </details>

      <hr>
      <details open>
        <summary>Basic</summary>
        <GfDescription :font-size="config.fontSize" :color="config.color"/>
      </details>

      <details open>
        <summary>Slot</summary>
        <GfDescription :font-size="config.fontSize" :color="config.color">
          【描述说明内容：GFDescription】
        </GfDescription>
      </details>
    </div>
</template>

<script>
  import GfDescription from "@/components/FormGenerator/components/GfDescription/index.vue";
  export default {
    name: 'DescriptionDemo',
    components: {
      GfDescription
    },
    data() {
      return {
        config: {
          fontSize: 1,
          color: ''
        }
      }
    }
  }
</script>
