<template>
 <div class="collapse" id="navbarToggleExternalContent">
<div class="bg-dark pt-2 pb-2 pl-4 pr-2">
        
       
          <div class="search-bar">
            <input
              class="
                transparent
                s-24
                text-white
                b-0
                font-weight-lighter
                w-128
                height-50
              "
              type="text"
              placeholder="start typing..."
            />
          <a href="#"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="paper-nav-toggle paper-nav-white active"
            ><i></i
          ></a>
          </div>
           </div>
           </div>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "SearchBarNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>