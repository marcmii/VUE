<script setup>
import { ref } from 'vue'
import { tasques } from '../stores/global/global.js'


const drawer = ref(false)


const items = [
  { title: 'Afegir Tasques', icon: 'mdi-plus-box', route: '/afegir' },
  { title: 'Visualitzar Tasques', icon: 'mdi-calendar-search', route: '/visualitzar' },
]
</script>

<template>
  <v-app>
    
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
          link
          @click="drawer = false"
          class="d-flex align-center"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    
    <v-toolbar color="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Gestor de Tasques</v-toolbar-title>
    </v-toolbar>

    
    <v-main>
      <router-view /> 
    </v-main>
  </v-app>
</template>
