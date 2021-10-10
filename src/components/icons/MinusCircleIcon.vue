<template>
  <MinusCircleIcon class="_minus-icon" />
</template>

<script>
import { MinusCircleIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MinusCircleIcon
  }
};
</script>

<style scoped>


._minus-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: 'red';
  cursor: pointer;

  
}
.hover {
    color: red;
  }
</style>