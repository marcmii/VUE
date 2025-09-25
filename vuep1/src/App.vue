<script setup>
import { reactive } from 'vue'


const ciutats = [
  {
	nom: "Barcelona",
	imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Aerial_view_of_Barceloneta_Beach_and_Port_Vell_in_Barcelona%2C_Spain.jpg/1920px-Aerial_view_of_Barceloneta_Beach_and_Port_Vell_in_Barcelona%2C_Spain.jpg"
  },
  {
	nom: "Madrid",
	imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Palaciorealycatedraldelaalmudena_retouched.jpg/1920px-Palaciorealycatedraldelaalmudena_retouched.jpg"
  },
  {
	nom: "València",
	imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Iglesia_de_Santa_Catarina%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_143.jpg/420px-Iglesia_de_Santa_Catarina%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_143.jpg"
  },
  {
	nom: "Sevilla",
	imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/La_Giralda_August_2012_Seville_Spain.jpg/360px-La_Giralda_August_2012_Seville_Spain.jpg"
  },
  {
	nom: "Bilbao",
	imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bilbao_-_Ayuntamiento_24.jpg/1280px-Bilbao_-_Ayuntamiento_24.jpg"
  }
];



</script>



<template>
  <h2>Ciutats</h2>
   <div id="galeria" v-for="ciutat in ciutats" :key="ciutat.numero">
      {{ ciutat.nom }} - <img :src="ciutat.imatge" alt="" />
    </div>

 
</template>



<style scoped>
  img {
    width: 200px;
    margin-top: 10px;
  }
</style>

