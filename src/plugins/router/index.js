import { createRouter, createWebHistory } from "vue-router";

import useStoreUser from "@stores/user";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

let routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () => import("@components/page/Waiting.vue"),
  },
];

import routesAuth from "@router/routes/authRoute";

routes = routes.concat(
  routesAuth,
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreUser();

  // si pas de donné de connection
  if (store.isLogin === "") {
    //tester la connection avec le token dans les cookies
  }

  //si pas de connection
  if (!store.isLogin) {}

  // si connecté
  if (store.isLogin) {}
})

export default router;
