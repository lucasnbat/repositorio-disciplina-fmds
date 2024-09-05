<template>
  <v-list>
    <v-list-subheader>
      {{ titulo }}
    </v-list-subheader>
    <v-list-item prepend-icon="mdi-home" title="Home" to="/" />
    <v-list-item prepend-icon="mdi-whatsapp" title="Contato" to="/Contato" />
    <v-list-item prepend-icon="mdi-account" title="Minha conta" to="/MinhaConta" />
    <v-list-item prepend-icon="mdi-file-document" title="Relatórios" to="/Relatorio" />
  </v-list>
  <v-divider></v-divider>
  <v-btn block color="primary" @click="$emit('logout')">
    Deslogar
  </v-btn>
</template>

<script setup>

const props = defineProps({
  titulo: String,
})
</script>
