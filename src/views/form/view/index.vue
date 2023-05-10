<template>
    <div style="padding: 1rem;">
      <el-select v-model="dataSource" size="small" @change="handleChangeDataSource">
        <template #prefix><b>表单数据：</b></template>
        <el-option value="1">1</el-option>
        <el-option value="2">2</el-option>
        <el-option value="defaultValue">默认值</el-option>
        <el-option value="cascader">级联</el-option>
        <el-option value="all">All</el-option>
        <el-option value="custom">自定义组件</el-option>
      </el-select>
      <hr style="margin: 1rem 0;">
      <Parser v-if="formData" :form-conf="formData"/>
    </div>
</template>

<script>
  import Parser from "@/components/FormGenerator/parser/Parser.vue";
  import CustomFormData from "@/components/FormGenerator/models/CustomFormData";
  import Field from "@/components/FormGenerator/models/Field";

  export default {
    name: 'FormView',
    components: {Parser},
    data() {
      return {
        formData: null,
        dataSource: window.localStorage.getItem('viewFormDataSource') || '',
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        this.$axios({
          url: `/mock-data/formData${this.dataSource ? '-' + this.dataSource : ''}.json`
        }).then(res => {
          const data = res.data
          const fields = data.fields
          delete data.fields
          this.formData = {
            ...new CustomFormData(data),
            fields: fields && fields.map(_ => new Field(_))
          }
          console.log('formData:', this.dataSource, this.formData)
        })
      },
      handleChangeDataSource() {
        this.initData()
        window.localStorage.setItem('viewFormDataSource', this.dataSource)
      },
    }
  }
</script>
