<template>
  <div
    class="bg-white text-sm lg:text-base font-semibold tracking-normal fixed top-0 w-full py-3 px-4 border-b-2 border-opacity-50 border-gray-200"
  >
    <div class="flex justify-between items-center text-gray-800">
      <div>
        <div @click="openSideBar" :ref="completeButtonRef">
          <x-icon
            class="text-gray-800 w-7 h-7 md:hidden"
            v-if="isOpen"
          ></x-icon>
          <menu-alt1-icon
            class="text-gray-800 w-7 h-7 md:hidden"
            v-else
          ></menu-alt1-icon>
        </div>
        <div class="hidden md:contents">logo</div>
      </div>
      <div class="hidden md:flex gap-8 place-items-center">
        <div v-for="(item, index) of navigations" :key="index">
          <navigation :title="item.title" :href="item.href"></navigation>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <router-link
          to="login"
          class="px-5 lg:px-6 py-3 rounded-md bg-gray-800 transition-all delay-75 hover:bg-gray-900 text-white"
        >
          Create Account
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";
export default {
  setup(props, ctx) {
    function openSideBar() {
      ctx.emit("openSideBar");
    }
    return { openSideBar };
  },
  emits: ["openSideBar"],
  props: {
    isOpen: Boolean,
    navigations: Array,
    completeButtonRef: { default: null },
  },
  components: { Navigation, MenuAlt1Icon, XIcon },
};
</script>

Navigation
