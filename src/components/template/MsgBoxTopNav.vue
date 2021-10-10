<template>
                        <!-- Messages-->
            <li class="dropdown custom-dropdown messages-menu">
              <a href="#" class="nav-link" data-toggle="dropdown">
                <i class="icon-message"></i>
                <span class="badge badge-success badge-mini rounded-circle"
                  >4</span
                >
              </a>
              <ul class="dropdown-menu dropdown-menu-right">
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu pl-2 pr-2">
                    <!-- start message -->
                    <li>
                      <a href="#">
                        <div class="avatar float-left">
                          <img src="assets/img/dummy/u4.png" alt="" />
                          <span class="avatar-badge busy"></span>
                        </div>
                        <h4>
                          Support Team
                          <small
                            ><i class="icon icon-clock-o"></i> 5 mins</small
                          >
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <!-- end message -->
                    <!-- start message -->
                    <li>
                      <a href="#">
                        <div class="avatar float-left">
                          <img src="assets/img/dummy/u1.png" alt="" />
                          <span class="avatar-badge online"></span>
                        </div>
                        <h4>
                          Support Team
                          <small
                            ><i class="icon icon-clock-o"></i> 5 mins</small
                          >
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <!-- end message -->
                    <!-- start message -->
                    <li>
                      <a href="#">
                        <div class="avatar float-left">
                          <img src="assets/img/dummy/u2.png" alt="" />
                          <span class="avatar-badge idle"></span>
                        </div>
                        <h4>
                          Support Team
                          <small
                            ><i class="icon icon-clock-o"></i> 5 mins</small
                          >
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <!-- end message -->
                    <!-- start message -->
                    <li>
                      <a href="#">
                        <div class="avatar float-left">
                          <img src="assets/img/dummy/u3.png" alt="" />
                          <span class="avatar-badge busy"></span>
                        </div>
                        <h4>
                          Support Team
                          <small
                            ><i class="icon icon-clock-o"></i> 5 mins</small
                          >
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                    <!-- end message -->
                  </ul>
                </li>
                <li class="footer s-12 p-2 text-center">
                  <a href="#">See All Messages</a>
                </li>
              </ul>
            </li>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "MsgBoxTopNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>