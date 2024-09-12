<template>
  <!-- o elemento app aqui embaixo força a encaixar as coisas e nnão ultrapassar limites do app-->
  <v-app app>
    <v-toolbar color="primary" app>
      <v-toolbar-title>Registers System</v-toolbar-title>
      <v-toolbar-action class="mr-2">
        <v-btn text to="/" prepend-icon="mdi-home">Home</v-btn>
        <v-btn text to="/form" prepend-icon="mdi-account">New</v-btn>
      </v-toolbar-action>
    </v-toolbar>
    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
//
</script>
