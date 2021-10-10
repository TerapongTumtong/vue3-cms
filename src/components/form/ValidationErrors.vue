<template>
  <div v-if="errors.length > 0" class="errors text-danger">
    <b v-for="(error, i) in errors" :key="i">{{ error }}</b>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>


.errors {
  margin-top: 0.25rem;
  font-size: 0.775rem;


}

  .p {
    word-wrap: break-word;
  }
</style>