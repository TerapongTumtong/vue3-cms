
<template>
  <div class="main-sidebar vh-100" data-toggle="offcanvas">
    <div
      class="slimScrollDiv"
      style="position: relative; overflow: hidden; width: auto; height: 185px"
    >
      <section
        class="sidebar m-1 p-1"
        style="height: 185px; overflow: hidden; width: auto"
      >
        <LogoNav />
        <div class="relative">
          <ProfileMenuNav/>
          <div class="user-panel p-3 light mb-2">
            <CardUserNav />
            <ProfileMenu />
          </div>
        </div>
        <MenuRight class="m-1 p-1" />
      </section>
      <SlimScrollBarNav/>
    </div>
  </div>
  <!-- /#sidebar-wrapper -->
  <!--Sidebar End-->

  <!--Sidebar End-->
  <div class="has-sidebar-left">
    <div class="pos-f-t">
      <SearchBarNav />
    </div>

    <div class="sticky">
      <div
        class="navbar navbar-expand navbar-dark  
          d-flex
          justify-content-between
          bd-navbar
          blue
          accent-3">
  
        <LeftBtnMenuNav/>
        
        <!--Top Menu Start -->
        <div class="navbar-custom-menu">
               
          <ul class="nav navbar-nav">
      
            <MsgBoxTopNav />
            <NotiNav />
            <SearchBtnNav />
            <RightBtnMenuNav />
            <SandBoxTopNav />
            <RightSideBar/>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="page has-sidebar-left">
    <div class="m-1 container-fluid bg-white">
      <div class="card-body">
        <router-view v-if="user.permissions" />
      </div>
    </div>
  </div>

 <RightSideBar/>
  <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
  <div class="control-sidebar-bg shadow white fixed"></div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import MenuRight from "@/components/template/MenuRight.vue";
// import Nav from "@/components/template/Nav.vue";

import ProfileMenu from "@/components/template/ProfileMenu.vue";
import CardUserNav from "@/components/template/CardUserNav.vue";
import SandBoxTopNav from "@/components/template/SandBoxTopNav.vue";
import MsgBoxTopNav from "@/components/template/MsgBoxTopNav.vue";
import LogoNav from "@/components/template/LogoNav.vue";
import NotiNav from "@/components/template/NotiNav.vue";
import SearchBarNav from "@/components/template/SearchBarNav.vue";
import SearchBtnNav from "@/components/template/SearchBtnNav.vue";
import RightBtnMenuNav from "@/components/template/RightBtnMenuNav.vue";
import RightSideBar from "@/components/template/RightSideBar.vue";
import ProfileMenuNav from "@/components/template/ProfileMenuNav.vue";
import LeftBtnMenuNav from "@/components/template/LeftBtnMenuNav.vue";
import SlimScrollBarNav from "@/components/template/SlimScrollBarNav.vue";

// import axios from 'axios';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { User } from "@/models/user";

export default {
  name: "MainPage",
  components: {
    MenuRight,
    LogoNav,
    ProfileMenu,
    CardUserNav,
    ProfileMenuNav,
    MsgBoxTopNav,
    SandBoxTopNav,
    NotiNav,
    SearchBarNav,
    SearchBtnNav,
    RightBtnMenuNav,
    RightSideBar,
    SlimScrollBarNav,
    LeftBtnMenuNav
  },

  setup() {
    console.clear();
    const router = useRouter();
    const user = ref("");
    const store = useStore();

    onMounted(async () => {
      try {
        if (!localStorage.getItem("MockUser")) {
          await router.push("/login");
        }

        const userData = JSON.parse(localStorage.getItem("MockUser") || "{}");

        /* service
        const response = await axios.get('user');
      
      */

        await store.dispatch(
          "User/setUser",
          new User(
            userData.first_name,
            userData.last_name,
            userData.email,
            userData.permissions
          )
        );

        user.value = userData;
      } catch (e) {
        await router.push("/login");
      }
    });

    return {
      user
    };
  }
};
</script>

