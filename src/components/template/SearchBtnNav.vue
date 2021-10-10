<template>
            <li>
              <a
                class="nav-link"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="icon-search3"></i>
              </a>
            </li>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "SearchBtnNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>