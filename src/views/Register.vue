<template>
  <div class="grid place-items-center h-screen bg-gray-800">
    <div class="bg-white w-11/12 md:w-7/12 lg:w-96 px-4 py-6 rounded-md">
      <div>
        <h3 class="text-center font-bold text-gray-800 text-xl">Welcome</h3>
        <p class="text-center text-gray-600 text-base">
          Please fill your credentials
        </p>
        <div>
          <form @submit.prevent="onSubmit(values)">
            <div class="my-4">
              <label
                for="name"
                class="block text-gray-700 text-sm font-medium mb-1"
                >Username</label
              >
              <input
                type="text"
                v-model="values.name"
                autocomplete="text"
                id="name"
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-700 focus:ring-gray-700"
                placeholder="Masukkan Username..."
              />
            </div>
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
            <div class="my-2 text-right text-sm">
              Already have an account?
              <router-link
                as="a"
                to="login"
                class="text-blue-600 hover:underline"
              >
                Login
              </router-link>
            </div>
            <button
              type="submit"
              class="px-5 lg:px-6 py-2 w-full rounded-md bg-gray-800 transition-all delay-75 hover:bg-gray-900 text-white"
            >
              Register
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
import { useRouter } from "vue-router";
import { jsonToFormData } from "../utils/jsonToFormData";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const values = reactive({
      name: "",
      email: "",
      password: "",
    });

    const onSubmit = async (val) => {
      val.password_confirmation = val.password;
      const formData = jsonToFormData(val);
      await store.dispatch("registerUser", formData);
      router.push("/admin/dashboard");
    };
    return { onSubmit, values };
  },
};
</script>
<style></style>
