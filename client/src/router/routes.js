const routes = [
  {
    path: "/",
    component: () => import("layouts/.template.vue"),
    children: [
      {
        name: "Welcome",
        path: "",
        component: () => import("pages/.template.vue"),
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
