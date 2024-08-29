<!-- Segurança: prefira v-if e v-else, se não, v-show (que só tira ou coloca classe)-->

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Risadinha Company LTDA</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>

        <v-card v-if="confirmar">
          <v-card-title>Confirmação de dados</v-card-title>
          <v-card-text>Gargalhada</v-card-text>
          <v-card-text>
            <v-list>
              <v-list-item>Nome: {{ nome }}</v-list-item>
              <v-list-item>E-mail: {{ email }}</v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn color="warning" variant="outlined" @click="confirmar = false">Alterar</v-btn>
            <v-spacer />
            <v-btn color="success" variant="outlined">Confirmar</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else>
          <v-card-title>Risos</v-card-title>
          <v-card-text>Risadinha</v-card-text>
          <v-card-text>
            <v-text-field variant="outlined" label="Seu nome completo" v-model="nome" />
            <v-text-field variant="outlined" label="Seu melhor e-mail" v-model="email" />
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="outlined" @click="confirmar = true">Salvar</v-btn>
            <v-spacer />
            <v-btn color="warning" variant="outlined">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)

const nome = ref('')
const email = ref('')

const confirmar = ref(false)
</script>
