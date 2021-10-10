<template>
 <li>
              <a class="nav-link ml-2" data-toggle="control-sidebar">
                <i class="icon-tasks"></i>
              </a>
  </li>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "RightBtnMenuNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>