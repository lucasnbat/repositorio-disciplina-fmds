<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu @logout="deslogar" titulo="Menu principal" /> <!--Filho = Menu, comunica com ele com props-->
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- <div class="margin-right"> {{ status }}</div> -->
        <RouterView v-if="route.path != '/'" />
        <v-card v-else>
          <v-card-title>Meu site</v-card-title>
          <v-card-text>
            <p>Você está: {{ status }}</p>
            <p>Sua página é: {{ route.path }}</p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const drawer = ref(true)
const status = ref('Logado')
const deslogar = () => {
  status.value = 'Deslogado'
}
</script>
