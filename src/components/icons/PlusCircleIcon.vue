<template>
  <PlusCircleIcon class="_plus-icon" />
</template>

<script>
import { PlusCircleIcon } from "@heroicons/vue/outline";

export default {
  components: {
    PlusCircleIcon
  }
};
</script>

<style scoped>


._plus-icon {
  width: 1.5rem;
  height: 1.5rem;
  color:cornflowerblue;
  cursor: pointer;
}
 .hover {
    color:cornflowerblue
  }

</style>