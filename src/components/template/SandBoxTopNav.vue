<template>
            <!-- User Account-->
            <li class="dropdown custom-dropdown user user-menu">
              <a href="#" class="nav-link" data-toggle="dropdown">
                <i class="icon-apps"></i>
              </a>
              <div class="dropdown-menu p-4 dropdown-menu-right">
                <div class="row box justify-content-between my-4">
                  <div class="col">
                    <a href="#">
                      <i class="icon-apps purple lighten-2 avatar r-5"></i>
                      <div class="pt-1">Apps</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i
                        class="icon-beach_access pink lighten-1 avatar r-5"
                      ></i>
                      <div class="pt-1">Profile</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i
                        class="
                          icon-perm_data_setting
                          indigo
                          lighten-2
                          avatar
                          r-5
                        "
                      ></i>
                      <div class="pt-1">Settings</div>
                    </a>
                  </div>
                </div>
                <div class="row box justify-content-between my-4">
                  <div class="col">
                    <a href="#">
                      <i class="icon-star light-green lighten-1 avatar r-5"></i>
                      <div class="pt-1">Favourites</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i class="icon-save2 orange accent-1 avatar r-5"></i>
                      <div class="pt-1">Saved</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i
                        class="icon-perm_data_setting grey darken-3 avatar r-5"
                      ></i>
                      <div class="pt-1">Settings</div>
                    </a>
                  </div>
                </div>
                <hr />
                <div class="row box justify-content-between my-4">
                  <div class="col">
                    <a href="#">
                      <i class="icon-apps purple lighten-2 avatar r-5"></i>
                      <div class="pt-1">Apps</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i
                        class="icon-beach_access pink lighten-1 avatar r-5"
                      ></i>
                      <div class="pt-1">Profile</div>
                    </a>
                  </div>
                  <div class="col">
                    <a href="#">
                      <i
                        class="
                          icon-perm_data_setting
                          indigo
                          lighten-2
                          avatar
                          r-5
                        "
                      ></i>
                      <div class="pt-1">Settings</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
</template>
<script lang="ts">
import {computed } from 'vue';
import {useStore} from "vuex";

export default {
  name: "SandBoxTovNav",
  setup() {
        const store = useStore();
        const userData=  computed(() => store.state.User.user);
    return {
      userData
  
       }
  } 
}
</script>