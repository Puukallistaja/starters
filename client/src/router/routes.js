const routes = [
  {
    path: "/",
    component: () => import("layouts/CanvasLayout.vue"),
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("pages/Welcome.vue"),
      },
    ],
  },
  {
    path: "/turakas",
    component: () => import("layouts/CanvasLayout.vue"),
    children: [
      {
        name: "turakas",
        path: "",
        component: () => import("pages/Turakas.vue"),
      },
      {
        name: "turakas",
        path: "match",
        component: () => import("pages/Turakas.vue"),
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue"),
  })
}

export default routes
