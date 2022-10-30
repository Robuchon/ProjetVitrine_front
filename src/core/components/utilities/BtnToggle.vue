<template>
  <Switch
    @click="switchTheme(enabled)"
    v-model="enabled"
    :class="[
      enabled
        ? 'border-orange-100 bg-gray-800'
        : 'border-gray-800 bg-orange-100',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="[
        enabled ? 'translate-x-5 bg-orange-100' : 'translate-x-0 bg-gray-800',
        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out',
      ]"
    >
      <span
        :class="[
          enabled
            ? 'opacity-0 duration-100 ease-out'
            : 'opacity-100 duration-200 ease-in',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <SunIcon class="h-3 w-3 text-orange-200"></SunIcon>
      </span>
      <span
        :class="[
          enabled
            ? 'opacity-100 duration-200 ease-in'
            : 'opacity-0 duration-100 ease-out',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <MoonIcon class="h-3 w-3 text-orange-900"></MoonIcon>
      </span>
    </span>
  </Switch>
</template>

<script setup>
// import utilities
import { onMounted, ref, watch } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { Switch } from "@headlessui/vue";
//import store
import useStoreUser from "@stores/user";
import UserSettings from "../../../plugins/axios/services/userSettings";
const storeUser = useStoreUser();

const enabled = ref(false);

function setEnabled() {
  if (storeUser.userData.theme === "light") {
    enabled.value = false;
  } else {
    enabled.value = true;
  }
}
function switchTheme(value) {
  if (value === false) {
    UserSettings.switchTheme({ theme: "dark" });
  } else {
    UserSettings.switchTheme({ theme: "light" });
  }
}
watch(
  () => enabled.value,
  () => {
    if (enabled.value === false) {
      storeUser.userData.theme = "light";
    } else {
      storeUser.userData.theme = "dark";
    }
  },
);

onMounted(() => {
  setEnabled();
});
</script>
