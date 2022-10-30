export default [
  {
    path: "/gestion",
    name: "Gestion",
    component: () => import("@modules/hall/GestionPage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  {
    path: "/fame",
    name: "Fame",
    component: () => import("@modules/hall/FamePage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  {
    path: "/forge",
    name: "Forge",
    component: () => import("@modules/hall/ForgePage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  {
    path: "/marchands",
    name: "Marchands",
    component: () => import("@modules/hall/MarchandsPage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@modules/hall/ProfilePage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  {
    path: "/rencontre",
    name: "Rencontre",
    component: () => import("@modules/hall/RencontrePage.vue"),
    meta: { layout: "NavBar", permission: "log" }
  },
  ];