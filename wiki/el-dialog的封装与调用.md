通过form-generator生成的弹窗代码，其主要结构如下：  

``` 
<!-- child.vue -->
<template>
  <div>
    <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose">
      <el-row :gutter="15">
        <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        </el-form>
      </el-row>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  data() {
    return {
    }
  },
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        this.close()
      })
    },
  }
}
</script>
```

父组件中引用方式为：
```
<!-- parent.vue -->
<child :visible.sync="visible" title="某弹框"></child>
```

### 这里注意三处  
- v-bind="$attrs"  
$attrs包含 除prop传递的属性、class 和 style 的父组件属性，v-bind绑定这些属性。可简单记为【属性穿透】；  
以上文“父组件中引用方式”为例，属性visible和title最终都会绑定到el-dialog中，而我们并没有在child.vue中声明visible和title。

- v-on="$listeners"  
$listeners包含了 (除.native修饰器的) 父组件事件，v-on监听这些事件。可简单记为【事件穿透】。

- inheritAttrs: false  
v-bind="$attrs"传递属性后，浏览器查看html代码能看见visible，title等属性；设置inheritAttrs: false可以隐藏此类属性。