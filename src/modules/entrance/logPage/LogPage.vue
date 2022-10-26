<template>
  <div class="mx-auto my-20 flex flex-wrap justify-between">
    <div class="my-auto flex w-1/2 flex-col items-center">
      <h1
        class="mb-10 flex whitespace-pre text-center"
        :class="storeUser.themeTxt()"
      >
        {{ entranceTxt[storeUser.userData.language].titleLogPage }}
      </h1>
      <button
        v-for="item in entranceTxt[storeUser.userData.language].logView"
        @click="subview = item"
      >
        {{ entranceTxt[storeUser.userData.language].typeLog[item].title }}
      </button>
    </div>
    <div
      class="relative my-auto h-[600px] w-[600px] overflow-hidden bg-parchemin"
    >
      <Transition
        enter-active-class="transition ease-in-out transform duration-[1000ms]"
        enter-from-class="translate-y-60 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition ease-in-out transform duration-[1000ms]"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-60 opacity-0"
      >
        <form class="absolute left-[22%] right-[20%] mt-16">
          <h3 class="text-orange-900">
            {{
              entranceTxt[storeUser.userData.language].typeLog[subview].title
            }}
          </h3>
          <div
            v-for="item in entranceTxt[storeUser.userData.language].typeLog[
              subview
            ].content"
            class="form-control w-full max-w-xs"
          >
            <label class="label" :for="item.name">
              <span class="label-text text-orange-800">{{ item.label }}</span>
              <span v-if="errors[item.name]" class="label-text-alt text-red-600"
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
      </Transition>
    </div>
  </div>
</template>

<script setup>
//import utilities
import { ref, watch, onMounted } from "vue";
import router from "@router";
import Authservices from "@axios/services/auth"
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
  let data = entranceTxt[storeUser.userData.language].typeLog[subview.value].content;
  let dataSubmit = {};
  for (let index = 0; index < data.length; index++) {
    dataSubmit[data[index].name] = data[index].value
  }
  console.log(dataSubmit);
  let result = await Authservices[subview.value](dataSubmit)
  console.log(result);
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
