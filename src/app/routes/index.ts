import { Router } from "express";
import { signUpRouter } from "../modules/user/userSignUp/userSignUP.route";

const router = Router();
const allRoutes = [
  {
    path: "/auth/signup",
    route: signUpRouter,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
