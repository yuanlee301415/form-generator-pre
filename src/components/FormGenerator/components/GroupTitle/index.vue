<template>
  <h1><slot/></h1>
</template>

<script>
export default {
  name: "GroupTitle",
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
