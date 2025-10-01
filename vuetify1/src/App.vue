<script setup>
  import { ref } from 'vue';

  const drawer = ref(false);
  const items = [
    { title: 'Inici', icon: 'mdi-home', route: '/' },
    { title: 'Columnes', icon: 'mdi-pillar', route: '/columnes' },
    { title: 'Fitxa', icon: 'mdi-card-account-mail', route: '/fitxa' },
  ];

</script>


<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="d-flex align-center"
          :href="item.route"
          link
          @click="drawer = false">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>




    <!-- Toolbar -->
    <v-toolbar color="blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
    </v-toolbar>




    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
  