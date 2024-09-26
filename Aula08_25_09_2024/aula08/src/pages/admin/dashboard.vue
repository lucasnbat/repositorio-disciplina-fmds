<template>
  <v-toolbar app color="primary" dark>
    <!-- usuario logado -->
    <v-avatar>
      <v-img :src="store.user.photoURL" />
    </v-avatar>
    <v-toolbar-title>{{ store.user.displayName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="store.logout">Sair</v-btn>
  </v-toolbar>
  <v-container>
    <v-card>
      <v-card-title>Dashboard</v-card-title>
      <v-card-text>Contéudo do Dash aqui</v-card-text>
    </v-card>
  </v-container>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()
</script>
