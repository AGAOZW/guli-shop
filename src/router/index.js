import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        isShow: true,
      },
    },
    {
      path: "/search:keyword?",
      component: Search,
      meta: {
        isShow: true,
      },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isShow: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isShow: false,
      },
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
