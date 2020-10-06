import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"
import ProfilePage from "../views/ProfilePage.vue"
import DiscoverPage from "../views/DiscoverPage.vue"
import FeedPage from "../views/FeedPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignupPage
  },
  {
    path: "/login",
    name: "Login-page",
    component: LoginPage
  },
  {
    path: "/profilepage",
    name: "Profile-page",
    component: ProfilePage
  },
  {
    path: "/discoverpage",
    name: "Discover-page",
    component: DiscoverPage
  },
  {
    path: "/feedpage",
    name: "Feed-page",
    component: FeedPage
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
