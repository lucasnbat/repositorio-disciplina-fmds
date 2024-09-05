<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu @logout="deslogar" titulo="Menu principal" /> <!--Filho = Menu, comunica com ele com props-->
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-chip class="mr-2" :color="(logado_logged) ? 'green' : 'error'" label>{{ statusComputed }}</v-chip>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- <div class="margin-right"> {{ status }}</div> -->
        <RouterView v-if="route.path != '/'" />

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const drawer = ref(true)
const statusComputed = computed(() => {
  return logado_logged.value ? "Logado" : "Deslogado"
})
const logado_logged = ref(true)
const deslogar = () => {
  logado_logged.value = false
}
</script>
