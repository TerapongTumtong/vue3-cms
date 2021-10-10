<template>
  <div >
    <h1>{{ title }}</h1>
    <form @submit.prevent="$emit('submit')" class="_form needs-validation" >
          <LoadingIcon
      class="_loading-icon"
      :class="{ '_loading-icon-error': hasError }"
      v-if="validating"
    />
      <slot></slot>
      

    </form>
   
  </div>
</template>

<script>
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
export default {
  components: {
 LoadingIcon
  },
  emits: ["submit"],
  props: {
    title: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
   
  }
};
</script>


<style scoped>


._loading-icon {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  color: 'green';
}
._loading-icon-error {
  color: 'red';
}
</style>