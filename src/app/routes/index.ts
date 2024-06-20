import { Router } from "express";
import { signUpRouter } from "../modules/userSignUp/userSignUP.route";
import { loginRouter } from "../modules/user/user.route";

const router = Router();
const allRoutes = [
  {
    path: "/auth/signup",
    route: signUpRouter,
  },
  {
    path: "/auth/login",
    route: loginRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
