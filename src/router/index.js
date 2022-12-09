import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import UserProfilePage from "../pages/UserProfilePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/user",
      component: UserPage,
      children: [
        {
          path: "profile",
          component: UserProfilePage,
        },
        {
          path: "stars",
          component: UserProfilePage,
        },
      ],
    },
    {
      path: "/projects",
      component: ProjectsPage,
    },
    {
      path: "/projects/:projectId",
      component: ProjectDetailPage,
    },
  ],
});

export default router;
