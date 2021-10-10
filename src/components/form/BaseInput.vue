<template>
  <div class="_container" :class="attrsClassName">
   
    <input 
      v-model="value"
      :class="['_input form-control', { '_input-error': hasError }]"
      :disabled="disabled"
      :placeholder="placeholder"
      v-bind="attrsRest"
      autofocus
      
    />
 
  </div>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  inheritAttrs: false,
  components: {  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      required: true
    },
    validating: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    hasError: {
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs }) {
    const { class: attrsClassName, ...attrsRest } = attrs;

    return {
      attrsClassName,
      attrsRest
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
});
</script>

<style scoped>

._input {
  width: 100%;
  border: 1px solid cornflowerblue;
  outline: none;
  padding: 0.75rem;
  border-radius: 0.25rem;


}


._input-error {
  border-color: brown !important;
 box-shadow: 0 0 3px brown;
 
}

</style>