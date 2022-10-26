<template>
  <div class="mx-auto flex w-[80%] flex-col">
    <div name="nav" class="flex justify-between">
      <button
        class="btn glass flex justify-center"
        :class="storeUser.themeTxt()"
        @click="view === 'project' ? (view = 'personal') : (view = 'project')"
      >
        <SvgTarget
          :target="'Chevron1'"
          :color1="storeUser.themeSvg()"
          class="mr-4 flex rotate-180"
        ></SvgTarget>
        <p>
          {{
            view === "project"
              ? entranceTxt[storeUser.userData.language].nav[0]
              : entranceTxt[storeUser.userData.language].nav[1]
          }}
        </p>
      </button>
      <button
        class="btn glass flex justify-center"
        :class="storeUser.themeTxt()"
        @click="view === 'log' ? (view = 'personal') : (view = 'log')"
      >
        <p>
          {{
            view === "log"
              ? entranceTxt[storeUser.userData.language].nav[0]
              : entranceTxt[storeUser.userData.language].nav[2]
          }}
        </p>

        <SvgTarget
          :target="'Chevron1'"
          :color1="storeUser.themeSvg()"
          class="ml-4 flex"
        ></SvgTarget>
      </button>
    </div>
    <div name="content">
      <PersonalPresentation v-if="view === 'personal'"></PersonalPresentation>
      <ProjectPresentation v-if="view === 'project'"></ProjectPresentation>
      <LogPage v-if="view === 'log'"></LogPage>
    </div>
  </div>
</template>

<script setup>
// import utilities
import { onMounted, ref, watch } from "vue";
import router from "@router";
import SvgTarget from "@components/utilities/SvgTarget.vue";
//import components
import PersonalPresentation from "./PersonalPresentation.vue";
import ProjectPresentation from "./ProjectPresentation.vue";
import LogPage from "./logPage/LogPage.vue";
//import data
import entranceTxt from "@modules/entrance/dataTxt/entrance";
//import store
import useStoreUser from "@stores/user";

//declaration obligatoire des imports
const storeUser = useStoreUser();

//const utilisé
const view = ref("personal");

//fontion
function setView () {
  if (router.currentRoute.value.params.view !== "") {
    view.value = router.currentRoute.value.params.view
  }
} 

// truc de VUE
watch(() => view.value, () => {
  router.push({name:'Entrance', params: {view: view.value}})
})

onMounted(() => {
  setView()
})
</script>
