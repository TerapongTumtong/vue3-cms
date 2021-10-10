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

export default {
  components: {
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



</style>