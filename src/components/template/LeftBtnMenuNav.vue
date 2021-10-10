<template>
      <div class="relative">
          <a
            href="#"
            data-toggle="push-menu"
            class="paper-nav-toggle pp-nav-toggle"
          >
            <i></i>
          </a>
        </div>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "LeftBtnMenuNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>