<script setup>
import { ref } from 'vue'
import { tasques } from '../stores/global/global.js' 
import { useRouter } from 'vue-router'

const router = useRouter()


const novaTasca = ref({
  titol: '',
  descripcio: '',
  estat: false
})

const errors = ref({})

function validarFormulari() {
  errors.value = {}
  if (!novaTasca.value.titol.trim()) {
    errors.value.titol = 'El títol no pot estar buit'
    return false
  }
  return true
}

function afegirTasca() {
  if (!validarFormulari()) return

  tasques.value.push({
    titol: novaTasca.value.titol,
    descripcio: novaTasca.value.descripcio,
    estat: novaTasca.value.estat ? 'completada' : 'pendent'
  })

  novaTasca.value = { titol: '', descripcio: '', estat: false }
  alert('Tasca creada correctament!')
}
</script>

<template>
  <v-container class="fill-height flex-column justify-center align-center">
    <h1 class="mb-4">Afegir Tasca</h1>

    <!-- Formulari dins un v-card -->
    <v-form
      class="d-flex flex-column gap-4"
      style="max-width: 400px; width: 100%;"
      @submit.prevent="afegirTasca"
    >
      <v-text-field
        v-model="novaTasca.titol"
        label="Títol"
        :error-messages="errors.titol"
        required
      ></v-text-field>

      <v-textarea
        v-model="novaTasca.descripcio"
        label="Descripció (opcional)"
        rows="2"
      ></v-textarea>

      <v-switch
        v-model="novaTasca.estat"
        label="Completada?"
        color="success"
      ></v-switch>

      <v-btn type="submit" color="primary" block>Afegir Tasca</v-btn>
    </v-form>
  </v-container>
</template>