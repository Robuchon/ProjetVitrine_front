import { createRouter, createWebHistory } from "vue-router";

import useStoreUser from "@stores/user";

import Authservices from "@axios/services/auth";

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
];

import routesAuth from "@router/routes/authRoute";
import routesHall from "@router/routes/hallRoute";

routes = routes.concat(routesAuth, routesHall);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  const store = useStoreUser();

  // si pas de donné de connection
  if (store.isLogin === "") {
    if (cookies.get("userSession") !== null) {
      let result = await Authservices.loginWithToken();
      if (result.data.success) {
        store.setter(true, "isLogin");
        store.setter(result.data.data, "userData");
      } else {
        cookies.remove("userSession"); //return this
        store.isLogin = false;
      }
      //tester la connection avec le token dans les cookies
    } else {
      //ici si pas de token dans le cookies
      cookies.remove("userSession"); //return this
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
      return { name: "Gestion" };
    }
  }
});

export default router;
