<template>
  <router-link
    :to="href"
    active-class="px-6 py-3 cursor-pointer rounded-md bg-gray-800 transition-all delay-75 hover:bg-gray-900 text-white hover:text-white"
    class="px-6 py-3 cursor-pointer transition-all delay-75 rounded-md text-gray-500 hover:bg-gray-100"
  >
    <span>{{ title }}</span>
  </router-link>
</template>
<script>
export default {
  props: {
    title: String,
    href: String,
  },
};
</script>
