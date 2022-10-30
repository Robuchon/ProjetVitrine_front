<template>
  <WaitingPage v-if="storeUser.isLogin === ''"></WaitingPage>
  <ProloguePage
    class="min-h-screen bg-corePattern2 py-4 "
    v-if="
      storeUser.userData.prologue &&
      storeUser.userData.prologueEtape > 0 &&
      storeUser.userData.prologueEtape < 7
    "
  ></ProloguePage>

  <div
    v-else
    class="min-h-screen bg-corePattern2 py-4"
    :class="storeUser.themeBG()"
  >
    <NavBar v-if="layout === 'NavBar'"> </NavBar>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
// import components
import Footer from "./core/components/section/Footer.vue";
import ProloguePage from "@modules/prologue/ProloguePage.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();
</script>
