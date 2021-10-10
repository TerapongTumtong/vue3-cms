<template>
<div class="w-80px mt-3 mb-4 ml-3 text-center">     
 <b > LOGO</b>
</div>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "LogoNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>