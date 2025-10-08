<script setup>
    const { tasques } = defineProps({
        tasques: Array
    })


    function editarTasca(index){
        const tasca = prompt("Edita la tasca")
        props.tasques.push(tasca[index])
    }

    function eliminarTasca(index){
        tasques.splice(index,1)
    }
</script>

<template>
  <v-container class="fill-height d-flex flex-column align-center justify-start">
    <!-- Títol centrat -->
    <h1 class="text-center mb-6">Visualitzar Tasques</h1>


    <!-- Llista de tasques -->
    <v-row class="d-flex flex-row flex-wrap justify-start" dense>
      <v-col
        v-for="(tasca, index) in tasques"
        :key="index"
        cols="auto"
        class="mb-4"
      >
        <v-card class="pa-4" outlined>
          <v-card-title class="text-h6">{{ tasca.titol }}</v-card-title>
          <v-card-title class="text-h6">{{ tasca.descripcio }}</v-card-title>
          <v-card-title class="text-h6">{{ tasca.estat }}</v-card-title>

          <v-card-actions>
            <v-btn color="primary" size="small" @click="editarTasca(index)">
              <v-icon left>mdi-pencil</v-icon>Edita
            </v-btn>
            <v-btn color="warning" size="small" @click="eliminarTasca(index)">❌</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
