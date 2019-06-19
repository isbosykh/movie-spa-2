import Vue from "vue";
import Router from "vue-router";
import ListView from "./views/List";
import ItemView from "@/views/Item";
import CastView from "@/views/Cast";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list",
      component: ListView
    },
    {
      path: "/item",
      name: "item",
      component: ItemView
    },
    {
      path: "/cast",
      name: "cast",
      component: CastView
    }
  ]
});
