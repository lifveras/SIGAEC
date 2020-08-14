import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TrabalhosAcademicos from "../views/TrabalhosAcademicos.vue";
import MeusEventos from "../views/MeusEventos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/trabalhos-academicos",
    name: "TrabalhosAcademicos",
    component: TrabalhosAcademicos,
  },
  {
    path: "/eventos-inscritos",
    name: "EventosInscritos",
    component() {
      return import("../views/EventosInscritos.vue");
    },
  },
  {
    path: "/meus-eventos",
    name: "MeusEventos",
    component: MeusEventos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
