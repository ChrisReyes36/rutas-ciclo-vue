import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    component: () =>
      import(
        /*webpackChunkName: "PokemonLayout"*/ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        // Importación perezosa de la página AboutPage
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:pokemonId",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const pokemonId = Number(route.params.pokemonId);
          return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-home" },
      },
    ],
  },
  {
    path: "/dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /*webpackChunkName: "dbzLayout"*/ "@/modules/dbz/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /*webpackChunkName: "Characters"*/ "@/modules/dbz/pages/Characters"
          ),
      },
      {
        // Importación perezosa de la página AboutPage
        path: "about",
        name: "dbz-about",
        component: () =>
          import(/*webpackChunkName: "AboutPage"*/ "@/modules/dbz/pages/About"),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Guard Global - Síncrono
// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("Autenticado");
//     next();
//   } else {
//     console.log(random, "Bloqueado por el beforeEach guard");
//     next({ name: "pokemon-home" });
//   }
// });

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("Autenticado - canAccess");
//       resolve(true);
//     } else {
//       console.log(random, "bloqueado por el beforeEach Guard - canAccess");
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
