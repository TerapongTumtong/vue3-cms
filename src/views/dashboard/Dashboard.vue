<template>
  <TitleDetail  :titleName="'Dasdboard'" :titleDetail="'get Started'" />
    <div class="container-fluid my-3">

  
     
       <SearchData />
   </div>
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";
import TitleDetail from "@/components/template/TitleDetail.vue";

import SearchData from '@/views/dashboard/SearchData.vue';

export default {
  name: "Dashboard",
  components: {
    TitleDetail,
  
    SearchData
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
  
  
    (async function () {
     // first method

      

    })();

     const  handleSearch = async () => {

     
    };

    return {
      user,
      handleSearch,
    }
  },
  
}
</script>
