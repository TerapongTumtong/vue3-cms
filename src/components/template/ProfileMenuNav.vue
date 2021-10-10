<template>
        <a
            data-toggle="collapse"
            href="#userSettingsCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="userSettingsCollapse"
            class="
              btn-fab btn-fab-sm
              absolute
              fab-right-bottom fab-top
              btn-primary
              shadow1
            "
          >
            <i class="icon icon-cogs"></i>
          </a>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "ProfileMenuNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>