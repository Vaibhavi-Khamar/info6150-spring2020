import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/flights",
    name: "Flights",
    component: () => import("../views/Flights.vue")
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue")
  },
  {
    path: "/Sydney",
    name: "Sydney",
    component: () => import("../views/Australia.vue")
  },
  {
    path: "/London",
    name: "London",
    component: () => import("../views/London.vue")
  },
  {
    path: "/Paris",
    name: "Paris",
    component: () => import("../views/Paris.vue")
  },
  {
    path: "/Shanghai",
    name: "Shanghai",
    component: () => import("../views/Shanghai.vue")
  },
  {
    path: "/Chengdu",
    name: "Chengdu",
    component: () => import("../views/Chengdu.vue")
  },
  {
    path: "/Mumbai",
    name: "Mumbai",
    component: () => import("../views/Mumbai.vue")
  },
  {
    path: "/Hotels",
    name: "Hotels",
    component: () => import("../views/Hotels.vue")
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/Orders.vue"),
    meta: {
      requireAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log(store.state.username);
    console.log(router.app.$store.getters.isLoggedIn);
    console.log(router.app.$store.getters.getUsername);
    if (router.app.$store.getters.isLoggedIn) {
      next();
    } else {
      next("/sign-in");
    }
  } else {
    next();
  }
});

export default router;
