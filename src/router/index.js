import { createRouter, createWebHistory } from "vue-router";
import App from "../../src";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/",
    name: "About",
    component: App,
  },
  {
    path: "/",
    name: "Projects",
    component: App,
  },
  {
    path: "/",
    name: "Contact",
    component: App,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
