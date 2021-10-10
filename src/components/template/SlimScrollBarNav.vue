<template>
<div
        class="slimScrollBar"
        style="
          background: rgba(0, 0, 0, 0.3);
          width: 5px;
          position: absolute;
          top: 0px;
          opacity: 0.4;
          display: block;
          border-radius: 7px;
          z-index: 99;
          right: 1px;
          height: 49.6734px;
        "
      ></div>
      <div
        class="slimScrollRail"
        style="
          width: 5px;
          height: 100%;
          position: absolute;
          top: 0px;
          display: none;
          border-radius: 7px;
          background: rgb(51, 51, 51);
          opacity: 0.2;
          z-index: 90;
          right: 1px;
        "
      ></div>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "SlimScrollBarNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>