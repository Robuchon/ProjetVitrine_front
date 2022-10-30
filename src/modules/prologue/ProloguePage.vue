<template>
    <div>
        <div class="mx-auto flex lg:w-[80%] max-w-7xl flex-col">
            <Etape1 v-if="storeUser.userData.prologueEtape > 0 && storeUser.userData.prologueEtape < 7"></Etape1>
        <Etape2 v-if="storeUser.userData.prologueEtape > 6"></Etape2>
        </div>
        
    </div>
</template>

<script setup>
//component
import Etape1 from "./etape/Etape1.vue";
import Etape2 from "./etape/Etape2.vue";

//import store
import useStoreUser from "@stores/user";
const storeUser = useStoreUser();

</script>