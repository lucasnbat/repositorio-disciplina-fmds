import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
import router from "@/router";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    useUserStore().$patch({
      user: {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        accessToken: await user.getIdToken(),
      },
    });
  } else {
    router.push("/login");
  }
});

// persistência local
setPersistence(auth, browserLocalPersistence);

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
  },
});
