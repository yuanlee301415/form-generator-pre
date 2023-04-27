<template>
    <div style="position: relative;width: 100%; height: 100vh;">
      <b>表单数据：</b>
      <el-select v-model="dataSource" size="small" @change="handleChangeDataSource">
        <el-option label="1" value="1">1</el-option>
        <el-option label="2" value="2">2</el-option>
        <el-option label="defaultValue" value="defaultValue">defaultValue</el-option>
        <el-option label="dynamic" value="dynamic">dynamic</el-option>
      </el-select>
      <hr>
      <Parser v-if="formData" :form-conf="formData"/>
    </div>
</template>

<script>
  import Parser from "@/components/FormGenerator/parser/Parser.vue";
  import { CustomFormData } from "@/components/FormGenerator/models/CustomFormData";
  import { Field } from "@/components/FormGenerator/models/Field";

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
          this.formData = {
            ...new CustomFormData(data),
            fields: data.fields && data.fields.map(_ => new Field(_))
          }
          console.log('formData:', this.formData)
        })
      },
      handleChangeDataSource() {
        this.initData()
        window.localStorage.setItem('viewFormDataSource', this.dataSource)
      },
    }
  }
</script>
