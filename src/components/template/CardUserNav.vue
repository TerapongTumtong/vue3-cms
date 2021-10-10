<template>
         <div class="float-left image">
                        <div class="avatar text-center blue-text"  alt="User Image"><b> TT</b> </div>
                    </div>
                    <div class="float-left info text-center">
                        <div> <h6 class="font-weight-light  p-1 m-1"> <a data-toggle="collapse" href="#userSettingsCollapse">Terapong Tumtong <i class="icon-circle text-green blink m-1 p-1"></i></a></h6></div>
   </div>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "CardUserNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>

