<template>
  <div class="text-orange-900">
    <h3>Edit</h3>
    <h3>Nom: Glazo</h3>
    <div class="flex">
      <img src="../../core/assets/img/combatant/combattant1.jpeg" alt="" />
      <div>
        <h3>points: {{ 20 }}</h3>
        <h3>Force: {{ 5 }}</h3>
        <h3>Agi: {{ 5 }}</h3>
        <h3>Def: {{ 5 }}</h3>
        <h3>Pv: {{ 5 }}</h3>
        <h3>fame: {{ 20 }}</h3>
      </div>
    </div>
    <button
      class="btn glass mx-auto mt-10 flex justify-center text-orange-800"
      @click.prevent="submit()"
    >
      <p>Sauvegarder</p>
    </button>
  </div>
</template>

<script setup></script>