import Main from "@/pages/Main";

import AboutPage from "@/pages/About";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/about",
    component: AboutPage,
  }];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
