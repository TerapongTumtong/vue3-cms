<template>
 <div class="clearfix"></div>
            <div class="collapse multi-collapse" id="userSettingsCollapse">
  <div class="list-group mt-3 shadow">
    <router-link
      to="/dashboard"
      v-if="handlePermission('profile', 'view')"
      class="list-group-item list-group-item-action"
      ><i class="mr-2 icon-person text-blue"></i>Profile</router-link
    >
    <router-link
      to="/dashboard"
      v-if="handlePermission('profile', 'view')"
      class="list-group-item list-group-item-action"
      ><i class="mr-2 icon-cogs text-yellow"></i>Settings</router-link
    >
    <router-link
      to="/dashboard"
      v-if="handlePermission('profile', 'view')"
      class="list-group-item list-group-item-action"
      ><i class="mr-2 icon-security text-purple"></i>Change
      Password</router-link
    >
    <router-link
      to="/dashboard"
      v-if="handlePermission('profile', 'view')"
      class="list-group-item list-group-item-action"
      @click="logout"
      ><i class="mr-2 icon-key text-purple"></i>logout</router-link
    >
  </div>
     </div>
</template>
<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { canUsePermission } from "@/services/UserService";
import { useRouter } from "vue-router";
export default {
  name: "ProfileMenu",

  setup() {
    const router = useRouter();
    const store = useStore();
    const userData = computed(() => store.state.User.user);

    const handlePermission = async (page: string, mode: string) => {
      return await canUsePermission(page, mode);
    };

    const logout = async () => {
      //  await axios.post('logout', {});
      sessionStorage.clear();
      localStorage.clear();
      await router.push("/login");
    };
    return {
      userData,
      logout,
      handlePermission
    };
  }
};
</script>

