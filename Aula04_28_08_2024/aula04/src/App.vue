<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Risadinha Company LTDA</v-app-bar-title>
    </v-app-bar>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
