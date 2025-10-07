<script setup>
const { tasques } = defineProps({
  tasques: Array
})


function editarTasca(element){
    
}

</script>

<template>
  <v-container class="fill-height flex-column justify-start align-center">
    <h1>Visualitzar Tasques</h1>
    <v-list>
      <v-list-item v-for="(tasca, index) in tasques" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ tasca }}</v-list-item-title>
          <v-btn color="warning" size="x-small" @click="editarTasca(index)"><v-icon left>mdi-pencil</v-icon>Edita</v-btn>

        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>
