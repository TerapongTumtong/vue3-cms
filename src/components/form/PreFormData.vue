<template>
  
  <div v-if="errors.length>0" class="alert alert-danger d-flex align-items-center text-center" style="width: 100%; align-center" role="alert">
   <!-- <b>{{ errors }}</b>  -->
  
  {{errorMsg}}
</div>
 <!-- <pre id="pre-form">{{ formJSON }}</pre> -->
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      required: true
    },
    errors: {
      type: Array,
      required: true
    },
    errorMsg: {
      type: String,
      required: true
    },
  },
  computed: {
    formJSON() {
      return JSON.stringify(
        
        this.form,
        (k, v) => (typeof v === "function" ? "function" : v),
        2
      );
    }
  }
};
</script>

