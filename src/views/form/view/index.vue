<template>
    <div style="position: relative;width: 100%; height: 100vh;">
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
        formData: null
      }
    },
    created() {
      this.$axios({
        url: '/mock-data/formData-3.json'
      }).then(res => {
        const data = res.data
        this.formData = {
          ...new CustomFormData(data),
          fields: data.fields && data.fields.map(_ => new Field(_))
        }
        console.log('formData:', this.formData)
      })
    }
  }
</script>
