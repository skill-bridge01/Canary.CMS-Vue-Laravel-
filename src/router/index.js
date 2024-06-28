import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layout/index.vue"),
    // redirect: "/home",
    // meta: {
    //   title: "Home",
    // },

    children: [
      {
        path: "home",
        component: () => import("../views/Home/index.vue"),
        meta: {
          title: "",
        },
      },
      {
        path: "/services",
        name: "Our Services",
        component: () => import("../views/Services/index.vue"),
        meta: {
          title: "",
        },
      },
      {
        path: "/library",
        name: "Resource Library",
        component: () => import("../views/Library/index.vue"),
        meta: {
          title: "",
        },
        // children: [
        //   {
        //     path: "blog1",
        //     name: "Blog1",
        //     component: () => import("../views/Library/Blog.vue"),
        //     meta: {
        //       title: "",
        //     },
        //   },
        // ],
      },
      {
        path: "/details",
        name: "Details",
        component: () => import("../views/Library/components/Details.vue"),
        meta: {
          title: "",
        },
      },
      {
        path: "/articles",
        name: "Articles",
        component: () => import("../views/Articles/index.vue"),
        meta: {
          title: "",
        },
      },

      {
        path: "/pagination",
        name: "Pagination",
        component: () => import("../views/Pagination/index.vue"),
        meta: {
          title: "",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
  routes,
});

export default router;
