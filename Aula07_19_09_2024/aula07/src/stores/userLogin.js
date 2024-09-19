import { defineStore } from "pinia";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const useUserLoginStore = defineStore('userLogin', {
  state: () => ({
    displayName: '',
    email: '',
    photoURL: '',
    accessToken: ''
  }),
  getters: {
    isLoggedIn() {
      return this.accessToken !== '';
    },
    user() {
      return {
        displayName: this.displayName,
        email: this.email,
        photoURL: this.photoURL,
        accessToken: this.accessToken
      };
    }
  },
  actions: {
    login() {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
          const user = result.user;
          this.displayName = user.displayName;
          this.email = user.email;
          this.photoURL = user.photoURL;
          user.getIdToken().then((token) => {
            this.accessToken = token;
          });
        }).catch((error) => {
          console.log(error)
        });
    },
    logout() {
      this.displayName = '';
      this.email = '';
      this.photoURL = '';
      this.accessToken = '';
      signOut(auth);
    }
  },
});
