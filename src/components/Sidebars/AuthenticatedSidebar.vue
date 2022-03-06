<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @close="closeSideBar"
      :initialFocus="completeButtonRef"
      class="fixed inset-0 top-9 z-40 md:hidden"
    >
      <TransitionChild
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
        as="template"
        class="flex z-10 relative flex-col w-full h-screen bg-white md:hidden"
      >
        <div class="mb-10 mt-8">
          <ul
            class="md:flex-col md:min-w-screen flex flex-col list-none pt-2 mx-4 space-y-2"
          >
            <li class="items-center group text-blue-600">
              <div
                class="my-4"
                v-for="(item, index) of navigations"
                :key="index"
              >
                <router-link
                  tag="span"
                  :to="item.href"
                  replace
                  active-class="rounded text-gray-50 flex font-semibold w-full items-center space-x-3 py-2 px-4 cursor-pointer bg-gray-800 transition-all delay-75 hover:bg-gray-900"
                  class="rounded flex w-full items-center space-x-3 py-2 px-4 group-hover:text-gray-800 cursor-pointer font-normal text-gray-600"
                >
                  {{ item.title }}
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </TransitionChild>
      <TransitionChild
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
        as="template"
      >
        <DialogOverlay class="fixed inset-0" />
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  TransitionRoot,
  TransitionChild,
  DialogOverlay,
  Dialog,
} from "@headlessui/vue";
export default {
  props: {
    isOpen: Boolean,
    navigations: Array,
    completeButtonRef: { default: null },
  },
  setup(props, ctx) {
    function closeSideBar() {
      ctx.emit("closeSideBar");
    }
    return { closeSideBar };
  },
  emits: ["closeSideBar"],
  components: { TransitionRoot, TransitionChild, Dialog, DialogOverlay },
};
</script>
