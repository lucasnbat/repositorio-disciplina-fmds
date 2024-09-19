<template>
  <v-container>
    <v-card>
      <v-card-item>Página com dados do usuário: {{ user.name }}</v-card-item>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useUsersStore } from '@/stores/users'

const $route = useRoute();
const store = useUsersStore();

const user = store.getUserById($route.params.id)

</script>
