<template>

  <div
    class="_buttons"
    
    :style="{
      'column-gap': gap,
      'grid-template-columns': `${r1}fr ${r2}fr`
    }"
  >
   
    <BaseButton
      class="btn-outline-primary"
      type="primary"
      html-type="submit"
      :disabled="submitting"
    >
      {{ submitText }}
    </BaseButton>
    <BaseButton @click="$emit('reset')" class="btn-outline-secondary">Reset</BaseButton>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton
  },
  emits: ["reset"],
  props: {
    submitText: {
      type: String,
      default: "Submit"
    },
    gap: {
      type: String,
      required: true
    },
    ratio: {
      type: String,
      default: "1:1"
    },
    submitting: {
      type: Boolean
    },
  
  },
  computed: {
    r1() {
      return this.ratio.split(":")[0];
    },
    r2() {
      return this.ratio.split(":")[1];
    }
  }
};
</script>

<style scoped>
._buttons {
  display: grid;
  grid-auto-flow: column;
}
</style>