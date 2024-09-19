// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com'
    }
  }),
  getters: {
    getUserName() {
      return this.user.name
    }
  },
  actions: {
    updateUser(name) {
      this.user.name = name
    }
  }
})
