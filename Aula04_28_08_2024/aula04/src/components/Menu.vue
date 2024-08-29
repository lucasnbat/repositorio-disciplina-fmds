<template>
  <v-list>
    <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="risadinha@gmail.com"
      title="Risadinha" />
  </v-list>
  <v-divider />
  <v-list :items="menu">
  </v-list>
</template>

<script setup>
const menu = [
  {
    title: "Home",
    props: {
      prependIcon: "mdi-home"
    }
  },
  {
    title: "Reports",
    props: {
      prependIcon: "mdi-chart-bar"
    }
  },
  {
    title: "Contact & Suport",
    props: {
      prependIcon: "mdi-whatsapp"
    }
  },
]
</script>
