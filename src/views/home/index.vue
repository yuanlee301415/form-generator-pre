<template>
    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B" />
        <el-checkbox label="Option C" />
      </el-checkbox-group>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        checkList: void 0
      }
    }
  }
</script>
