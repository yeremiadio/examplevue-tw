<template>
  <div
    class="bg-white text-sm lg:text-base font-semibold tracking-normal fixed top-0 w-full py-2 px-4 border-b-2 border-opacity-50 border-gray-200"
  >
    <div class="flex justify-between items-center text-gray-800 lg:px-6 py-3">
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
        {{ auth.data.user?.email }}
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "./Navigation.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup(props, ctx) {
    const store = useStore();
    const auth = computed(() => store.state.auth);
    function openSideBar() {
      ctx.emit("openSideBar");
    }
    return { openSideBar, auth };
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
