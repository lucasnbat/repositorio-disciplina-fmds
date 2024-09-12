<template>
  <v-container>
    <!-- Formulário menor centralizado -->
    <v-card max-width="500" class="mx-auto">
      <v-card-title>Register Form</v-card-title>
      <v-card-subtitle>Customer - {{ fullName }} - {{ now }}</v-card-subtitle>
      <v-spacer />
      <v-card-text>
        <v-form>
          <v-text-field v-model="user.name" prepend-inner-icon="mdi-account" variant="underlined" label="Name" />
          <v-text-field v-model="user.lastName" prepend-inner-icon="mdi-account-outline" variant="underlined"
            label="Last name" />
          <v-text-field v-model="user.email" prepend-inner-icon="mdi-email" variant="underlined" label="E-mail" />
          <v-text-field v-model="user.password" prepend-inner-icon="mdi-lock" variant="underlined" label="Password" />

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

// computed = outros lugares mudaram? muda a var --> verifica se os outros lugares mudam toda hora, 24/7
// watch = observa outros lugares e muda algo
import { ref, watch, computed } from 'vue'

const user = ref({
  name: '',
  lastName: '',
  email: '',
  password: '',
})

const passwordRequirements = ref([
  { name: 'Password need to have a minimal of eight characters', checked: false },
  { name: 'Password need to have at last one number', checked: false },
  { name: 'Password need to have at last one lowercase letter', checked: false },
  { name: 'Password need to have at last one special character', checked: false },
  { name: 'Password need to have at last one uppercase letter', checked: false }
])

// usando arrow function para vigir a prop password do objeto
watch(() => user.value.password, (val) => {
  passwordRequirements.value[0].checked = val.length >= 8 //substitui o checkd do primeiro objeto por true
  passwordRequirements.value[1].checked = !!val.match(/[0-9]/)
  passwordRequirements.value[2].checked = !!val.match(/[a-z]/)
  passwordRequirements.value[3].checked = !!val.match(/[^\w]/)
  passwordRequirements.value[4].checked = !!val.match(/[A-Z]/)

})

const ready = computed(() => {
  const req = passwordRequirements.value.every((obj) => obj.checked === true)
  return !(user.value.name && user.value.lastName && user.value.email && req)
})
const fullName = computed(() => { return user.value.name + ' ' + user.value.lastName })
const now = computed(() => new Date().toLocaleString())
</script>
