<template>
  <TitleDetail  :titleName="'Dasdboard'" :titleDetail="'get Started'" />
    <div class="container-fluid my-3">
        <p>You are the boss make something great.</p>
    </div>

  
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";
import TitleDetail from "@/components/template/TitleDetail.vue";

export default {
  name: "Dashboard",
  components: {
    TitleDetail
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
   
    return {
      
      user
    }
  }
}
</script>
