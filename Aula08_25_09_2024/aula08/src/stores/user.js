import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
import router from "@/router";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    useUserStore.setUser(auth.currentUser);
  }
});

setPersistence(auth, browserSessionPersistence);

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      displayName: "",
      email: "",
      photoURL: "",
      accessToken: "",
    },
  }),
  actions: {
    async login() {
      const result = await signInWithPopup(auth, provider);
      this.user = result.user;
      router.push("/admin/dashboard");
      console.log("Usuário logado:", this.user);
      console.log(result);
    },
    async logout() {
      await signOut(auth);
      this.user.accessToken = "";
      this.user.displayName = "";
      this.user.email = "";
      this.user.photoURL = "";
      router.push("/login");
    },
  },
  getters: {
    isLogin: (state) => !!state.user.accessToken,
    getUser:
  },
});
