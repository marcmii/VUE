<script setup>
import { ref } from 'vue'
import { tasques } from '../stores/global/global.js' 

// 🔹 Afegim estat per controlar el diàleg i la tasca a editar
const dialogObert = ref(false)
const tascaEditada = ref({ titol: '', descripcio: '', estat: false })
const indexEditar = ref(null)

function editarTasca(index) {
  indexEditar.value = index
  const t = tasques.value[index]
  tascaEditada.value = {
    titol: t.titol,
    descripcio: t.descripcio,
    estat: t.estat === 'completada'
  }
  dialogObert.value = true
}

function guardarCanvis() {
  tasques.value[indexEditar.value] = {
    titol: tascaEditada.value.titol,
    descripcio: tascaEditada.value.descripcio,
    estat: tascaEditada.value.estat ? 'completada' : 'pendent'
  }
  dialogObert.value = false
}

function eliminarTasca(index) {
  tasques.value.splice(index, 1)
}
</script>

<template>
  <v-container class="fill-height d-flex flex-column align-center justify-start">
    <h1 class="text-center mb-6">Visualitzar Tasques</h1>

    <v-alert v-if="tasques.length == 0" type="info">
      No hi ha cap tasca encara.
    </v-alert>

    <v-row class="d-flex flex-row flex-wrap justify-start" dense>
      <v-col
        v-for="(tasca, index) in tasques"
        :key="index"
        cols="auto"
        class="mb-4"
      >
        <v-card class="pa-4" outlined>
          <v-card-title class="text-h6">{{ tasca.titol }}</v-card-title>
          <v-card-subtitle>{{ tasca.descripcio }}</v-card-subtitle>
          <v-card-text>{{ tasca.estat }}</v-card-text>

          <v-card-actions>
            <v-btn color="primary" size="small" @click="editarTasca(index)">
              <v-icon left>mdi-pencil</v-icon> Edita
            </v-btn>
            <v-btn color="warning" size="small" @click="eliminarTasca(index)">
              ❌
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 🔹 Diàleg d’edició mínim -->
    <v-dialog v-model="dialogObert" max-width="500px">
      <v-card>
        <v-card-title class="text-h6">Editar Tasca</v-card-title>
        <v-card-text>
          <v-text-field v-model="tascaEditada.titol" label="Títol"></v-text-field>
          <v-textarea v-model="tascaEditada.descripcio" label="Descripció"></v-textarea>
          <v-switch v-model="tascaEditada.estat" label="Completada?" color="success"></v-switch>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogObert = false">Cancel·lar</v-btn>
          <v-btn color="primary" @click="guardarCanvis">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
    