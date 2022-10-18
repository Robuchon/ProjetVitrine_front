export default [
    {
      path: "/entrance",
      name: "Entrance",
      component: () => import("@modules/entrance/EntrancePage.vue"),
      meta: { permission: "noLog" },
    },
  ];