import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "index",
    redirect: "/case", //暂时重定向
    component: () => import("@/components/index.vue"),
    children: [
      {
        path: "/case",
        name: "case",
        component: () => import("@/components/case/case.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
