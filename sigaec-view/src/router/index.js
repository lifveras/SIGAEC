import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TrabalhosAcademicos from "../views/TrabalhosAcademicos.vue";
import MeusEventos from "../views/MeusEventos.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { notRenderMenu: true },
    children: [{ path: "login", meta: { notRenderMenu: true } }],
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/trabalhos-academicos",
    name: "TrabalhosAcademicos",
    component: TrabalhosAcademicos,
  },
  {
    path: "/eventos-inscritos",
    name: "EventosInscritos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(
        /* webpackChunkName: "about" */ "../views/EventosInscritos.vue"
      );
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
