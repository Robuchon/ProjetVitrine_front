<template>
  <div class="mx-auto my-20 flex flex-wrap justify-between">
    <div name="parchemin" class="relative w-[800px] h-[850px]">
      <Transition
        enter-active-class="transition ease-in-out transform delay-[1000ms] duration-[1000ms]"
        enter-from-class="scale-y-0 opacity-0"
        enter-to-class="scale-y-100 opacity-100"
        leave-active-class="transition ease-in-out transform duration-[1000ms]"
        leave-from-class="scale-y-100 opacity-100"
        leave-to-class="scale-y-0 opacity-0"
      >
        <div :key="index" class="absolute left-0 top-0 right-0">
          <img src="@assets/img/hautParchemin.png" alt="" class="relative w-full z-10" />
          <div class="relative w-full">
            <div class="absolute -top-20 left-[20%] right-[20%] -bottom-20">
              <img
                src="@assets/img/corpParchemin.png"
                alt=""
                class="w-full h-full z-0"
              />
            </div>
            <h3 class="relative z-10 my-8 mx-[215px] text-orange-900">
              {{
                entranceTxt[storeUser.userData.language].paraProjectPresentation[
              index
            ]
              }}
            </h3>
          </div>

          <img src="@assets/img/basParchemin.png" alt="" class="relative w-full z-10" />
        </div>
      </Transition>
    </div>
    <div class="flex w-1/3 flex-col items-center">
      <h1
        class="mb-10 flex whitespace-pre text-center"
        :class="storeUser.themeTxt()"
      >
        {{ entranceTxt[storeUser.userData.language].titleProjectPresentation }}
      </h1>
      <img src="@assets/img/moi.png" alt="moi" class="w-full rounded-full" />
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
const interval = ref(Object);

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
function stopClock() {
  clearInterval(interval.value);
}

onMounted(() => {
  clock();
});

onUnmounted(() => {
  stopClock();
});
</script>
