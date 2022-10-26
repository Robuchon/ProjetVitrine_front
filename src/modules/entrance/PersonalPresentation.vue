<template>
  <div class="mx-auto my-20 flex flex-wrap justify-between">
    <div class="my-auto flex w-1/2 flex-col items-center">
      <h1
        class="mb-10 flex whitespace-pre text-center"
        :class="storeUser.themeTxt()"
      >
        {{ entranceTxt[storeUser.userData.language].titlePersonalPresentation }}
      </h1>
      <img src="@assets/img/moi.png" alt="moi" class="w-[50%] rounded-full" />
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
        <h3
          :key="index"
          class="absolute left-[20%] right-[20%] mt-16 text-orange-900"
        >
          {{
            entranceTxt[storeUser.userData.language].paraPersonalPresentation[
              index
            ]
          }}
        </h3>
      </Transition>
    </div>
  </div>
</template>

<script setup>
//import data
import entranceTxt from "@modules/entrance/dataTxt/entrance";
//import store
import useStoreUser from "@stores/user";
//inport utilities
import { onMounted, ref, onUnmounted } from "vue";

const storeUser = useStoreUser();
const index = ref(0);
const wPercent = ref(0);
const interval = ref(Object)

function increment() {
  console.log(
    entranceTxt[storeUser.userData.language].paraPersonalPresentation.length,
    index.value,
  );
  if (
    entranceTxt[storeUser.userData.language].paraPersonalPresentation.length -
      1 ===
    index.value
  ) {
    index.value = 0;
  } else {
    index.value++;
  }
}

function clock() {
  interval.value = setInterval(() => {
    wPercent.value++;
    if (wPercent.value > 100) {
      wPercent.value = 0;
      increment();
    }
  }, 80);
}
function stopClock () {
  clearInterval(interval.value)
}

onMounted(() => {
  clock();
});
onUnmounted(() => {
  stopClock()
})
</script>
