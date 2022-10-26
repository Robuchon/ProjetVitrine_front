import { defineStore } from "pinia";

const Store = defineStore("user", {
  state: () => {
    //ici mes variables
    return {
      // pour l'etat initial vide ou boolean
      isLogin: "",
      userData: {
        language: "fr",
        theme: "dark",
      },
      //pour desactiver certaine fonction du site pendant un loading
      loading: false,
    };
  },
  getters: {},
  actions: {
    themeTxt() {
      if (this.userData.theme === "dark") {
        return "text-orange-200";
      } else {
        return "text-orange-900";
      }
    },
    themeBG() {
      if (this.userData.theme === "dark") {
        return "bg-gray-800";
      } else {
        return "bg-orange-100";
      }
    },
    themeSvg() {
      if (this.userData.theme === "dark") {
        return "#FED7AA";
      } else {
        return "#7C2D0C";
      }
    },
  },
});

export default Store;
