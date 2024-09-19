<template>
  <v-container>
    <v-card>
      <v-card-text>{{ app.getUserName }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const app = useAppStore()
</script>
