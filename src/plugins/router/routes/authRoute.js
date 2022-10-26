export default [
    {
      path: "/entrance/:view?/:subview?",
      name: "Entrance",
      component: () => import("@modules/entrance/EntrancePage.vue"),
      meta: { permission: "noLog" },
    },
  ];