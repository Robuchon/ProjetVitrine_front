<template>
  <div class="mx-auto my-20 flex flex-wrap justify-between">
    <div class="mt-20 flex w-1/3 flex-col items-center">
      <h1
        class="mb-10 flex whitespace-pre text-center"
        :class="storeUser.themeTxt()"
      >
        {{ entranceTxt[storeUser.userData.language].titleLogPage }}
      </h1>
      <button
        v-for="item in entranceTxt[storeUser.userData.language].logView"
        @click="subview = item"
        class="relative"
      >
        <img src="@assets/img/hautParchemin.png" alt="" />
        <h3
          class="absolute top-5 left-0 right-0 z-10 mx-auto"
          :class="storeUser.themeTxt()"
        >
          {{ entranceTxt[storeUser.userData.language].typeLog[item].title }}
        </h3>
      </button>
    </div>
    <div name="parchemin" class="relative h-[850px] w-[800px]">
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
            class="relative z-10 w-full"
          />
          <div class="relative w-full">
            <div class="absolute -top-20 left-[20%] right-[20%] -bottom-20">
              <img
                src="@assets/img/corpParchemin.png"
                alt=""
                class="z-0 h-full w-full"
              />
            </div>
            <form class="relative z-10 my-8 mx-[215px]">
              <h3 class="text-orange-900">
                {{
                  entranceTxt[storeUser.userData.language].typeLog[subview]
                    .title
                }}
              </h3>
              <div
                v-for="item in entranceTxt[storeUser.userData.language].typeLog[
                  subview
                ].content"
                class="form-control w-full max-w-xs"
              >
                <label class="label" :for="item.name">
                  <span class="label-text text-orange-800">{{
                    item.label
                  }}</span>
                  <span
                    v-if="errors[item.name]"
                    class="label-text-alt text-red-600"
                    >error</span
                  >
                </label>
                <input
                  :id="item.name"
                  :name="item.name"
                  :type="item.type"
                  :placeholder="item.placeHolder"
                  v-model="item.value"
                  class="input input-bordered w-full max-w-xs border-0 bg-orange-200 text-orange-800 placeholder:text-stone-400 focus:ring-2 focus:ring-orange-800"
                />
              </div>
              <button
                class="btn glass mx-auto mt-10 flex justify-center text-orange-800"
                @click.prevent="submit()"
              >
                <p>Soumettre</p>
              </button>
            </form>
          </div>

          <img
            src="@assets/img/basParchemin.png"
            alt=""
            class="relative z-10 w-full"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
//import utilities
import { ref, watch, onMounted } from "vue";
import router from "@router";
import Authservices from "@axios/services/auth";
//import data
import entranceTxt from "@modules/entrance/dataTxt/entrance";
//import store
import useStoreUser from "@stores/user";

//declaration obligatoire des imports
const storeUser = useStoreUser();

//const utilisé
const subview = ref("login");
const errors = ref("");

//fontion
function setSubview() {
  if (router.currentRoute.value.params.subview !== "") {
    subview.value = router.currentRoute.value.params.subview;
  }
}

async function submit() {
  let data =
    entranceTxt[storeUser.userData.language].typeLog[subview.value].content;
  let dataSubmit = {};
  for (let index = 0; index < data.length; index++) {
    dataSubmit[data[index].name] = data[index].value;
  }
  console.log(dataSubmit);
  let result = await Authservices[subview.value](dataSubmit);
  console.log(result);
  if (result.data.success && subview.value !== "reset") {
    storeUser.setter(true, "isLogin")
    storeUser.setter(result.data.data, "userData")
    errors.value = ""
    router.push({name: "Hall"})
  } else {
    errors.value = result.data.errors
  }
}

// truc de VUE
watch(
  () => subview.value,
  () => {
    console.log(subview.value);
    router.push({
      name: "Entrance",
      params: { view: "log", subview: subview.value },
    });
  },
);

onMounted(() => {
  setSubview();
});
</script>
