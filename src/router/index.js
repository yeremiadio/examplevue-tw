import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "mainlayout",
    component: () => import("../components/layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "index",
        component: () => import("../views/index.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/about.vue"),
      },
      {
        path: "/posts",
        name: "posts.index",
        component: () => import("../views/posts/index.vue"),
      },
      {
        path: "/faq",
        name: "Faq",
        component: () => import("../views/faq.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    name: "admin.DashboardPage",
    component: () => import("../components/layouts/AdminLayout.vue"),
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("../views/admin/DashboardPage.vue"),
        name: "Dashboard",
      },
      {
        path: "/admin/posts",
        component: () => import("../views/admin/posts/index.vue"),
        name: "Posts",
      },
      {
        path: "/admin/posts/create",
        component: () => import("../views/admin/posts/create.vue"),
        name: "Create Post",
      },
      {
        path: "/admin/users",
        component: () => import("../views/admin/users/index.vue"),
        name: "Users",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
