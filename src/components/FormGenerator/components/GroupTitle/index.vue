<template>
  <h1>{{ value }}</h1>
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
