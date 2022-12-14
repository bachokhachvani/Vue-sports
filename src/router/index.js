import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SportsVariety from "../views/SportsVariety.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sports",
    name: "sports",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SportsView.vue"),
  },
  {
    path: "/sports/:sportName",
    name: "sportName",
    component: SportsVariety,
  },
  {
    path: "/:notFound(.*)",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
