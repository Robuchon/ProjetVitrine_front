import { createRouter, createWebHistory } from "vue-router";

import useStoreUser from "@stores/user";

import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

let routes = [
  {
    path: "/",
    redirect: "/entrance",
  },
  {
    path: "/waiting",
    name: "Waiting",
    component: () => import("@components/pages/WaitingPage.vue"),
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: () => import("@components/pages/NotFoundPage.vue"),
  },
  {
    path: "/hall",
    name: "Hall",
    component: () => import("@modules/hall/HallPage.vue"),
  },
];

import routesAuth from "@router/routes/authRoute";

routes = routes.concat(routesAuth);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreUser();

  // si pas de donné de connection
  if (store.isLogin === "") {
    if (cookies.get("userSession") !== null) {
      //tester la connection avec le token dans les cookies
    } else {
      //ici si pas de token dans le cookies
      store.isLogin = false;
    }
  }

  //si pas de connection
  if (!store.isLogin) {
    if (to.matched.length === 0) {
      //ici si pas de matched page
      return { name: "NotFound" };
    }
    // verification des droits de la page
    if (to.meta.permission !== "noLog") {
      return { name: "Entrance" };
    }
  }

  // si connecté
  if (store.isLogin) {
    if (to.matched.length === 0) {
      //ici si pas de matched page
      return { name: "NotFound" };
    }
    // verifiaction si les droits de la page sont accesible par le user
    if (to.meta.permission === "noLog") {
      return { name: "Hall" };
    }
  }
});

export default router;
