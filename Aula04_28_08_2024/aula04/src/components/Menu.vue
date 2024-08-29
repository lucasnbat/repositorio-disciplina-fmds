<template>
  <v-list>
    <v-list-item prepend-avatar="https://github.com/0xpuck.png" subtitle="risadinha@teste.com"
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
      prependIcon: "mdi-home",
      link: "true"
    }
  },
  {
    title: "Reports",
    props: {
      prependIcon: "mdi-chart-bar",
      link: "true"
    }
  },
  {
    title: "Contact & Suport",
    props: {
      prependIcon: "mdi-whatsapp",
      link: "true"
    }
  },
]
</script>
