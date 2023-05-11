<template>
  <div>
    <h1>标题</h1>
    <hr>
    <details open>
      <summary>Config</summary>
      <el-form :model="config" size="mini" label-width="100px">
        <el-form-item label="对齐方式">
          <el-radio-group v-model="config.textAlign">
            <el-radio-button label="left">左</el-radio-button>
            <el-radio-button label="center">中</el-radio-button>
            <el-radio-button label="right">右</el-radio-button>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input-number v-model="config.fontSize" :step="0.1" :precision="1"/>
        </el-form-item>

        <el-form-item label="行高">
          <el-input-number v-model="config.lineHeight" :step="0.1" :precision="1"/>
        </el-form-item>

        <el-form-item label="下边框">
          <el-switch v-model="config.bottomBorder" />
        </el-form-item>

      </el-form>
    </details>

    <hr>
    <details open>
      <summary>Basic</summary>
      <GroupTitle
          :text-align="config.textAlign"
          :font-size="config.fontSize"
          :line-height="config.lineHeight"
          :bottom-border="config.bottomBorder"
      />
    </details>

    <details open>
      <summary>Slot</summary>
      <GroupTitle
          :text-align="config.textAlign"
          :font-size="config.fontSize"
          :line-height="config.lineHeight"
          :bottom-border="config.bottomBorder"
      >
        标题内容：GroupTitleDemo
      </GroupTitle>
    </details>

  </div>
</template>

<script>
import GroupTitle from "@/components/FormGenerator/components/GroupTitle/index.vue";

export default {
  name: "GroupTitleDemo",
  components: {
    GroupTitle
  },
  data() {
    return {
      config: {
        fontSize: 2,
        lineHeight: 2,
        textAlign: 'center',
        bottomBorder: true,
      }
    }
  }
}
</script>

<style scoped>

</style>
