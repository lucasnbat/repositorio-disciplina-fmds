<template>
  <v-list>
    <v-list-subheader>
      {{ titulo }}
    </v-list-subheader>
    <v-list-item prepend-icon="mdi-home" title="Home" />
  </v-list>
</template>

<script setup>

const props = defineProps({
  titulo: String,
})
</script>
