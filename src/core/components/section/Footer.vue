<template>
  <footer class="">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <SvgTarget
            :target="item.icon"
            :color1="storeUser.themeSvg()"
          ></SvgTarget>
        </a>
      </div>
      <div class="mt-8 md:mt-0 flex justify-center">
        <BtnToggle></BtnToggle>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center" :class="storeUser.themeTxt()">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
//import utilities
import SvgTarget from "@components/utilities/SvgTarget.vue";
import BtnToggle from "@components/utilities/BtnToggle.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();

const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: "Facebook",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "Twitter"
  },
  {
    name: "GitHub",
    href: "#",
    icon: "GitHub"
  },
  {
    name: "Linkedin",
    href: "#",
    icon: "Linkedin"
  },
];
</script>
