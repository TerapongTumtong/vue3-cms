<template>
    <!-- Right Sidebar -->
  <aside class="control-sidebar fixed white">
    <div class="slimScroll">
      <div class="sidebar-header">
        <h4>Activity List</h4>
        <a
          href="#"
          data-toggle="control-sidebar"
          class="paper-nav-toggle active"
          ><i></i
        ></a>
      </div>
      <div class="p-3">
        <div>
          <div class="my-3">
            <small>25% Complete</small>
            <div class="progress" style="height: 3px">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

        </div>
      </div>
      <div class="p-3 bg-primary text-white">
        <div class="row">
          <div class="col-md-6">
            <h5 class="font-weight-normal s-14">Sodium</h5>
            <span class="font-weight-lighter text-primary">Spark Bar</span>
            <div>
              Oxygen
              <span class="text-primary">
                <i class="icon icon-arrow_downward"></i> 67%</span
              >
            </div>
          </div>

        </div>
      </div>
    </div>
  </aside>
  <!-- /.right-sidebar -->
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "RightSideBar",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>