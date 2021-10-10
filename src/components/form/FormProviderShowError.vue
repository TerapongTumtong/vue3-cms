<template>
  <div >
    <h1>{{ title }}</h1>
    <form @submit.prevent="$emit('submit')" class="_form needs-validation" >
      
      <slot></slot>
      
   <div class="row m-1  d-flex p-2">
        <PreFormData :form="form" :errors="errors" :errorMsg="errorMsg" class="text-danger" />
      </div>
    </form>
   
  </div>
</template>

<script>
import PreFormData from "@/components/form/PreFormData.vue";

export default {
  components: {
     PreFormData
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
     errors: {
      type: Object,
      required: true
    },
     errorMsg: {
      type: String,
      required: true
    }
  }
};
</script>

