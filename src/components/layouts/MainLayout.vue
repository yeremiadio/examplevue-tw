<template>
  <navbar
    :isOpen="isOpen"
    @openSideBar="openSideBar(true)"
    :completeButtonRef="completeButtonRef"
    :navigations="navigations"
  ></navbar>
  <sidebar
    :isOpen="isOpen"
    @closeSideBar="closeSideBar(false)"
    :completeButtonRef="completeButtonRef"
    :navigations="navigations"
  ></sidebar>
  <main class="mt-20 px-4">
    <router-view></router-view>
  </main>
</template>

<script>
import Navbar from "../Navbars/Navbar.vue";
import { ref } from "vue";
import Sidebar from "../Sidebars/Sidebar.vue";
export default {
  setup() {
    const isOpen = ref(false);
    const completeButtonRef = ref(null);
    const navigations = ref([
      { title: "Home", href: "/home" },
      { title: "About", href: "about" },
      { title: "Posts", href: "/posts" },
      { title: "FAQ", href: "faq" },
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
  components: { Navbar, Sidebar },
};
</script>
