<template>
  <button
    :class="['button btn', type, { disabled }]"
    :type="htmlType"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    htmlType: {
      type: String,
      default: "button",
      validator: htmlType => ["button", "reset", "submit"].includes(htmlType)
    },
    type: {
      type: String,
      default: "default",
      validator: type => ["default", "primary", "danger"].includes(type)
    },
    disabled: {
      type: Boolean
    }
  }
};
</script>

<style scoped>



</style>