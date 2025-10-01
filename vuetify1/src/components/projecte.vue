<template>
  <v-container class="fill-height" max-width="900">
    <div>
      <h1>TASQUES</h1>
      <v-btn @click="crearTasca">Crea Tasca</v-btn>
      

    </div>
  </v-container>
</template>

<script setup>

  import { ref } from 'vue'

  let tasques = [];

  function crearTasca(){

    const tasca = prompt("Esciu una tasca")

    if (tasca){
      alert("La tasca s'ha creat correctament")
    }
    mostrarTasques();
  }

  function mostrarTasques(){

  }


</script>
