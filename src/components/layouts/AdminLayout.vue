<template>
  <authenticated-sidebar
    :isOpen="isOpen"
    @closeSideBar="closeSideBar(false)"
    :completeButtonRef="completeButtonRef"
    :navigations="navigations"
  />
  <authenticated-navbar
    :isOpen="isOpen"
    @openSideBar="openSideBar(true)"
    :completeButtonRef="completeButtonRef"
    :navigations="navigations"
  />
  <main class="px-4 mt-24">
    <router-view />
  </main>
</template>

<script>
import AuthenticatedNavbar from "../Navbars/AuthenticatedNavbar.vue";
import AuthenticatedSidebar from "../Sidebars/AuthenticatedSidebar.vue";
import { ref } from "vue";
export default {
  setup() {
    const isOpen = ref(false);
    const completeButtonRef = ref(null);
    const navigations = ref([
      { title: "Dashboard", href: "/admin/dashboard" },
      { title: "Posts", href: "/admin/posts" },
      { title: "Users", href: "/admin/users" },
    ]);
    return {
      isOpen,
      navigations,
      completeButtonRef,
      openSideBar() {
        isOpen.value = true;
      },
      closeSideBar() {
        isOpen.value = false;
      },
    };
  },
  components: { AuthenticatedSidebar, AuthenticatedNavbar },
};
</script>
