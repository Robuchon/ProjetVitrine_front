<template>
  <div
    class="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 bg-corePattern py-4 px-4 shadow-xl sm:px-6 md:flex lg:px-8"
    :class="
      storeUser.userData.theme === 'dark'
        ? 'border-gray-400  bg-slate-700'
        : 'border-yellow-700  bg-orange-900'
    "
  >
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Gestion'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Gestion')"
    >
      <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block">Gestion</p>
    </button>
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Rencontre'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Rencontre')"
    >
      <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block">Rencontre</p>
    </button>
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Marchands'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Marchands')"
    >
      <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block">Marchands</p>
    </button>
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Forge'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Forge')"
    >
      <SvgTarget target="Forge" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block ml-2">Forge</p>
    </button>
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Fame'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Fame')"
    >
      <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block">Hall of fame</p>
    </button>
    <button
      class="btn glass flex justify-center text-orange-200"
      :class="router.currentRoute.value.name === 'Profile'? 'bg-black hover:bg-black':'hover:bg-stone-900'"
      @click="goTo('Profile')"
    >
      <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
      <p class="hidden xl:block">Profile</p>
    </button>
  </div>
</template>

<script setup>
import router from "@router";

//import utilities
import SvgTarget from "@components/utilities/SvgTarget.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();

function goTo(value) {
  if (value !== undefined) {
    router.push({ name: value });
  }
}
</script>
