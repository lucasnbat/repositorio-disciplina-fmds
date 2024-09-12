<template>
  <v-container>
    <!-- Formulário menor centralizado -->
    <v-card max-width="500" class="mx-auto">
      <v-card-title>Register Form</v-card-title>
      <v-spacer />
      <v-card-text>
        <v-form>
          <v-text-field v-model="name" prepend-inner-icon="mdi-account" variant="underlined" label="Name" />
          <v-text-field v-model="lastname" prepend-inner-icon="mdi-account-outline" variant="underlined"
            label="Last name" />
          <v-text-field v-model="email" prepend-inner-icon="mdi-email" variant="underlined" label="E-mail" />
          <v-text-field v-model="password" prepend-inner-icon="mdi-lock" variant="underlined" label="Password" />

          <v-list density="compact">
            <!-- bind (:nomeDoAtributo): serve para enviar variaveis do js para o template -->
            <!-- model (v-model=""): serve para via de mão dupla entre template e variaveis js -->
            <!-- :class="{ 'text-success': requirement.checked }" só fica verde sucesso (classe) quando tá checked-->
            <v-list-item v-for="requirement in passwordRequirements" :key="requirement"
              :prepend-icon="(requirement.checked) ? 'mdi-check' : 'mdi-alert-circle'"
              :class="{ 'text-success': requirement.checked }">
              {{ requirement.name }}
            </v-list-item>
          </v-list>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error">Cancel</v-btn>
        <v-spacer />
        <v-btn color="primary" variant="flat" :disabled="ready">Save</v-btn>
        <!-- ready: fazer ficar true só quando tudo tiver preenchido -->
      </v-card-actions>
    </v-card>
  </v-container>

</template>

<script setup>
import { ref, watch } from 'vue'

const name = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const ready = ref(false)

const passwordRequirements = ref([
  { name: 'Password need to have a minimal of eight characters', checked: false },
  { name: 'Password need to have at last one number', checked: false },
  { name: 'Password need to have at last one character from the alphabet', checked: false },
  { name: 'Password need to have at last one special character', checked: false }
])

watch(password, (val) => {
  passwordRequirements.value[0].checked = val.length >= 8 //substitui o checkd do primeiro objeto por true
  passwordRequirements.value[1].checked = !!val.match(/[0-9]/)
  passwordRequirements.value[2].checked = !!val.match(/[a-zA-Z]/)
})
</script>
