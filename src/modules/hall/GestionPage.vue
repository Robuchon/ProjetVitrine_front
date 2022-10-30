    <ProloguePage
      class="min-h-screen bg-corePattern2 py-4"
      v-if="
        storeUser.userData.prologue &&
        storeUser.userData.prologueEtape > 6 &&
        storeUser.userData.prologueEtape < 9
      "
    ></ProloguePage>
