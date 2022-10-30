<template>
  <div class="mx-auto my-4 flex-col justify-between">
    <div class="flex flex-col items-center">
      <h1
        class="mb-4 flex whitespace-pre text-center"
        :class="storeUser.themeTxt()"
      >
        {{ gestionTxt[storeUser.userData.language].titleLogPage }}
      </h1>
      <div class="flex">
        <button
          v-for="item in gestionTxt[storeUser.userData.language].Views"
          @click="subview = item"
          class="relative"
        >
          <img src="@assets/img/hautParchemin.png" alt="" />
          <h3
            class="absolute top-5 left-0 right-0 z-10 mx-auto"
            :class="storeUser.themeTxt()"
          >
            {{ gestionTxt[storeUser.userData.language].typeLog[item].title }}
          </h3>
        </button>
      </div>
    </div>
    <div name="parchemin" class="relative mx-auto mt-8 h-[850px] w-[800px]">
      <Transition
        enter-active-class="transition ease-in-out transform delay-[300ms] duration-[300ms]"
        enter-from-class="scale-y-0 opacity-0"
        enter-to-class="scale-y-100 opacity-100"
        leave-active-class="transition ease-in-out transform duration-[300ms]"
        leave-from-class="scale-y-100 opacity-100"
        leave-to-class="scale-y-0 opacity-0"
      >
        <div :key="subview" class="absolute left-0 top-0 right-0">
          <img
            src="@assets/img/hautParchemin.png"
            alt=""
            class="relative z-10 h-16 w-full"
          />
          <div class="relative w-full">
            <div class="absolute -top-8 left-[20%] right-[20%] -bottom-8">
              <img
                src="@assets/img/corpParchemin.png"
                alt=""
                class="z-0 h-full w-full"
              />
            </div>
            <!-- Content -->
            <div v-if="subview === 'team'" class="relative z-10 my-2 mx-[215px]">
              <Creation
                v-if="storeUser.userData.gladiator.length === 0"
              ></Creation>
              <Edit v-else-if="edit"></Edit>
              <View v-else></View>
            </div>
            <div v-else class="relative z-10 my-2 mx-[215px]">
                <h1>Inventaire</h1>
            </div>
          </div>

          <img
            src="@assets/img/basParchemin.png"
            alt=""
            class="relative z-10 h-16 w-full"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
//import components
import Creation from "./Creation.vue"
import Edit from "./Edit.vue"
import View from "./View.vue"
//import utilities
import { ref, watch, onMounted } from "vue";
import router from "@router";
//import data
import gestionTxt from "@modules/gestion/dataTxt/gestion";
//import store
import useStoreUser from "@stores/user";

//declaration obligatoire des imports
const storeUser = useStoreUser();

//const utilisé
const subview = ref("team");
const errors = ref("");
const edit = ref("false");

//fontion
function setSubview() {
  if (router.currentRoute.value.params.subview !== "") {
    subview.value = router.currentRoute.value.params.subview;
  }
}

// truc de VUE
watch(
  () => subview.value,
  () => {
    console.log(subview.value);
    router.push({
      name: "Gestion",
      params: { subview: subview.value },
    });
  },
);

onMounted(() => {
  setSubview();
});
</script>
