<template>
  <hr
    :style="{ width }"
    style="border: 1px solid black"
  />
</template>

<script>
export default {
  name: 'hr-line',
  props: {
    width: {
      type: String,
      default: '100%',
      required: false
    }
  }
}
</script>
