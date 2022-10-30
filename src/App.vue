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
import { computed } from "vue";
import router from "@router";

// import components
import ProloguePage from "@modules/prologue/ProloguePage.vue";
import Footer from "@components/section/Footer.vue";
import NavBar from "@components/section/NavBar.vue";
import WaitingPage from "@components/pages/WaitingPage.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();
const layout = computed(() => {
  let value = router.currentRoute.value.meta.layout;
  console.log("layout", value);
  return value;
});
</script>
