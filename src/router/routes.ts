import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AdminView from "@/views/AdminView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/admin",
    name: "管理员可见",
    component: () => import("../views/AdminView.vue"),
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/NoAuth",
    name: "无权限",
    component: () => import("../views/NoAuthView.vue"),
  },
  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
