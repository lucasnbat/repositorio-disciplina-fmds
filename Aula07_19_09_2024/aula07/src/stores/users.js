import { defineStore } from 'pinia'

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe'
      },
      {
        id: 3,
        name: 'Mara Doe'
      },
      {
        id: 4,
        name: 'Sara Doe'
      }
    ]
  }),
  getters: {
    getUsers(state) {
      return state.users
    },
    getUserById(state) {
      return (id) => state.users.find((user) => user.id == id)
    }
  },
  actions: {
    addUser(name) {
      this.users.push({
        id: this.users.length + 1,
        name, //name: name
      })
    }
  },
})
