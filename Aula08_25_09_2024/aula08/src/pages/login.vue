<template>
  <v-container style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh">
    <v-btn @click="store.login" color="primary" style="max-width: 300px;">LOGAR COM GOOGLE</v-btn>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()
</script>
