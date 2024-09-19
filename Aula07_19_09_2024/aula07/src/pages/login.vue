<template>
  <v-card v-if="store.isLoggedIn">
    <v-card-title>Login</v-card-title>
    <v-card-text>
      <!-- dados da autenticao com google mostrando minha foto -->
      <v-avatar size="100">
        <img :src="store.user.photoURL" />
      </v-avatar>
      <p>{{ store.user.displayName }}</p>
      <p>{{ store.user.email }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="store.logout">Logout</v-btn>
    </v-card-actions>
  </v-card>
  <div v-else class="text-center">
    <v-btn color="primary" @click="store.login">Login com Google </v-btn>
  </div>
</template>
<script setup>
import { useUserLoginStore } from '@/stores/userLogin'
const store = useUserLoginStore()
</script>
