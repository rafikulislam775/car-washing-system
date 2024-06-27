import { Router } from "express";
import { signUpRouter } from "../modules/userSignUp/userSignUP.route";
import { AuthRouter } from "../modules/Auth/auth.route";

const router = Router();
const allRoutes = [
  {
    path: "/auth/signup",
    route: signUpRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
