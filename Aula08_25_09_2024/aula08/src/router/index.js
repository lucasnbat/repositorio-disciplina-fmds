/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
import { useUserStore } from "@/stores/user";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

+(
  // Workaround for https://github.com/vitejs/vite/issues/11804
  router.onError((err, to) => {
    if (
      err?.message?.includes?.("Failed to fetch dynamically imported module")
    ) {
      if (!localStorage.getItem("vuetify:dynamic-reload")) {
        console.log("Reloading page to fix dynamic import error");
        localStorage.setItem("vuetify:dynamic-reload", "true");
        location.assign(to.fullPath);
      } else {
        console.error(
          "Dynamic import error, reloading page did not fix it",
          err,
        );
      }
    } else {
      console.error(err);
    }
  })
);

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

router.beforeEach((to, from, next) => {
  const store = useUserStore();
  const loggedIn = store.isLogin;
  const auth = getAuth()

  if (!store.user.accessToken) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        store.$patch({
          user: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            accessToken: user.accessToken,
          },
        });
        next();
      } else {
        if (to.path.includes("/admin") && !loggedIn) {
          next("/login");
        } else {
          next();
        }
      }
    });
  } else {
    next();
  }
});

export default router;
