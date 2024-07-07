import { Router } from "express";
import { signUpRouter } from "../modules/userSignUp/userSignUP.route";
import { AuthRouter } from "../modules/Auth/auth.route";
import { servicesRoute } from "../modules/services/service.route";

const router = Router();
const allRoutes = [
  {
    path: "/auth",
    route: signUpRouter,
  },
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/",
    route: servicesRoute,
  },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
