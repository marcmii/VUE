<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  tasques: Array
})

const router = useRouter()

function afegirTasca() {
  const tasca = prompt("Escriu una tasca")
  if (tasca) {
    if (!props.tasques.includes(tasca)) {
      props.tasques.push(tasca)
      alert("Tasca creada correctament!")
      
    } else {
      alert("Aquesta tasca ja existeix!")
    }
  }
}
</script>

<template>
  <v-container class="fill-height flex-column justify-center align-center">
    <h1>Afegir Tasca</h1>
    <v-btn color="primary" @click="afegirTasca">Crea Tasca</v-btn>
  </v-container>
</template>
