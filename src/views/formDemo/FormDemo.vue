<script>
import { computed } from "vue";
import { useStore } from "vuex";

import SearchData from "@/views/formDemo/SearchData.vue";

export default {
  name: "FormDemo",
  components: {
    SearchData
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    (async function () {
      // first method
    })();
    const handleSearch = async () => {};
    return {
      user,
      handleSearch
    };
  }
};
</script>
<template>

      <SearchData />

</template>