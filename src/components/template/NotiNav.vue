<template>
             <!-- Notifications -->
            <li class="dropdown custom-dropdown notifications-menu">
              <a
                href="#"
                class="nav-link"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="icon-notifications"></i>
                <span class="badge badge-danger badge-mini rounded-circle"
                  >4</span
                >
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li class="header">You have 10 notifications</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <i class="icon icon-data_usage text-success"></i> 5 new
                        members joined today
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon icon-data_usage text-danger"></i> 5 new
                        members joined today
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon icon-data_usage text-yellow"></i> 5 new
                        members joined today
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer p-2 text-center"><a href="#">View all</a></li>
              </ul>
            </li>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "NotiNavBar",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>