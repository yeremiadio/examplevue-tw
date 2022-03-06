<template>
  <div class="grid place-items-center h-screen bg-gray-800">
    <div class="bg-white w-72 lg:w-96 px-4 py-6 rounded-md">
      <div>
        <h3 class="text-center font-bold text-gray-800 text-xl">Welcome</h3>
        <p class="text-center text-gray-600 text-base">
          Please fill your credentials
        </p>
        <div>
          <form @submit.prevent="onSubmit(values)">
            <div class="my-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-medium mb-1"
                >Email</label
              >
              <input
                type="email"
                v-model="values.email"
                autocomplete="email"
                id="email"
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700 focus:ring-gray-700"
                placeholder="Masukkan email..."
              />
            </div>
            <div class="my-4">
              <label
                for="password"
                class="block text-gray-700 text-sm font-medium mb-1"
                >Password</label
              >
              <input
                type="password"
                v-model="values.password"
                id="password"
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700 focus:ring-gray-700"
                placeholder="Masukkan password..."
              />
            </div>
            <div class="my-2">
              <input
                type="checkbox"
                id="rememberme"
                name="remembereme"
                v-model="values.rememberMe"
              />
              <label for="rememberme"> Remember Me</label><br />
            </div>
            {{ JSON.stringify(auth) }}
            <button
              type="submit"
              class="px-5 lg:px-6 py-2 w-full rounded-md bg-gray-800 transition-all delay-75 hover:bg-gray-900 text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const values = reactive({
      email: "",
      password: "",
      rememberMe: false,
    });
    const auth = computed(() => store.state.auth);

    const onSubmit = async (val) => {
      await store.dispatch("loginUser", val);
    };
    return { onSubmit, values, auth };
  },
};
</script>
<style></style>
