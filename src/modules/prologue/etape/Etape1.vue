<template>
  <div class="min-h-[800px]">
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          >
            <div
              class="my-4 mx-auto flex h-20 w-[80%] items-center justify-evenly rounded-full border-2 bg-corePattern shadow-xl"
              :class="
                storeUser.userData.theme === 'dark'
                  ? 'border-gray-400  bg-slate-700'
                  : 'border-yellow-700  bg-orange-900'
              "
            >
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 1 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Gestion</p>
              </button>
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 2 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Rencontre</p>
              </button>
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 3 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Marchands</p>
              </button>
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 4 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Forge</p>
              </button>
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 5 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Hall of fame</p>
              </button>
              <button
                class="btn glass flex justify-center text-orange-200"
                :class="etape === 6 ? 'blur-0' : 'blur-sm'"
              >
                <SvgTarget target="Twitter" color1="#FED7AA"></SvgTarget>
                <p class="hidden xl:block">Profile</p>
              </button>
            </div>
          </div>
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="h-60 relative transform overflow-hidden rounded-lg border-2 bg-corePattern px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
                :class="
                  storeUser.userData.theme === 'dark'
                    ? 'border-gray-400  bg-slate-700'
                    : 'border-yellow-700  bg-orange-900'
                "
              >
                <div>
                  <div class="mx-auto flex items-center justify-between">
                    <button
                      class="btn glass flex justify-center rounded-full text-orange-200"
                      @click="dec()"
                      :disabled="etape === 1"
                    >
                      <SvgTarget
                        :target="'Chevron1'"
                        :color1="storeUser.themeSvg()"
                        class="flex rotate-180"
                      ></SvgTarget></button
                    ><DialogTitle
                      as="h3"
                      class="text-lg font-medium leading-6"
                      :class="storeUser.themeTxt()"
                      >{{
                        prologueTxt[storeUser.userData.language][etape].title
                      }}</DialogTitle
                    >
                    <button
                      class="btn glass flex justify-center rounded-full text-orange-200"
                      @click="inc()"
                    >
                      <SvgTarget
                        :target="'Chevron1'"
                        :color1="storeUser.themeSvg()"
                        class="flex"
                      ></SvgTarget>
                    </button>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <div class="mt-2">
                      <p class="text-sm" :class="storeUser.themeTxt()">
                        {{
                          prologueTxt[storeUser.userData.language][etape].txt
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
//import data
import prologueTxt from "@modules/prologue/dataTxt/prologue";
//import utilities
import SvgTarget from "@components/utilities/SvgTarget.vue";
//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();
const open = ref(true);
const etape = ref(1);

function inc() {
  etape.value = etape.value + 1;
}
function dec() {
  etape.value = etape.value - 1;
}
function setEtape() {
  etape.value = storeUser.userData.prologueEtape;
}

watch(
  () => etape.value,
  () => {
    console.log("ici");
    storeUser.userData.prologueEtape = etape.value;
  },
);
onMounted(() => {
  setEtape();
});
</script>
