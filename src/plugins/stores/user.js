import { defineStore } from "pinia";

const Store = defineStore("user", {
  state: () => {
    //ici mes variables
    return {
      // pour l'etat initial vide ou boolean
      isLogin: "",
      userData: "",
      //pour desactiver certaine fonction du site pendant un loading
      loading: false,
    };
  },
  getters: {},
  actions: {},
});

export default Store;
