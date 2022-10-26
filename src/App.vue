<template>
  <div class="min-h-screen bg-corePattern2" :class="storeUser.themeBG()">
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script setup>
// import components
import Footer from "./core/components/section/Footer.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();
</script>
