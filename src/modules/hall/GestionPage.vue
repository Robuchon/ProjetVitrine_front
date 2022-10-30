<template>
  <div class="mx-auto flex max-w-7xl flex-col lg:w-[80%]">
    <ProloguePage
      class="min-h-screen bg-corePattern2 py-4"
      v-if="
        storeUser.userData.prologue &&
        storeUser.userData.prologueEtape > 6 &&
        storeUser.userData.prologueEtape < 9
      "
    ></ProloguePage>
    <GestionContent v-else></GestionContent>
  </div>
</template>

<script setup>
// import components
import GestionContent from "@modules/gestion/GestionContent.vue";
import ProloguePage from "@modules/prologue/ProloguePage.vue";

//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();
</script>
